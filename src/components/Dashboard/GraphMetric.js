import { Stack, Text } from "@mantine/core";
import React from "react";
import AreaGraph from "./AreaGraph";

const GraphMetric = () => {
  return (
    <Stack className="bg-white h-full w-full p-2">
      <Text className="font-bold text-gray-500">Energy Consumption (kWh)</Text>
      <AreaGraph />
    </Stack>
  );
};

export default GraphMetric;
