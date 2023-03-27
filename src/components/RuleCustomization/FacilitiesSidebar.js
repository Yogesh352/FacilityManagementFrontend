import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

import { hasChildren } from "./utils";
import { Typography } from "@mui/material";
import { Button, Group, Modal, TextInput } from "@mantine/core";
import { ExpandIcon, PlusIcon, RightIcon } from "../Icon";

export default function FacilitiesSidebar({
  facilities,
  selected,
  setSelected,
}) {
  const [clicked, setClicked] = useState();
  useEffect(() => {
    setSelected(clicked);
  }, [clicked, selected]);
  return facilities.map((item, key) => (
    <MenuItem
      key={key}
      item={item}
      selected={selected}
      setSelected={setSelected}
      clicked={clicked}
      setClicked={setClicked}
    />
  ));
}

const MenuItem = ({ item, selected, setSelected, clicked, setClicked }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return (
    <Component
      item={item}
      selected={selected}
      setSelected={setSelected}
      clicked={clicked}
      setClicked={setClicked}
    />
  );
};

const SingleLevel = ({
  item,
  submit,
  selected,
  setSelected,
  clicked,
  setClicked,
}) => {
  const [openTagModal, setopenTagModal] = useState(false);
  const [chosenLevel, setChosenLevel] = useState();
  const [newTag, setNewTag] = useState();
  const margin = `ml-${item.ml}`;
  return (
    <>
      <Modal
        opened={openTagModal}
        onClose={() => {
          setopenTagModal(false);
        }}
        title="Add Tags"
        size="lg"
      >
        <TextInput
          className="inputsmall"
          icon={<MeetingRoomIcon />}
          placeholder="Name"
          // value={buildingName}
          onChange={(e) => {
            setNewTag(e.target.value);
          }}
        />
        <Group position="right" className="mt-5">
          <Button
            onClick={() => {
              chosenLevel.items.push({
                title: newTag,
                ml: 8,
                text: "sm",
              });
              setopenTagModal(false);
            }}
            className="border-black text-black"
            variant="outline"
          >
            submit
          </Button>
        </Group>
      </Modal>
      <ListItem button>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText
          className={`ml-${item?.ml}`}
          primary={
            <Typography variant={`${item.text === "sm" ? "body2" : "body1"}`}>
              {item.title}
            </Typography>
          }
          onClick={() => {
            setClicked(item);
          }}
        />
        {console.log(item?.ml)}
        {item.isLevel && (
          <Button
            leftIcon={<PlusIcon />}
            variant="outline"
            size="xs"
            className="border-black text-black w-28"
            onClick={() => {
              setopenTagModal(true);
              setChosenLevel(item);
              setClicked(item);
            }}
          >
            Add Tags
          </Button>
        )}
      </ListItem>
    </>
  );
};

const MultiLevel = ({
  item,
  facilities,
  selected,
  setSelected,
  clicked,
  setClicked,
}) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const [openTagModal, setopenTagModal] = useState(false);
  const [chosenLevel, setChosenLevel] = useState();
  const [newTag, setNewTag] = useState();

  const [openSectionModal, setopenSectionModal] = useState(false);
  const [chosenBuilding, setChosenBuilding] = useState();
  const [newSection, setNewSection] = useState();
  const [margin, setMargin] = useState(`ml-${item.ml}`);

  useEffect(() => {
    console.log("Hello");
  }, [facilities]);

  useEffect(() => {
    setMargin(`ml-${item.ml}`);
  }, [item]);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Modal
        opened={openTagModal}
        onClose={() => {
          setopenTagModal(false);
        }}
        title="Add Tags"
        size="lg"
      >
        <TextInput
          className="inputsmall"
          icon={<MeetingRoomIcon />}
          placeholder="Name"
          // value={buildingName}
          onChange={(e) => {
            setNewTag(e.target.value);
          }}
        />
        <Group position="right" className="mt-5">
          <Button
            onClick={() => {
              chosenLevel.items.push({
                title: newTag,
                ml: 8,
                text: "sm",
              });
              setopenTagModal(false);
            }}
            className="border-black text-black"
            variant="outline"
          >
            submit
          </Button>
        </Group>
      </Modal>

      <Modal
        opened={openSectionModal}
        onClose={() => {
          setopenSectionModal(false);
        }}
        title="Add Section"
        size="lg"
      >
        <TextInput
          className="inputsmall"
          icon={<MeetingRoomIcon />}
          placeholder="Section Name"
          // value={buildingName}
          onChange={(e) => {
            setNewSection(e.target.value);
          }}
        />
        <Group position="right" className="mt-5">
          <Button
            onClick={() => {
              chosenBuilding.items.push({
                title: newSection,
                isLevel: true,

                ml: 4,
                items: [],
              });
              setopenSectionModal(false);
              console.log(chosenBuilding);
            }}
            className="border-black text-black"
            variant="outline"
          >
            submit
          </Button>
        </Group>
      </Modal>
      <Group>
        <ListItem button className="w-[1/2]">
          {open ? (
            <ExpandIcon
              onClick={handleClick}
              className={`ml-${item?.ml} mr-5`}
            />
          ) : (
            <RightIcon
              onClick={handleClick}
              className={`ml-${item?.ml} mr-5`}
            />
          )}
          {console.log(item?.ml)}
          {/* <ListItemIcon>{item.icon}</ListItemIcon> */}

          <ListItemText
            className={`ml-4`}
            onClick={() => setClicked(item)}
            primary={
              <Typography variant={`${item.text === "sm" ? "body2" : "body1"}`}>
                {item.title}
              </Typography>
            }
          />
          {item.isLevel && (
            <Button
              leftIcon={<PlusIcon />}
              variant="outline"
              size="xs"
              className="border-black text-black w-28"
              onClick={() => {
                setopenTagModal(true);
                setChosenLevel(item);
              }}
            >
              Add Tags
            </Button>
          )}
          {item.isBuilding && (
            <Button
              leftIcon={<PlusIcon />}
              variant="outline"
              size="xs"
              className="border-black text-black w-28"
              onClick={() => {
                setopenSectionModal(true);
                setChosenBuilding(item);
              }}
            >
              Add Level
            </Button>
          )}
        </ListItem>
      </Group>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <MenuItem
              key={key}
              item={child}
              margin={child.ml}
              selected={selected}
              setSelected={setSelected}
              clicked={clicked}
              setClicked={setClicked}
            />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};
