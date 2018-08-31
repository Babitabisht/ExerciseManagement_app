import React, { Component } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
export const Header = props => {
  const msg = props.msg;
  return (
    <div>
      <AppBar position="static">
        <Toolbar >
        <Typography variant="title" color="inherit" >
        Exercises 
        </Typography>
        
        </Toolbar>
      </AppBar>
    </div>
  );
};
