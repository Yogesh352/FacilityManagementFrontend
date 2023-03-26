import React from "react";
import {
  Stack,
  Title,
  Container,
  Flex,
  Button,
  Grid,
  Text,
  Alert,
  Modal,
} from "@mantine/core";
import MonthFilter from "../components/SummaryReport/MonthFilter";
import PdfLists from "../components/SummaryReport/PdfLists";
import { useState, useEffect } from "react";
import Popup from "../components/SummaryReport/Popup";
import { MdClosedCaption } from "react-icons/md";
import Report from "../components/SummaryReport/Report";

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

const SummaryReport = () => {

  return (
    <Stack className="h-full">
      <Grid className="w-full h-full" columns={24}>
        <Grid.Col span={24}>
          <Report />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default SummaryReport;
