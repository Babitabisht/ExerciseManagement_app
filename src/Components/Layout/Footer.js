import React, { Fragment } from "react";
import { AppBar, Paper, Tab, Tabs } from "@material-ui/core";

export const Footer = props => {
  const muscles = props.muscles;
  return (
    <div>
      <Paper square>
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          centered
        >
        <Tab label="All" />
          {muscles.map(item => <Tab label={item} />
            )
        }

          
        </Tabs>
      </Paper>
    </div>
  );
};
