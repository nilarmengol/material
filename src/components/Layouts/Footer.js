import React from "react";
import { Tabs, Paper } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

export default props => (
  <div>
    <Paper square>
      <Tabs
        value={1}
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
      >
        <Tab label="Active" />
        <Tab label="Disabled" disabled />
        <Tab label="Active" />
      </Tabs>
    </Paper>
  </div>
);
