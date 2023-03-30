import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

import { hasChildren } from "./utils";
import { Typography } from "@mui/material";
import { Box, Button, Group, Modal, TextInput } from "@mantine/core";
import { ExpandIcon, PlusIcon, RightIcon } from "../Icon";
import { facilities } from "./Facilities";

export default function FacilitiesSidebar({
  facilities,
  selected,
  setSelected,
  priorityUpdate,
  setPriorityUpdate,
}) {
  const [clicked, setClicked] = useState();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (clicked != null) {
      setSelected(clicked);
    }
  }, [clicked, selected]);
  useEffect(() => {
    console.log("Hello");
  }, [counter]);

  useEffect(() => {
    console.log("SidebarUpdatePriority");
    console.log(priorityUpdate);
  }, [priorityUpdate]);
  return facilities.map((item, key) => (
    <MenuItem
      key={key}
      item={item}
      selected={selected}
      setSelected={setSelected}
      clicked={clicked}
      setClicked={setClicked}
      counter={counter}
      setCounter={setCounter}
      priorityUpdate={priorityUpdate}
      setPriorityUpdate={setPriorityUpdate}
    />
  ));
}

const MenuItem = ({
  counter,
  setCounter,
  item,
  selected,
  setSelected,
  clicked,

  setClicked,
  facilities,
}) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return (
    <Component
      counter={counter}
      setCounter={setCounter}
      item={item}
      selected={selected}
      setSelected={setSelected}
      clicked={clicked}
      setClicked={setClicked}
      facilities={facilities}
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
  facilities,
  counter,
  setCounter,
}) => {
  const [openTagModal, setopenTagModal] = useState(false);
  const [chosenLevel, setChosenLevel] = useState();
  const [newTag, setNewTag] = useState();

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
                rules: {
                  availability: ["0900", "1700"],
                  bookingAmount: 50,
                  minStudents: 3,
                  earlyCheckout: true,
                  roomDescription:
                    "Lights automatic control and aircon is manual",
                },
              });
              setCounter(counter + 1);
              setopenTagModal(false);
            }}
            className="border-black  text-black"
            variant="outline"
          >
            Submit
          </Button>
        </Group>
      </Modal>
      <ListItem button>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText
          className={`w-24 ${item?.isLevel ? "ml-4" : "ml-8"}`}
          primary={
            <Typography
              sx={
                item?.text === "small"
                  ? { fontWeight: "bold", fontSize: 14 }
                  : { fontSize: 14 }
              }
            >
              <Group>
                {item.title}
                {item.isLevel && (
                  <Box className="border-black bg-customblue px-2 rounded-full text-white">
                    {item?.priority}
                  </Box>
                )}
              </Group>
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
            variant="filled"
            size="xs"
            className="border-black bg-customblue text-white w-28"
            onClick={() => {
              setopenTagModal(true);
              setChosenLevel(item);

              // setClicked(item);
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
  counter,
  setCounter,
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

  // useEffect(() => {
  //   console.log("Hello");
  // }, [facilities]);

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
                rules: {
                  availability: ["0900", "1700"],
                  bookingAmount: 50,
                  minStudents: 3,
                  earlyCheckout: true,
                  roomDescription:
                    "Lights automatic control and aircon is manual",
                },
              });
              setCounter(counter + 1);
              setopenTagModal(false);
            }}
            className="border-black text-black"
            variant="outline"
          >
            Submit
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
                text: "sm",
                ml: 4,
                items: [],
                rules: {
                  availability: ["0900", "1700"],
                  bookingAmount: 50,
                  minStudents: 3,
                  earlyCheckout: true,
                  roomDescription:
                    "Lights automatic control and aircon is manual",
                },
              });
              setopenSectionModal(false);
              console.log(chosenBuilding);
            }}
            className="border-black text-black"
            variant="outline"
          >
            Submit
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
              <Typography
                sx={
                  item?.text === "small"
                    ? { fontWeight: 600, fontSize: 14 }
                    : { fontWeight: "bold", fontSize: 18 }
                }
                // variant={`${item.text === "sm" ? "body2" : "body1"} `}
              >
                <Group>
                  {item.title}
                  {item.isLevel && (
                    <Box className="border-black bg-customblue px-2 rounded-full text-white">
                      {item?.priority}
                    </Box>
                  )}
                </Group>
              </Typography>
            }
          />
          {item.isLevel && (
            <Button
              leftIcon={<PlusIcon />}
              variant="outline"
              size="xs"
              className="border-black bg-customblue text-white w-28"
              onClick={() => {
                setopenTagModal(true);
                setClicked(null);
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
              className="border-black bg-customblue text-white w-28"
              onClick={() => {
                setopenSectionModal(true);
                setChosenBuilding(item);
              }}
            >
              Add Section
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
              counter={counter}
              setCounter={setCounter}
            />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};
