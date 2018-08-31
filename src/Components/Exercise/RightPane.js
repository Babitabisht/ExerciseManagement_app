import React ,{ Component,Fragment} from 'react' ;
import { Paper,Typography ,ListItem ,ListItemText,List} from "@material-ui/core";

export const RightPane = props => {
    const styles=props.styles ;
   const exercises =props.exercises ;
    return(
      
      <Fragment>
      <Paper style={styles}>Right Pane
    
      {
        exercises.map( ([item,exercises])=> 
        <Fragment>
        <Typography  variant="headline" style={{textTransform:"capitalize"}}>
       {item}
        </Typography>


        <List component="nav">
        {exercises.map( ({title})=> <Fragment>
             <ListItem button>
            <ListItemText primary={title} />
          </ListItem>
          
          </Fragment> )}
         
          
        </List>

        </Fragment>
        
          )
      }
      
      </Paper>
      
      
      </Fragment>
    );
}