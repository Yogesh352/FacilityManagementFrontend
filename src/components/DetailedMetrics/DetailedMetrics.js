import {
  Box,
  Group,
  MultiSelect,
  SegmentedControl,
  Select,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { data } from "../Dashboard/BuildingData";
import DetailedMetricsGraphs from "./DetailedMetricsGraphs";
import { metricsData } from "./MetricsWeekly";

const DetailedMetricsCharts = () => {
  const [timerange, setTimerange] = useState("1");
  const [metric, setMetric] = useState("Energy Consumption");
  const [unit, setUnit] = useState("KwH");

  useEffect(() => {
    metric === "Energy Consumption"
      ? setUnit("(kWh)")
      : metric === "Energy Cost"
      ? setUnit("($)")
      : setUnit("(%)");
  }, [metric]);

  const [buildings, setBuildings] = useState(["SOB"]);
  return (
    <Box className="bg-white w-full h-[100%] p-4 rounded-lg">
      <Stack className="h-full">
        <Group position="apart">
          <Title order={2}>Detailed Metrics</Title>
          <MultiSelect
            data={data}
            value={buildings}
            onChange={setBuildings}
            placeholder="Select Buildings"
            limit={3}
          />
        </Group>
        <Box className="h-[90%] w-full border-customblue border-2 p-10 rounded-xl">
          <Stack className="h-full">
            <Group position="apart">
              <Text className="font-semibold">
                <span className="text-xl">{metric} </span> <span> {unit}</span>
              </Text>
              <Group>
                <SegmentedControl
                  value={timerange}
                  onChange={setTimerange}
                  data={[
                    { label: "1D", value: "0" },
                    { label: "1W", value: "1" },
                    { label: "1M", value: "2" },
                  ]}
                />
                <Select
                  data={metricsData}
                  value={metric}
                  onChange={setMetric}
                  placeholder="Select Metric"
                />
              </Group>
            </Group>
            <DetailedMetricsGraphs
              timerange={timerange}
              selectedBuildings={buildings}
              metric={metric}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default DetailedMetricsCharts;
