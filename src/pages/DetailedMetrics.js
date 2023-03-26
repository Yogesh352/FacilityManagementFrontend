import { Grid, Text, Stack } from "@mantine/core";
import React from "react";
import DetailedMetricsCharts from "../components/DetailedMetrics/DetailedMetrics";

const DetailedMetrics = () => {
  return (
   
      <Stack className="h-full">
        <Grid className="w-full h-full" columns={24}>
          {/* <Grid.Col span={1} /> */}
          <Grid.Col span={24}>
            <DetailedMetricsCharts />
          </Grid.Col>

          {/* <Grid.Col span={1} /> */}
        </Grid>
      </Stack>
    
  );
};

export default DetailedMetrics;
