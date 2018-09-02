import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import {RightPane} from './RightPane' ;
import {LeftPane} from './LeftPane' ;
const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height:500,
    overflowY:'auto'
  }
};

export default props => {
  const exer=props.exercises;
  const category =props.category;
  const exercise=props.exercise;
  const onSelect =props.onSelect ;
  return (
    <Grid container sm={12}>
      <Grid item sm>
       
      <RightPane styles={styles.Paper} exercises={exer} category={category}  onSelect={onSelect} />

      </Grid>

      <Grid item sm>
      
      <LeftPane styles={styles.Paper} exercise={exercise} />

      </Grid>
    </Grid>
  );
};
