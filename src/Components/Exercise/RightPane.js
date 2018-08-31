import React ,{ Component,Fragment} from 'react' ;
import { Paper,Typography ,ListItem ,ListItemText,List} from "@material-ui/core";

export const RightPane = props => {
    const styles=props.styles ;
   const exercises =props.exercises ;
   const category =props.category ;
   console.log(category + exercises)
    return(
      
      <Fragment>
      <Paper style={styles}>
    
      {
        exercises.map( ([item,exercises])=> 
        !category || category == item  ? 
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
         
        
        : null
          )
      }
      
      </Paper>
      
      
      </Fragment>
    );
}