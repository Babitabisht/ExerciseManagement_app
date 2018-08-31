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
    // overflowY:'auto'
  }
};

export default props => {
  const exer=props.exercises
  return (
    <Grid container sm={12}>
      <Grid item sm>
       
      <RightPane styles={styles.Paper} exercises={exer} />

      </Grid>

      <Grid item sm>
      
      <LeftPane styles={styles.Paper}  />

      </Grid>
    </Grid>
  );
};
