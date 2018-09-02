import React, { Component, Fragment } from "react";
import { Paper, Typography } from "@material-ui/core";
import Exercise from ".";

export const LeftPane = props => {
  const styles = props.styles;
  const exercise = props.exercise;
  
  return (
    <Fragment>
      <Paper style={styles}>
        <Typography variant="display1">{exercise.title}</Typography>
        <Typography variant="body" style={{ marginTop: 10 }}>
          {exercise.description}
        </Typography>
      </Paper>
    </Fragment>
  );
};
