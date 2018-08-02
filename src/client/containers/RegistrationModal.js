import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import RegistrationForm from '../presentational/RegistrationForm';

class RegistrationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        total_store_width: '',
        total_store_height: '',
        s_address_1: '',
        s_city: '',
        s_state: '',
        s_zip: '',
        s_address_2: '',
        rental_rate: '',
      }
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
    <Dialog
      open={this.props.open}
      onClose={this.props.onClose}
    >
      <DialogTitle>
        <Typography variant="headline">
          Registration
        </Typography>
      </DialogTitle>
      <DialogContent>
        <RegistrationForm
          inputs={this.state.form}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
      </DialogContent>
    </Dialog>
  )
}

export default RegistrationModal;
