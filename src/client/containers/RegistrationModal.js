import React, { Fragment } from 'react';
import { Button, CircularProgress, Dialog, DialogContent, DialogTitle, Typography, Switch } from '@material-ui/core';
import { connectRegistration } from '../util/connects';
import axios from 'axios';
import RegistrationForm from '../presentational/RegistrationForm';
// import { connect } from 'http2';

class RegistrationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState()
  }

  getInitialState = () => ({
    form: {
      total_store_width: '',
      total_store_length: '',
      s_address_1: '',
      s_city: '',
      s_state: '',
      s_zip: '',
      s_address_2: '',
      rental_rate: '',
    },
    switchOn: false,
    transactionComplete: false,
  })

  componentWillReceiveProps = (nextProps) => {
    const status = this.props.reg.status;
    const newStatus = nextProps.reg.status;
    if (status.fetching === true && newStatus.fetched === true) {
      this.setState({ transactionComplete: true });
    }
  }

  handleInput = (event, name) => {
    console.log('called', name);
    const { value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  }

  handleSwitch = (event, value) => {
    this.setState({ switchOn: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // const { newHost, newRenter } = this.props;
    const data = {
      ...this.state.form,
      user_id: this.props.user.id,
    };
    if (this.state.switchOn) {
      this.props.newRenter(data);
    } else {
      this.props.newHost(data);
    }
  }

  _onClose = () => {
    const reset = () => (
      this.setState(this.getInitialState())
    );
    this.props.onClose();
    setTimeout(reset, 500);
  }

  render = () => (

    <Dialog
      open={this.props.open}
      onClose={this._onClose}
    >
      <DialogTitle>
        <Typography variant="headline" style={{ textAlign: 'center' }}>
          Registration
        </Typography>
      </DialogTitle>
      {
        this.state.transactionComplete ?
          <Fragment>
            <Typography>
              {this.state.switchOn ? 'Renter' : 'Host'} Profile Created!
            </Typography>
            <Button
              color="secondary"
              onClick={this._onClose}
            >
              Finish
            </Button>
          </Fragment>
          :
          <Fragment>
            {
          !this.props.reg.status.fetching ?
            <Fragment>
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
                  accounts={{
                    host: ('id' in this.props.reg.host),
                    renter: ('id' in this.props.reg.renter),
                  }}
                  switchOn={this.state.switchOn}
                  inputs={this.state.form}
                  handleInput={this.handleInput}
                  handleSubmit={this.handleSubmit}
                />
              </DialogContent>
            </Fragment>
     :
            <div
              style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
            >
              <Typography
                variant="headline"
                align="center"
              >
          Creating {this.state.switchOn ? 'Renter' : 'Host'} Profile
              </Typography>
              <CircularProgress />
            </div>

            }

          </Fragment>

      }

    </Dialog>
  )
}

export default connectRegistration(RegistrationModal);
