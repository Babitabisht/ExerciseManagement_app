import React ,{ Component,Fragment} from 'react' ;
import { Paper,Typography ,ListItem ,ListItemText,List ,
  ListItemSecondaryAction,IconButton

} from "@material-ui/core";

import DeleteIcon from '@material-ui/icons/Delete';

export const RightPane = props => {
    const styles=props.styles ;
   const exercises =props.exercises ;
   const category =props.category ;
   const onSelect = props.onSelect;
   const onDelete=props.onDelete;
   console.log(onSelect)
    return(
      
      <Fragment>
      <Paper style={styles}>
    
      {
        exercises.map( ([item,exercises])=> 
        !category || category == item  ? 
        <Fragment key={item}>
        <Typography  variant="headline" style={{textTransform:"capitalize"}}>
       {item}
        </Typography>


        <List component="nav">

        {exercises.map( ({id,title})=> <Fragment>
             <ListItem button>
            <ListItemText
             primary={title}
             onClick={ () => onSelect(id) }
             
             />
            
              <ListItemSecondaryAction>
              
                <IconButton aria-label="Comments"   onClick={()=>onDelete(id) } >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            

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