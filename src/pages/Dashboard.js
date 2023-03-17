import { Grid, MultiSelect, Stack } from "@mantine/core";
import React from "react";
import { data } from "../components/Dashboard/BuildingData";
import FloorBreakdownTable from "../components/Dashboard/FloorBreakdownTable";
import GraphMetric from "../components/Dashboard/GraphMetric";
import Metric from "../components/Dashboard/Metric";
import PieMetric from "../components/Dashboard/PieMetric";

const costData = {
  labels: ["Aircon", "Lights"],
  datasets: [
    {
      label: "Cost",
      data: [1200, 2400],
      backgroundColor: ["#2e6689", "#94c0db"],
      borderColor: ["#2e6689", "#94c0db"],
      borderWidth: 1,
    },
  ],
};

const energyData = {
  labels: ["Aircon", "Lights"],
  datasets: [
    {
      label: "Energy Consumed",
      data: [110, 150],
      backgroundColor: ["#2e6689", "#94c0db"],
      borderColor: ["#2e6689", "#94c0db"],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  return (
    <Stack spacing={4} className="h-[100%]">
      <Grid className="w-full h-[200px]">
        <Grid.Col span={9} className="h-10" />
        <Grid.Col span={3} className="h-10">
          <MultiSelect
            size="xs"
            data={data}
            placeholder="Select Buildings"
            limit={3}
          />
        </Grid.Col>

        <Grid.Col span={4} className="h-fit">
          <Metric
            title="Overall Energy Consumption Today"
            value={3.86}
            unit="kWh"
            change={-26}
          />
        </Grid.Col>
        <Grid.Col span={4} className="h-fit">
          <Metric
            title="Overall Occupancy Today"
            value={87}
            unit="%"
            change={26}
          />
        </Grid.Col>
        <Grid.Col span={4} className="h-fit">
          <Metric
            title="Overall Cost Today"
            value={18020}
            unit="$"
            change={-26}
          />
        </Grid.Col>
      </Grid>
      <Grid className="h-[70%] w-full">
        <Grid.Col span={8} className="h-[50%]">
          <GraphMetric />
        </Grid.Col>
        <Grid.Col span={4} className="h-[50%]">
          <PieMetric title="Energy Consumption Breakdown" data={energyData} />
        </Grid.Col>
        <Grid.Col span={8} className="h-[50%]">
          <FloorBreakdownTable />
        </Grid.Col>
        <Grid.Col span={4} className="h-[50%]">
          <PieMetric title="Cost Breakdown" data={costData} />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default Dashboard;
