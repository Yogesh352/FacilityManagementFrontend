import {
  Grid,
  Text,
  Button,
  Group,
  TextInput,
  Stack,
  Box,
  Modal,
  NumberInput,
  Switch,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";

import FacilitiesSidebar from "../components/RuleCustomization/FacilitiesSidebar";
import { facilities } from "../components/RuleCustomization/Facilities";

import DomainAddIcon from "@mui/icons-material/DomainAdd";
import {
  ClockIcon,
  PlusIcon,
  CostIcon,
  StudentsIcon,
  DescriptionIcon,
} from "../components/Icon";
import TextArea from "antd/es/input/TextArea";

const NewCustomization = () => {
  const [updateFacilities, setUpdateFacilities] = useState(facilities);
  const [openBuildingModal, setOpenBuildingModal] = useState(false);
  const [numberOfSections, setNumberOfSections] = useState(0);
  const [buildingInfo, setBuildingInfo] = useState({
    buildingName: "",
    sectionNames: [],
  });

  const [selected, setSelected] = useState();

  useEffect(() => {
    console.log("Hello");
  }, [numberOfSections]);
  const [newBuilding, setNewBuilding] = useState({
    icon: <LocalLibraryOutlinedIcon />,
    isBuilding: true,
    title: "",
    items: [],
  });

  function onSubmitHandler() {
    let oldArray = newBuilding;
    oldArray.title = buildingInfo.buildingName;
    // console.log(buildingInfo.buildingName);
    for (let i = 0; i < buildingInfo.sectionNames.length; i++) {
      oldArray.items[i] = {
        title: buildingInfo.sectionNames[i],
        isLevel: true,
        ml: 4,
      };
    }
    setNewBuilding(oldArray);
    setOpenBuildingModal(false);
    setUpdateFacilities(facilities.push(newBuilding));
    // console.log(newBuilding);
    // console.log(buildingInfo);
    console.log(facilities);
  }

  return (
    <Grid className="h-full w-full">
      <Modal
        opened={openBuildingModal}
        onClose={() => {
          setOpenBuildingModal(false);
        }}
        title="Add Building"
        size="lg"
      >
        <Grid>
          <Grid.Col span={6}>
            <Text className="font-bold">Building Name</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              className="inputsmall"
              icon={<DomainAddIcon />}
              placeholder="Name"
              onChange={(e) => {
                setBuildingInfo({
                  ...buildingInfo,
                  buildingName: e.target.value,
                });
              }}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Text className="font-bold">Number of Sections</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <NumberInput
              className="inputsmall"
              icon={<MeetingRoomIcon />}
              placeholder="Number"
              value={numberOfSections}
              onChange={setNumberOfSections}
            />
          </Grid.Col>
          {Array(numberOfSections)
            .fill(0)
            .map((_, i) => (
              <>
                <Grid.Col span={6}>
                  <Text>Section Name</Text>
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput
                    className="inputsmall"
                    icon={<MeetingRoomIcon />}
                    placeholder="Name"
                    // value={buildingName}
                    onChange={(e) => {
                      let oldSectionNames = buildingInfo.sectionNames;
                      oldSectionNames[i] = e.target.value;
                      setBuildingInfo({
                        ...buildingInfo,
                        sectionNames: oldSectionNames,
                      });
                    }}
                  />
                </Grid.Col>
              </>
            ))}
          <Grid.Col span={12}>
            <Group position="right">
              <Button variant="outline" onClick={onSubmitHandler}>
                Submit
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
      </Modal>
      <Grid.Col span={4}>
        <FacilitiesSidebar
          facilities={facilities}
          selected={selected}
          setSelected={setSelected}
        />
        <Group position="right">
          <Button
            leftIcon={<PlusIcon />}
            className="text-black border-black mt-20"
            onClick={() => {
              setOpenBuildingModal(true);
            }}
            variant="outline"
            size="xs"
          >
            Add Buildings
          </Button>
        </Group>
      </Grid.Col>
      <Grid.Col span={8}>
        <Box className=" h-[85vh] overflow-scroll scrollbar overflow-x-hidden scrollbar-thumb-gray-300 scrollbar-track-gray-100 w-full p-4 bg-blue-500">
          <Stack className="h-full w-full ">
            {selected?.isBuilding &&
              selected.items.map((level) => {
                return (
                  <Stack>
                    <Text className="font-bold text-lg">
                      {selected?.title + " "}
                      {level.title}
                    </Text>
                    {level.items.map((tag) => {
                      return (
                        <Box className="border-black border-2 p-2 rounded-xl w-full h-full">
                          <Grid>
                            <Grid.Col span={4}>
                              <Text className="mt-2">Name of tag</Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                              <TextInput
                                icon={<DomainAddIcon />}
                                variant="unstyled"
                                className="border-2 border-black rounded-xl px-2"
                                value={tag.title}
                              />
                            </Grid.Col>
                            <Grid.Col span={4}>
                              <Text className="mt-2">Availability</Text>
                            </Grid.Col>
                            <Grid.Col span={3}>
                              <TextInput
                                icon={<ClockIcon />}
                                variant="unstyled"
                                className="border-2 border-black rounded-xl px-2"
                                value={tag.rules.availability[0]}
                              />
                            </Grid.Col>
                            <Grid.Col span={3}>
                              <TextInput
                                icon={<ClockIcon />}
                                variant="unstyled"
                                className="border-2 border-black rounded-xl px-2"
                                value={tag.rules.availability[1]}
                              />
                            </Grid.Col>
                            <Grid.Col span={4}>
                              <Text className="mt-2">Booking Amount</Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                              <TextInput
                                icon={<CostIcon />}
                                variant="unstyled"
                                className="border-2 border-black rounded-xl px-2"
                                value={tag.rules.bookingAmount}
                              />
                            </Grid.Col>

                            <Grid.Col span={4}>
                              <Text className="mt-2">Min No Of Students</Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                              <TextInput
                                icon={<StudentsIcon />}
                                variant="unstyled"
                                className="border-2 border-black rounded-xl px-2"
                                value={tag.rules.minStudents}
                              />
                            </Grid.Col>
                            <Grid.Col span={4}>
                              <Text className="mt-2">Allow Early Checkout</Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                              <Switch
                                checked={tag.rules.earlyCheckout}
                                className="mt-2"
                                color="dark"
                                // onChange={(event) =>
                                //   setChecked(event.currentTarget.checked)
                                // }
                              />
                            </Grid.Col>
                            <Grid.Col span={4}>
                              <Text className="mt-2">Room Description</Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                              <TextArea
                                variant="unstyled"
                                className="border-2 border-black bg-transparent rounded-xl px-2"
                                value={tag.rules.roomDescription}
                              />
                            </Grid.Col>
                          </Grid>
                        </Box>
                      );
                    })}
                  </Stack>
                );
              })}
            {selected?.isLevel
              ? selected.items.map((tag) => {
                  return (
                    <Box className="border-black border-2 p-2 rounded-xl w-full h-full">
                      <Grid>
                        <Grid.Col span={4}>
                          <Text className="mt-2">Name of tag</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <TextInput
                            icon={<DomainAddIcon />}
                            variant="unstyled"
                            className="border-2 border-black rounded-xl px-2"
                            value={tag.title}
                          />
                        </Grid.Col>
                        <Grid.Col span={4}>
                          <Text className="mt-2">Availability</Text>
                        </Grid.Col>
                        <Grid.Col span={3}>
                          <TextInput
                            icon={<ClockIcon />}
                            variant="unstyled"
                            className="border-2 border-black rounded-xl px-2"
                            value={tag.rules.availability[0]}
                          />
                        </Grid.Col>
                        <Grid.Col span={3}>
                          <TextInput
                            icon={<ClockIcon />}
                            variant="unstyled"
                            className="border-2 border-black rounded-xl px-2"
                            value={tag.rules.availability[1]}
                          />
                        </Grid.Col>
                        <Grid.Col span={4}>
                          <Text className="mt-2">Booking Amount</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <TextInput
                            icon={<CostIcon />}
                            variant="unstyled"
                            className="border-2 border-black rounded-xl px-2"
                            value={tag.rules.bookingAmount}
                          />
                        </Grid.Col>

                        <Grid.Col span={4}>
                          <Text className="mt-2">Min No Of Students</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <TextInput
                            icon={<StudentsIcon />}
                            variant="unstyled"
                            className="border-2 border-black rounded-xl px-2"
                            value={tag.rules.minStudents}
                          />
                        </Grid.Col>
                        <Grid.Col span={4}>
                          <Text className="mt-2">Allow Early Checkout</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <Switch
                            checked={tag.rules.earlyCheckout}
                            className="mt-2"
                            color="dark"
                            // onChange={(event) =>
                            //   setChecked(event.currentTarget.checked)
                            // }
                          />
                        </Grid.Col>
                        <Grid.Col span={4}>
                          <Text className="mt-2">Room Description</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                          <TextArea
                            variant="unstyled"
                            className="border-2 border-black bg-transparent rounded-xl px-2"
                            value={tag.rules.roomDescription}
                          />
                        </Grid.Col>
                      </Grid>
                    </Box>
                  );
                })
              : selected && (
                  <Box className="border-black border-2 p-2 rounded-xl w-full h-fit">
                    <Grid>
                      <Grid.Col span={4}>
                        <Text className="mt-2">Name of tag</Text>
                      </Grid.Col>
                      <Grid.Col span={6}>
                        <TextInput
                          icon={<DomainAddIcon />}
                          variant="unstyled"
                          className="border-2 border-black rounded-xl px-2"
                          value={selected?.title}
                        />
                      </Grid.Col>
                      <Grid.Col span={4}>
                        <Text className="mt-2">Availability</Text>
                      </Grid.Col>
                      <Grid.Col span={3}>
                        <TextInput
                          icon={<ClockIcon />}
                          variant="unstyled"
                          className="border-2 border-black rounded-xl px-2"
                          value={selected?.rules?.availability[0]}
                        />
                      </Grid.Col>
                      <Grid.Col span={3}>
                        <TextInput
                          icon={<ClockIcon />}
                          variant="unstyled"
                          className="border-2 border-black rounded-xl px-2"
                          value={selected?.rules?.availability[1]}
                        />
                      </Grid.Col>
                      <Grid.Col span={4}>
                        <Text className="mt-2">Booking Amount</Text>
                      </Grid.Col>
                      <Grid.Col span={6}>
                        <TextInput
                          icon={<CostIcon />}
                          variant="unstyled"
                          className="border-2 border-black rounded-xl px-2"
                          value={selected?.rules?.bookingAmount}
                        />
                      </Grid.Col>

                      <Grid.Col span={4}>
                        <Text className="mt-2">Min No Of Students</Text>
                      </Grid.Col>
                      <Grid.Col span={6}>
                        <TextInput
                          icon={<StudentsIcon />}
                          variant="unstyled"
                          className="border-2 border-black rounded-xl px-2"
                          value={selected?.rules?.minStudents}
                        />
                      </Grid.Col>
                      <Grid.Col span={4}>
                        <Text className="mt-2">Allow Early Checkout</Text>
                      </Grid.Col>
                      <Grid.Col span={6}>
                        <Switch
                          checked={selected?.rules?.earlyCheckout}
                          className="mt-2"
                          color="dark"
                          // onChange={(event) =>
                          //   setChecked(event.currentTarget.checked)
                          // }
                        />
                      </Grid.Col>
                      <Grid.Col span={4}>
                        <Text className="mt-2">Room Description</Text>
                      </Grid.Col>
                      <Grid.Col span={6}>
                        <TextArea
                          variant="unstyled"
                          className="border-2 border-black bg-transparent rounded-xl px-2"
                          value={selected?.rules?.roomDescription}
                        />
                      </Grid.Col>
                    </Grid>
                  </Box>
                )}
          </Stack>
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default NewCustomization;

// {
//     icon: <LocalLibraryOutlinedIcon />,
//     title: "SOE",
//     items: [
//       {
//         title: "Level 1",
//         ml: 4,
//         items: [
//           {
//             title: "GSRs",

//             ml: 8,
//             text: "sm",
//           },
//           {
//             title: "Study Rooms",

//             ml: 8,
//             text: "sm",
//           },

//         ],
//       },
//       {
//         title: "Level 2",
//         ml: 4,
//         items: [
//           {
//             title: "GSRs",

//             ml: 8,
//             text: "sm",
//           },
//           {
//             title: "Study Rooms",

//             ml: 8,
//             text: "sm",
//           },

//         ],
//       },

//     ],
//   },
