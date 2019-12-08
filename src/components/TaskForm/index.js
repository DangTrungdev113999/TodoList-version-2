import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@material-ui/core"

import styles from "./styles";


class TaskForm extends Component {
  render() {
    const { open, onClose } = this.props
    return (
      <div>
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
            />

            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              multiline
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={onClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
};

export default withStyles(styles)(TaskForm);