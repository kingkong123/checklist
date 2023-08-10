import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

const DeleteTasks = ({ handleDeleteAllTasks }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => (setOpenDialog(true))
  const handleClose = () => (setOpenDialog(false));

  const handleConfirmClick = async (event) => {
    event.preventDefault();

    await handleDeleteAllTasks();
    setOpenDialog(false)
  };

  return (
    <>
      <Button onClick={handleOpen}>Delete all tasks</Button>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirm to delete all tasks?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">Cancel</Button>
          <Button onClick={handleConfirmClick} variant="contained" color="error">Delete all</Button>
        </DialogActions>
      </Dialog>
    </>

  );
};

DeleteTasks.propTypes = {
  handleDeleteAllTasks: PropTypes.func
}

export default DeleteTasks;