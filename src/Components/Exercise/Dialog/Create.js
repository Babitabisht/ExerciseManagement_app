import React, { Component, Fragment } from "react";
import {
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Dialog,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  MenuList
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";

const styles = themes => {
  FormControl: {
    width: 500;
  }
};

export class CreateD extends Component {
  state = {
    open: false,
    exercise: {
      title: "",
      description: "",
      muscles: ""
    }
  };

  Handletoggle = () => {
    this.setState({
      open: !this.open
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };
  handleChange = name => ({ target: { value } }) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    });
  };
handleSubmit = () =>{

    const {exercise} =this.state ;
    this.props.onCreate({
      ...exercise,
      id:exercise.title.toLocaleLowerCase().replace(/ /g,'-')

    }) ;

}

  render() {
    const {
      open,
      exercise: { title, description, muscles }
    } = this.state;
    const { classes, muscles: category } = this.props;

    return (
      <Fragment>
        <Button variant="fab" mini onClick={this.Handletoggle}>
          <AddIcon />
        </Button>

        <Dialog open={open} onClick={this.state.Handletoggle}>
          <DialogTitle id="alert-dialog-slide-title">
            Add Your Own Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Please Fill out the form to create your own Exercise.
            </DialogContentText>
            <form action="#">
              <TextField
                id="name"
                label="title"
                value={this.state.name}
                onChange={this.handleChange("title")}
                margin="normal"
                style={{ width: 500 }}
              />

              <br />
              <TextField
                id="name"
                label="description"
                multiline
                rowsMax="4"
                value={this.state.name}
                onChange={this.handleChange("description")}
                margin="normal"
                style={{ width: 500 }}
              />
              <br /> <br />
              <FormControl>
                <InputLabel>Muscles</InputLabel>
                <Select
                  value={muscles}
                  onChange={this.handleChange('muscles')}
                  style={{ width: 500 }}
                >
                  {category.map(cat => (
                    <MenuItem key={cat} value={cat}> {cat} </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose}
              color="primary"
              variant={"raised"}
              onClick={this.handleSubmit}
            >
              Agree
            </Button>
            <Button
            onClick={this.handleClose}
            color="primary"
            variant={"raised"}
            
          >
            Cancel
          </Button>

          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(CreateD);
