import { Box, Group, Stack, Text } from "@mantine/core";
import React from "react";
import { DownIcon, UpIcon } from "../Icon";

const Metric = ({ title, value, unit, change }) => {
  return (
    <>
      <Box className="bg-white w-full h-full rounded-md p-4">
        <Stack className="h-full w-full" spacing={0}>
          <Text className="text-gray-600 text-sm">{title}</Text>
          <Group>
            <Text className="text-3xl font-bold">
              {unit === "$" && unit}
              {value} {unit !== "$" && unit}
            </Text>
            {change >= 0 ? (
              <UpIcon className="text-green-500 text-2xl" />
            ) : (
              <DownIcon className="text-red-500 text-2xl" />
            )}
          </Group>
          <Text>
            <span
              className={`${
                change > 0 ? "text-green-500" : "text-red-500"
              } text-sm `}
            >
              {change >= 0 && "+"}
              {change}%
            </span>
            <span className="text-gray-600 text-xs">{` since yesterday`}</span>
          </Text>
        </Stack>
      </Box>
    </>
  );
};

export default Metric;
