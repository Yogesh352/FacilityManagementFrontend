import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Modal,
  Stack,
  Title,
} from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import MonthFilter from "./MonthFilter";
import PdfLists from "./PdfLists";

const months = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

const Report = () => {
  const didMount = useRef(false);

  const [startMonth, setStartMonth] = useState();
  const [startYear, setStartYear] = useState();

  const [endMonth, setEndMonth] = useState();
  const [endYear, setEndYear] = useState();

  let wrongInput = false;
  const [validation, setValidated] = useState();

  const [opened, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [values, setValues] = useState([
    { month: 1, year: 2023 },
    { month: 2, year: 2023 },
    { month: 3, year: 2023 },
    { month: 4, year: 2023 },
    { month: 5, year: 2023 },
    { month: 6, year: 2023 },
  ]);
  const arr = [];

  function handleClose() {
    setOpen(false);
  }

  useEffect(() => {
    if (didMount.current === true) {
      if (parseInt(startYear) > parseInt(endYear)) {
        console.log("hello");
        setValidated(true);
        setOpen(true);
      } else if (
        months[startMonth] > months[endMonth] &&
        parseInt(startYear) == parseInt(endYear)
      ) {
        console.log("hello");
        setOpen(true);
      } else {
        if (parseInt(startYear) == parseInt(endYear)) {
          for (
            var month = months[startMonth];
            month <= months[endMonth];
            month++
          ) {
            arr.push({ month: month, year: parseInt(startYear) });
          }
        }

        if (parseInt(startYear) != parseInt(endYear)) {
          for (var month = months[startMonth]; month <= 12; month++) {
            arr.push({ month: month, year: parseInt(startYear) });
          }

          for (
            var year = parseInt(startYear) + 1;
            year < parseInt(endYear);
            year++
          ) {
            for (var month = 1; month <= 12; month++) {
              arr.push({ month: month, year: year });
            }
          }

          for (var month = 1; month <= months[endMonth]; month++) {
            arr.push({ month: month, year: parseInt(endYear) });
          }
        }
        setValues(arr);
      }
      setIsClicked(false);
    } else {
      didMount.current = true;
    }
  }, [isClicked]);
  console.log(opened);
  return (
    <Box className="bg-white w-full h-[85vh] p-4 rounded-lg">
      <Stack className="h-full">
        <Title order={2}>Summary Reports</Title>
        <Box className="h-[72vh] w-full border-customblue border-2 p-10 rounded-xl">
          <Stack className="h-full">
            <Group position="left">
              <MonthFilter
                title="From"
                setMonth={setStartMonth}
                setYear={setStartYear}
              />

              <MonthFilter
                title="To"
                setMonth={setEndMonth}
                setYear={setEndYear}
              />

              <Button
                color="gray"
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setIsClicked(true);
                  console.log(values);
                }}
              >
                Generate
              </Button>

              <Modal
                opened={opened}
                onClose={handleClose}
                title="Invalid Range"
                className="bg-black"
              ></Modal>
            </Group>

            <PdfLists values={values} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Report;
