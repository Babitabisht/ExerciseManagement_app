import React, { Fragment } from "react";
import { AppBar, Paper, Tab, Tabs } from "@material-ui/core";

export const Footer = props => {
  const muscles = props.muscles;
  const category = props.category;
  const onSelect = props.onSelect;

  // console.log(category);
  const index = category ? muscles.findIndex(item => item == category) + 1 : 0;
  // console.log(index);
  // console.log(muscles[index - 1]);

  const onIndexSelected = (e, index) => {
    onSelect(index === 0 ? "" : muscles[index - 1]);
    console.log("clicked..........!!!");
  };

  return (
    <div  style={{height:200}}>
      <Paper square>
        <Tabs
          value={index}
          indicatorColor="primary"
          textColor="primary"
          onChange={onIndexSelected}
          centered
        >
          <Tab label="All" />
          {muscles.map(item => (
            <Tab label={item} key={item} />
          ))}
        </Tabs>
      </Paper>
    </div>
  );
};
