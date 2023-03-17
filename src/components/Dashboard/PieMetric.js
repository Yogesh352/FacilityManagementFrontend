import React from "react";
import { Stack, Text } from "@mantine/core";
import { DoughnutChart } from "./DoughnutChart";

const PieMetric = ({title, data}) => {
  return (
    <Stack className="bg-white h-full w-full p-2">
      <Text className="font-bold text-gray-500">{title}</Text>
      <DoughnutChart data={data} />
    </Stack>
  );
};

export default PieMetric;
