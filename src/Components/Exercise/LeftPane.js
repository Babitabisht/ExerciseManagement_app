import React ,{ Component, Fragment} from 'react' ;
import { Paper, Typography } from "@material-ui/core";
import Exercise from '.';

export const LeftPane = props => {
   const styles=props.styles ;
   
    return(
      
      <Fragment>
      <Paper style={styles}>
      <Typography variant="display1" >
      Welcome !
      </Typography>
      <Typography variant="body" style={{marginTop:10}}>
      Please Select an Exercise From the list on the left.
      </Typography>
    
     
      </Paper>
      
      
      </Fragment>
    );
    
}
