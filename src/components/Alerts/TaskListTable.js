import {
  Box,
  Group,
  Stack,
  Text,
  Title,
  Table,
  Modal,
  Grid,
  Menu,
  Button,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { MapIcon, OptionsIcon } from "../Icon";

const elements = [
  {
    id: 0,
    Date: "23/3/2023",
    Task: "Turn off lights and aircon",
    Location: "LKS Level 4 Section A",
    Time: "08:00",
    Status: "Missed",
  },
  {
    id: 1,
    Date: "23/3/2023",
    Task: "Turn off lights and aircon",
    Location: "LKS Level 4 Section B",
    Time: "09:00",
    Status: "Completed",
  },
  {
    id: 2,
    Date: "23/3/2023",
    Task: "Turn off lights and aircon",
    Location: "LKS Level 4 Section C",
    Time: "10:00",
    Status: "Completed",
  },
  {
    id: 3,
    Date: "23/3/2023",
    Task: "Turn off lights and aircon",
    Location: "LKS Level 4 Section D",
    Time: "11:00",
    Status: "Incomplete",
  },
  {
    id: 4,
    Date: "23/3/2023",
    Task: "Turn off lights and aircon",
    Location: "LKS Level 4 Section E",
    Time: "12:00",
    Status: "Incomplete",
  },
  {
    id: 5,
    Date: "23/3/2023",
    Task: "Turn off lights and aircon",
    Location: "LKS Level 4 Section F",
    Time: "13:00",
    Status: "Incomplete",
  },
  {
    id: 6,
    Date: "23/3/2023",
    Task: "Turn off lights and aircon",
    Location: "LKS Level 4 Section G",
    Time: "14:00",
    Status: "Incomplete",
  },
  {
    id: 7,
    Date: "23/3/2023",
    Task: "Turn off lights and aircon",
    Location: "LKS Level 4 Section H",
    Time: "15:00",
    Status: "Incomplete",
  },
];

const TaskListTable = () => {
  const [rowData, setRowData] = useState(elements);
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, [counter]);

  const rows = rowData.map((data) => (
    <tr key={data.id}>
      <td>{data.Date}</td>
      <td>{data.Task}</td>
      <td>{data.Location}</td>
      <td>{data.Time}</td>
      <td>
        <Box
          className={`px-2 py-1 w-fit h-fit rounded-full text-center ${
            data.Status === "Completed"
              ? "border-2 border-green-500 bg-green-100 text-green-700"
              : data.Status === "Incomplete"
              ? "border-2 border-orange-500 bg-orange-100 text-orange-700"
              : "border-2 border-red-500 bg-red-100 text-red-700"
          }`}
        >
          {data.Status}
        </Box>
      </td>
      <td onClick={onClickHandler} className="cursor-pointer">
        <MapIcon className="text-lg" />
      </td>
      {data.Status === "Incomplete" ? (
        <td className="cursor-pointer">
          <Menu>
            <Menu.Target>
              <Button
                rightIcon={<OptionsIcon />}
                variant="outline"
                className=" w-0 h-full border-0 text-black"
              ></Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                onClick={() => {
                  let oldArr = rowData;
                  oldArr[data.id].Status = "Completed";
                  setRowData(oldArr);

                  setCounter(counter + 1);
                }}
              >
                Completed
              </Menu.Item>

              {/* Other items ... */}
            </Menu.Dropdown>
          </Menu>
        </td>
      ) : (
        <td className="cursor-pointer">
          <Menu>
            <Menu.Target>
              <Button
                variant="outline"
                className=" w-0 h-full border-0 text-black"
              ></Button>
            </Menu.Target>
          </Menu>
        </td>
      )}
    </tr>
  ));

  const [open, setOpen] = useState(false);
  function onClickHandler() {
    setOpen(true);
  }

  return (
    <>
      <Modal
        opened={open}
        onClose={() => {
          setOpen(false);
        }}
        title="LKS Level 4 Section View"
        size="lg"
      >
        <Stack className="h-[24rem]" spacing={0}>
          <Grid className="h-1/3">
            <Grid.Col className="h-full" span={12}>
              <Group spacing={0} className="h-full">
                <Box className="h-full border-2 border-b-0 bg-green-300 border-gray-400 w-1/4 font-semibold flex items-center justify-center">
                  Section A
                </Box>
                <Box className="h-full w-1/2 flex items-center justify-center"></Box>
                <Box className="h-full border-2 border-b-0 border-gray-400 w-1/4 flex items-center justify-center">
                  Section B
                </Box>
              </Group>
            </Grid.Col>
          </Grid>
          <Grid className="h-1/3">
            <Grid.Col className="h-full" span={12}>
              <Group spacing={0} className="h-full">
                <Box className="h-full border-2  border-b-0 border-gray-400 w-1/4 flex items-center justify-center">
                  Section C
                </Box>
                <Box className="h-full border-2 border-gray-400 border-b-0 border-l-0 border-r-0 w-1/2 flex items-center justify-center">
                  Section D
                </Box>
                <Box className="h-full border-2 border-gray-400 border-b-0 w-1/4 flex items-center justify-center">
                  Section E
                </Box>
              </Group>
            </Grid.Col>
          </Grid>
          <Grid className="h-1/3">
            <Grid.Col className="h-full" span={12}>
              <Group spacing={0} className="h-full">
                <Box className="h-full border-2 border-gray-400 w-1/4 flex items-center justify-center rounded-bl-md">
                  Section F
                </Box>
                <Box className="h-full border-2 border-r-0 border-l-0 border-gray-400 w-1/2 flex items-center justify-center">
                  Section G
                </Box>
                <Box className="h-full border-2 border-gray-400 w-1/4 flex items-center justify-center rounded-br-md">
                  Section H
                </Box>
              </Group>
            </Grid.Col>
          </Grid>
        </Stack>
      </Modal>
      <Box className="bg-white w-full h-full p-4 rounded-lg">
        <Stack className="h-full">
          <Title order={2}>Task List</Title>

          <Box className="h-full  w-full align-center border-customblue border-2 p-10 rounded-xl">
            <Box className="overflow-scroll scrollbar-hide h-full">
              <Table className="border-2  border-gray-300 rounded-lg h-[95%] ">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Task</th>
                    <th>Location</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Map</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default TaskListTable;
