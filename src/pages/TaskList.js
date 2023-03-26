import { Stack, Grid } from "@mantine/core";
import React from "react";
import TaskListTable from "../components/Alerts/TaskListTable";

const TaskList = () => {
  return (
    <Stack className="h-full">
      <Grid className="w-full h-full" columns={24}>
        <Grid.Col span={24}>
          <TaskListTable />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default TaskList;
