import {
  Grid,
  Text,
  Button,
  Group,
  TextInput,
  Stack,
  Box,
  Modal,
  Select,
  NumberInput,
  Switch,
  SegmentedControl,
} from "@mantine/core";
import React, { useEffect, useState, useRef } from "react";
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
import DragAndDrop from "../components/RuleCustomization/DragAndDrop/DragAndDrop";

const NewCustomization = () => {
  const [updateFacilities, setUpdateFacilities] = useState(facilities);
  const [openBuildingModal, setOpenBuildingModal] = useState(false);
  const [numberOfSections, setNumberOfSections] = useState(0);
  const [levelAddingTo, setLevelAddingTo] = useState();
  const [buildingInfo, setBuildingInfo] = useState({
    buildingName: "",
    sectionNames: [],
    priority: [],
  });

  const [sectionPrioritySelect, setSectionPrioritySelect] = useState([]);
  const [openTagModal, setOpenTagModal] = useState(false);

  const [selected, setSelected] = useState();
  const [tags, setTags] = useState();
  const [priorityUpdate, setPriorityUpdate] = useState(0);

  const [toggle, setToggle] = useState("tags");

  const [newTag, setNewTag] = useState({
    title: "",
    ml: 8,
    text: "sm",
    priority: [],
    rules: {
      availability: [],
      bookingAmount: 0,
      minStudents: 0,
      earlyCheckout: false,
      roomDescription: "",
    },
  });

  const [minStudents, setMinStudents] = useState(0);
  const [newBookingAmount, setBookingAmount] = useState(0);
  const [newTagCounter, setNewTagCounter] = useState(0);

  const [individualPriority, setIndividualPriority] = useState(null);

  const didMount = useRef(false);

  useEffect(() => {
    setNewTag({ ...newTag, minStudents: minStudents });
    setNewTag({ ...newTag, bookingAmount: newBookingAmount });
  }, [minStudents, newBookingAmount]);

  useEffect(() => {}, [facilities]);
  useEffect(() => {
    console.log("hello123");
    setTags(selected?.items);
  }, [selected]);

  useEffect(() => {
    if (didMount.current && numberOfSections !== 0) {
      let oldSectionPriority = sectionPrioritySelect;
      oldSectionPriority[numberOfSections] = {
        value: numberOfSections,
        label: numberOfSections,
      };
      setSectionPrioritySelect(oldSectionPriority);
      console.log(sectionPrioritySelect);
    } else {
      didMount.current = true;
    }
  }, [numberOfSections]);

  function onSubmitHandler() {
    var oldArray = {
      icon: <LocalLibraryOutlinedIcon />,
      isBuilding: true,
      title: "",
      items: [],
    };
    oldArray.title = buildingInfo.buildingName;
    // console.log(oldArray);
    for (let i = 0; i < buildingInfo.sectionNames.length; i++) {
      oldArray.items[i] = {
        title: buildingInfo.sectionNames[i],
        isLevel: true,
        ml: 4,
        text: "small",
        priority: buildingInfo.priority[i],
        rules: {
          availability: [1200, 1500],
          bookingAmount: 0,
          minStudents: 0,
          earlyCheckout: false,
          roomDescription: "",
        },
        items: [],
      };
    }
    console.log(oldArray);

    setOpenBuildingModal(false);
    let oldFacilities = facilities;

    oldFacilities.push(oldArray);
    console.log(oldFacilities);

    // const input = newBuilding;

    setUpdateFacilities((changing) => [...changing, oldArray]);
    // console.log(newBuilding);
    // // console.log(buildingInfo);
    setNumberOfSections(0);
    setBuildingInfo({
      buildingName: "",
      sectionNames: [],
      priority: [],
    });
  }

  return (
    <Grid className="h-full w-full">
      <Modal
        opened={openBuildingModal}
        onClose={() => {
          setOpenBuildingModal(false);
          setNumberOfSections(0);
          setSectionPrioritySelect([]);
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
              placeholder="Number"
              value={numberOfSections}
              onChange={setNumberOfSections}
            />
          </Grid.Col>
          {numberOfSections > 0 && (
            <>
              <Grid.Col span={6}>
                <Text className="font-bold">Section Name</Text>
              </Grid.Col>
              <Grid.Col span={6}>
                <Text className="font-bold">Priority</Text>
              </Grid.Col>
            </>
          )}
          {Array(numberOfSections)
            .fill(0)
            .map((_, i) => (
              <>
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
                <Grid.Col span={6}>
                  <Select
                    className="inputsmall"
                    placeholder="Priority"
                    value={buildingInfo.priority[i]}
                    onChange={(f) => {
                      let oldPriority = buildingInfo.priority;
                      console.log(oldPriority);
                      oldPriority[i] = f;
                      setBuildingInfo({
                        ...buildingInfo,
                        priority: oldPriority,
                      });
                    }}
                    data={sectionPrioritySelect}
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

      <Modal
        opened={openTagModal}
        onClose={() => {
          setOpenTagModal(false);
        }}
        title="Add Tag"
        size="lg"
      >
        <Grid>
          <Grid.Col span={4}>
            <Text className="mt-2 font-semibold">Name of tag</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              icon={<DomainAddIcon />}
              variant="unstyled"
              className="border-2 border-gray-400 rounded-xl px-2"
              value={newTag.title}
              onChange={(e) => {
                setNewTag({ ...newTag, title: e.target.value });
              }}
            />
          </Grid.Col>
          {/* <Grid.Col span={4}>
            <Text className="mt-2 font-semibold">Availability</Text>
          </Grid.Col>
          <Grid.Col span={3}>
            <TextInput
              icon={<ClockIcon />}
              variant="unstyled"
              className="border-2 border-gray-400 rounded-xl px-2"
              value={newTag?.availability && newTag.availability[0]}
              onChange={(e) => {
                setNewTag(...newTag, (newTag.availability[0] = e.target.value));
              }}
              //   value={tag.rules.availability[0]}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <TextInput
              icon={<ClockIcon />}
              variant="unstyled"
              className="border-2 border-gray-400 rounded-xl px-2"
              value={newTag?.availability && newTag.availability[1]}
              onChange={(e) => {
                setNewTag(...newTag, (newTag.availability: newTag.availability));
              }}
            />
          </Grid.Col> */}
          <Grid.Col span={4}>
            <Text className="mt-2 font-semibold">Booking Amount</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              icon={<CostIcon />}
              variant="unstyled"
              className="border-2 border-gray-400 rounded-xl px-2"
              value={newBookingAmount}
              onChange={(e) => {
                setBookingAmount();
                let oldRules = newTag.rules;
                oldRules.bookingAmount = parseInt(e.target.value);
                setNewTag({
                  ...newTag,
                  rules: oldRules,
                });
              }}
              //   value={tag.rules.bookingAmount}
            />
          </Grid.Col>

          <Grid.Col span={4}>
            <Text className="mt-2 font-semibold">Min No Of Students</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              icon={<StudentsIcon />}
              variant="unstyled"
              className="border-2 border-gray-400 rounded-xl px-2"
              //   value={tag.rules.minStudents}
              value={minStudents}
              onChange={(e) => {
                setMinStudents();
                let oldRules = newTag.rules;
                oldRules.minStudents = parseInt(e.target.value);
                setNewTag({
                  ...newTag,
                  rules: oldRules,
                });
              }}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text className="mt-2 font-semibold">Allow Early Checkout</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Switch
              //   checked={tag.rules.earlyCheckout}
              className="mt-2"
              color="#94c0db"
              value={newTag.earlyCheckout}
              onChange={(e) => {
                let oldRules = newTag.rules;
                oldRules.checked = e.target.checked;
                setNewTag({
                  ...newTag,
                  rules: oldRules,
                });
              }}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Text className="mt-2 font-semibold">Tag Description</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              variant="unstyled"
              className="border-2 border-gray-400 bg-transparent rounded-xl px-2"
              value={newTag.roomDescription}
              onChange={(e) => {
                let oldRules = newTag.rules;
                oldRules.roomDescription = e.target.value;
                setNewTag({
                  ...newTag,
                  rules: oldRules,
                });
              }}
            />
          </Grid.Col>
          <Group className="w-full" position="right">
            <Button
              variant="outline"
              className="border-black text-black"
              onClick={() => {
                console.log(newTag);
                setOpenTagModal(false);
                levelAddingTo?.items?.push(newTag);
                setNewTagCounter({
                  title: "",
                  ml: 8,
                  text: "sm",
                  rules: {
                    availability: [],
                    bookingAmount: 0,
                    minStudents: 0,
                    earlyCheckout: false,
                    roomDescription: "",
                  },
                });
              }}
              onSubmit={() => {}}
            >
              Save
            </Button>
          </Group>
        </Grid>
      </Modal>

      <Grid.Col span={12} className=" h-[85vh] ">
        <Group className="w-full h-full" spacing={0}>
          <Box className="h-[85vh] w-[35%] border-2 rounded-tl-xl rounded-bl-xl border-gray-400 bg-lighterblue p-4 overflow-scroll overflow-x-hidden scrollbar scrollbar-thumb-gray-300 scrollbar-thin">
            <FacilitiesSidebar
              facilities={facilities}
              selected={selected}
              setSelected={setSelected}
              priorityUpdate={priorityUpdate}
              setPriorityUpdate={setPriorityUpdate}
            />
            <Group position="right">
              <Button
                leftIcon={<PlusIcon />}
                className="text-white bg-customblue border-black mt-20"
                onClick={() => {
                  setOpenBuildingModal(true);
                }}
                variant="outline"
                size="xs"
              >
                Add Buildings
              </Button>
            </Group>
          </Box>

          <Box className=" h-[85vh]  overflow-scroll scrollbar border-2 border-gray-400 border-l-0 rounded-tr-xl rounded-br-xl overflow-x-hidden scrollbar-thumb-gray-300 w-[65%] p-4  pb-30 bg-slightlydarker scrollbar-thin">
            <Stack className="h-full w-full ">
              {selected?.isBuilding ? (
                toggle === "tags" ? (
                  selected.items.map((level, i) => {
                    return (
                      <Stack>
                        <Group className="w-full" position="apart">
                          <Text className="font-bold text-lg">
                            {selected?.title + " "}
                            {level.title}
                          </Text>
                          <Group>
                            <Button
                              leftIcon={<PlusIcon />}
                              size="xs"
                              className="text-white bg-customblue border-black"
                              variant="outline"
                              onClick={async () => {
                                await setLevelAddingTo(level);
                                setOpenTagModal(true);
                              }}
                            >
                              Add New Tag
                            </Button>
                            {i === 0 && (
                              <SegmentedControl
                                size="xs"
                                value={toggle}
                                onChange={setToggle}
                                data={[
                                  { label: "Tags", value: "tags" },
                                  { label: "Priority", value: "priority" },
                                ]}
                              />
                            )}
                          </Group>
                        </Group>
                        {level.items.map((tag) => {
                          return (
                            <Box className="border-gray-400 bg-lighterblue border-2 p-4 rounded-xl w-full h-full">
                              <Grid>
                                <Grid.Col span={4}>
                                  <Text className="mt-2 font-semibold">
                                    Name of tag
                                  </Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                  <TextInput
                                    icon={<DomainAddIcon />}
                                    variant="unstyled"
                                    className="border-2 bg-white border-gray-400 rounded-xl px-2"
                                    value={tag.title}
                                  />
                                </Grid.Col>
                                <Grid.Col span={4}>
                                  <Text className="mt-2 font-semibold">
                                    Availability
                                  </Text>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                  <TextInput
                                    icon={<ClockIcon />}
                                    variant="unstyled"
                                    className="border-2 bg-white border-gray-400 rounded-xl px-2"
                                    value={tag.rules.availability[0]}
                                  />
                                </Grid.Col>
                                <Grid.Col span={3}>
                                  <TextInput
                                    icon={<ClockIcon />}
                                    variant="unstyled"
                                    className="border-2 bg-white border-gray-400 rounded-xl px-2"
                                    value={tag.rules.availability[1]}
                                  />
                                </Grid.Col>
                                <Grid.Col span={4}>
                                  <Text className="mt-2 font-semibold">
                                    Booking Amount
                                  </Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                  <TextInput
                                    icon={<CostIcon />}
                                    variant="unstyled"
                                    className="border-2 bg-white border-gray-400 rounded-xl px-2"
                                    value={tag.rules.bookingAmount}
                                  />
                                </Grid.Col>

                                <Grid.Col span={4}>
                                  <Text className="mt-2 font-semibold">
                                    Min No Of Students
                                  </Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                  <TextInput
                                    icon={<StudentsIcon />}
                                    variant="unstyled"
                                    className="border-2 bg-white border-gray-400 rounded-xl px-2"
                                    value={tag.rules.minStudents}
                                  />
                                </Grid.Col>
                                <Grid.Col span={4}>
                                  <Text className="mt-2 font-semibold">
                                    Allow Early Checkout
                                  </Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                  <Switch
                                    checked={tag.rules.earlyCheckout}
                                    className="mt-2"
                                    color="gray"
                                    // onChange={(event) =>
                                    //   setChecked(event.currentTarget.checked)
                                    // }
                                  />
                                </Grid.Col>
                                <Grid.Col span={4}>
                                  <Text className="mt-2  font-semibold">
                                    Tag Description
                                  </Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                  <TextArea
                                    variant="unstyled"
                                    className="border-2 bg-white border-gray-400 bg-transparent rounded-xl px-2"
                                    value={tag.rules.roomDescription}
                                  />
                                </Grid.Col>
                                <Grid.Col span={12}>
                                  <Group position="right">
                                    <Button
                                      variant="filled"
                                      className="bg-customblue text-white"
                                    >
                                      Save
                                    </Button>
                                  </Group>
                                </Grid.Col>
                              </Grid>
                            </Box>
                          );
                        })}
                      </Stack>
                    );
                  })
                ) : (
                  <Stack>
                    <Group className="w-full" position="apart">
                      <Text className="font-bold text-lg">
                        {selected.title}
                      </Text>
                      <Group>
                        <SegmentedControl
                          size="xs"
                          value={toggle}
                          onChange={setToggle}
                          data={[
                            { label: "Tags", value: "tags" },
                            { label: "Priority", value: "priority" },
                          ]}
                        />
                      </Group>
                    </Group>

                    <Box className="border-gray-400 bg-lighterblue border-2 p-4 rounded-xl w-full h-full">
                      {/* <Grid>
                                <Grid.Col span={12}>
                                  <Group position="right">
                                    <Button
                                      variant="filled"
                                      className="bg-customblue text-white"
                                    >
                                      Save
                                    </Button>
                                  </Group>
                                </Grid.Col>
                              </Grid> */}
                      <DragAndDrop
                        tags={tags}
                        setTags={setTags}
                        priorityUpdate={priorityUpdate}
                        setPriorityUpdate={setPriorityUpdate}
                      />
                    </Box>
                  </Stack>
                )
              ) : selected?.isLevel ? (
                <>
                  <Group className="w-full" position="apart">
                    <Text className="font-bold text-lg">
                      {selected?.title + ""}
                    </Text>
                    <Button
                      leftIcon={<PlusIcon />}
                      size="xs"
                      className="text-white bg-customblue border-black"
                      variant="outline"
                      onClick={async () => {}}
                    >
                      Add New Tag
                    </Button>
                  </Group>
                  {selected.items.map((tag) => {
                    return (
                      <Box className="border-gray-400 bg-lighterblue border-2 p-4 rounded-xl w-full h-fit">
                        <Grid>
                          <Grid.Col span={12}></Grid.Col>
                          <Grid.Col span={4}>
                            <Text className="mt-2 font-semibold">
                              Name of tag
                            </Text>
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <TextInput
                              icon={<DomainAddIcon />}
                              variant="unstyled"
                              className="border-2 bg-white border-gray-400 rounded-xl px-2"
                              value={tag.title}
                            />
                          </Grid.Col>
                          <Grid.Col span={4}>
                            <Text className="mt-2 font-semibold">
                              Availability
                            </Text>
                          </Grid.Col>
                          <Grid.Col span={3}>
                            <TextInput
                              icon={<ClockIcon />}
                              variant="unstyled"
                              className="border-2 bg-white border-gray-400 rounded-xl px-2"
                              value={tag.rules.availability[0]}
                            />
                          </Grid.Col>
                          <Grid.Col span={3}>
                            <TextInput
                              icon={<ClockIcon />}
                              variant="unstyled"
                              className="border-2 bg-white border-gray-400 rounded-xl px-2"
                              value={tag.rules.availability[1]}
                            />
                          </Grid.Col>
                          <Grid.Col span={4}>
                            <Text className="mt-2 font-semibold">
                              Booking Amount
                            </Text>
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <TextInput
                              icon={<CostIcon />}
                              variant="unstyled"
                              className="border-2 bg-white border-gray-400 rounded-xl px-2"
                              value={tag.rules.bookingAmount}
                            />
                          </Grid.Col>

                          <Grid.Col span={4}>
                            <Text className="mt-2 font-semibold">
                              Min No Of Students
                            </Text>
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <TextInput
                              icon={<StudentsIcon />}
                              variant="unstyled"
                              className="border-2 bg-white border-gray-400 rounded-xl px-2"
                              value={tag.rules.minStudents}
                            />
                          </Grid.Col>
                          <Grid.Col span={4}>
                            <Text className="mt-2 font-semibold">
                              Allow Early Checkout
                            </Text>
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <Switch
                              checked={tag.rules.earlyCheckout}
                              className="mt-2"
                              color="gray"
                              // onChange={(event) =>
                              //   setChecked(event.currentTarget.checked)
                              // }
                            />
                          </Grid.Col>
                          <Grid.Col span={4}>
                            <Text className="mt-2 font-semibold">
                              Tag Description
                            </Text>
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <TextArea
                              variant="unstyled"
                              className="border-2 bg-white border-gray-400 bg-transparent rounded-xl px-2"
                              value={tag.rules.roomDescription}
                            />
                          </Grid.Col>
                          <Grid.Col span={12}>
                            <Group position="right">
                              <Button
                                variant="filled"
                                className="bg-customblue text-white"
                              >
                                Save
                              </Button>
                            </Group>
                          </Grid.Col>
                        </Grid>
                      </Box>
                    );
                  })}
                </>
              ) : (
                selected && (
                  <>
                    <Group className="w-full" position="apart">
                      <Text className="font-bold text-lg">
                        {selected?.title}
                      </Text>
                      <Button
                        leftIcon={<PlusIcon />}
                        size="xs"
                        className="text-white bg-customblue border-black"
                        variant="outline"
                        onClick={async () => {}}
                      >
                        Add New Tag
                      </Button>
                    </Group>
                    {selected && (
                      <Box className="border-gray-400 bg-lighterblue border-2 p-4 rounded-xl w-full h-fit">
                        <Grid>
                          <Grid.Col span={4}>
                            <Text className="mt-2 font-semibold">
                              Name of tag
                            </Text>
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <TextInput
                              icon={<DomainAddIcon />}
                              variant="unstyled"
                              className="border-2 border-gray-400 bg-white rounded-xl px-2"
                              value={selected?.title}
                            />
                          </Grid.Col>
                          <Grid.Col span={4}>
                            <Text className="mt-2 font-semibold">
                              Availability
                            </Text>
                          </Grid.Col>
                          <Grid.Col span={3}>
                            <TextInput
                              icon={<ClockIcon />}
                              variant="unstyled"
                              className="border-2 border-gray-400 bg-white rounded-xl px-2"
                              value={selected?.rules?.availability[0]}
                            />
                          </Grid.Col>
                          <Grid.Col span={3}>
                            <TextInput
                              icon={<ClockIcon />}
                              variant="unstyled"
                              className="border-2  border-gray-400 bg-white rounded-xl px-2"
                              value={selected?.rules?.availability[1]}
                            />
                          </Grid.Col>
                          <Grid.Col span={4}>
                            <Text className="mt-2 font-semibold">
                              Booking Amount
                            </Text>
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <TextInput
                              icon={<CostIcon />}
                              variant="unstyled"
                              className="border-2 border-gray-400 bg-white rounded-xl px-2"
                              value={selected?.rules?.bookingAmount}
                            />
                          </Grid.Col>

                          <Grid.Col span={4}>
                            <Text className="mt-2 font-semibold">
                              Min No Of Students
                            </Text>
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <TextInput
                              icon={<StudentsIcon />}
                              variant="unstyled"
                              className="border-2 border-gray-400  bg-white rounded-xl px-2"
                              value={selected?.rules?.minStudents}
                            />
                          </Grid.Col>
                          <Grid.Col span={4}>
                            <Text className="mt-2 font-semibold">
                              Allow Early Checkout
                            </Text>
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <Switch
                              checked={selected?.rules?.earlyCheckout}
                              className="mt-2"
                              color="gray"
                              // onChange={(event) =>
                              //   setChecked(event.currentTarget.checked)
                              // }
                            />
                          </Grid.Col>
                          <Grid.Col span={4}>
                            <Text className="mt-2 font-semibold">
                              Tag Description
                            </Text>
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <TextArea
                              variant="unstyled"
                              className="border-2 border-gray-400 bg-white bg-transparent rounded-xl px-2"
                              value={selected?.rules?.roomDescription}
                            />
                          </Grid.Col>
                          <Grid.Col span={12}>
                            <Group position="right">
                              <Button
                                variant="filled"
                                className="bg-customblue text-white"
                              >
                                Save
                              </Button>
                            </Group>
                          </Grid.Col>
                        </Grid>
                      </Box>
                    )}
                  </>
                )
              )}
            </Stack>
          </Box>
        </Group>
      </Grid.Col>
    </Grid>
  );
};

export default NewCustomization;
