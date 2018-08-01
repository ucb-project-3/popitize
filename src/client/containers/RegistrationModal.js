import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import RegistrationForm from '../presentational/RegistrationForm';

class RegistrationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }

  handleInput = (event, name) => {
    const { value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = () => {
    console.log(this.state.form);
  }

  render = () => (
    <Dialog open={this.props.open}>
      <DialogTitle>
        <Typography variant="headline">
          Registration
        </Typography>
      </DialogTitle>
      <DialogContent>
        <RegistrationForm
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
      </DialogContent>
    </Dialog>
  )
}

export default RegistrationModal;
