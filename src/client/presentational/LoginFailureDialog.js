import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const redirect = () => {
  window.location.hash = '#/dashboard';
};

const LoginFailureDialog = ({ open, dismiss, err }) => {
  let error;
  if (err) error = JSON.stringify(err);
  else error = null;
  return (
    <Dialog
      open={open}
      onClose={redirect}
    >
      <DialogTitle>
      Panic!
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <p>
           Something went wrong... check to make sure your inputs are valid
          </p>
          <p>
          devmode error: {error || 'not found'}
          </p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={dismiss}
        >
        back
        </Button>
      </DialogActions>
    </Dialog>
  );
};

LoginFailureDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  dismiss: PropTypes.func.isRequired,
};

export default LoginFailureDialog;
