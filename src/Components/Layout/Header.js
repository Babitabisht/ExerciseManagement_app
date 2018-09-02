import React, { Component } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import {CreateD} from '../Exercise/Dialog/Create';

export const Header = props => {
  const msg = props.msg;
  const onExerciseCreate=props.onExerciseCreate;

  
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar >
        <Typography variant="title" color="inherit" style={{flex:1}} >
        Exercises 
        </Typography>
        <CreateD  muscles={props.muscles}  onCreate={onExerciseCreate}  />
        </Toolbar>
      </AppBar>
    </div>
  );
};
