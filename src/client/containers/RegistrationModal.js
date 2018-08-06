import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Switch } from '@material-ui/core';
import { connectRegistration } from '../util/connects';
import RegistrationForm from '../presentational/RegistrationForm';
// import { connect } from 'http2';

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
      },
      switchOn: false,
    };
  }

  handleInput = (event, name) => {
    const { value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSwitch = (event, value) => {
    this.setState({ switchOn: value });
  }

  handleSubmit = () => {
    const { newHost, newRenter } = this.props;
    (this.state.switchOn ? newHost : newRenter)(this.state.form);
  }

  render = () => (
    <Dialog
      open={this.props.open}
      onClose={this.props.onClose}
    >
      <DialogTitle>
        <Typography variant="headline" style={{ textAlign: 'center' }}>
          Registration
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" style={{ textAlign: 'center' }}>
          Register as a Host or a Renter!
        </Typography>
        <div
          style={{ margin: 'auto', width: 'fit-content' }}
        >
          <Switch
            checked={this.state.switchOn}
            onChange={this.handleSwitch}
          />

        </div>
      </DialogContent>
      <DialogContent>
        <DialogTitle>
          <Typography variant="subheading" style={{ textAlign: 'center' }}>
            {this.state.switchOn ? 'Renter' : 'Host'}
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'center' }}>
            {
              this.state.switchOn ?
                'Provide information about the Popup you would like to open'
                :
                'Provide information about the space you have available'
            }
          </Typography>
        </DialogTitle>
        <RegistrationForm
          inputs={this.state.form}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
      </DialogContent>
    </Dialog>
  )
}

export default connectRegistration(RegistrationModal);
