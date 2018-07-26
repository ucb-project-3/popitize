import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const redirect = () => {
  window.location.hash = '#/dashboard';
};

const LoginSuccessDialog = ({ open, login }) => (
  <Dialog
    open={open}
    onClose={redirect}
  >
    <DialogTitle>
      {
        login ?
          'Login Successful!'
          :
          'Account Created!'
      }
    </DialogTitle>
    <DialogActions>
      <Button
        onClick={redirect}
      >
        Continue
      </Button>
    </DialogActions>
  </Dialog>
);

LoginSuccessDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  login: PropTypes.bool.isRequired,
};

export default LoginSuccessDialog;
