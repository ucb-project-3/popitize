import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Dialog, AppBar, IconButton, Card, CardMedia, List, ListItem, DialogTitle, DialogContent, DialogContentText, Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import axios from 'axios';
import RentalForm from './RentalForm';

const placeHolder = 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjlyfu3td_cAhVRJDQIHc5SDaYQjRx6BAgBEAU&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F49846842%2Fi-need-two-elements-to-switch-places-via-css&psig=AOvVaw0-ofNr64KZ-xgB_AFSTrF3&ust=1533885104624824';
const origin = (
  window.location.origin === 'http://localhost:3000' ?
    'http://localhost:8080'
    :
    window.location.origin
);

class HostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      last_name: null,
      focusedInput: null,
      agree: false,
      showSuccess: false,
      form: {
        popup_name: '',
        popup_description: '',
        begin_date: moment(),
        end_date: moment(),
      }
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (!nextProps.content) {
      return;
    }
    if (
      (!this.props.content && nextProps.content.id)
      || (this.props.content.id !== nextProps.content.id)
    ) {
      this.getNames(nextProps.content.id);
    }
  }

  getNames = (id) => {
    axios.post('/api/reg/gethostname', { id })
      .then((res) => {
        console.log(res.data);
        this.setState({ ...res.data });
      });
  }

  handleInput = (event, field) => {
    this.setState({
      form: {
        ...this.state.form,
        [field]: event.target.value,
      }
    });
  }

  handleAgree = (event) => {
    this.setState({
      agree: event.target.checked,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.props.renter_id) {
      alert('you must first go to your profile and register as a renter');
      return;
    } else if (!this.state.agree) {
      alert('you must agree to the terms of the agreement');
      return;
    }
    const { form } = this.state;
    const data = {
      ...form,
      begin_date: form.begin_date.format('x'),
      end_date: form.end_date.format('x'),
      host_id: this.props.content.id,
      image_url: this.props.content.image_url,
      renter_id: this.props.renter_id,
    };
    console.log('data', data);
    axios.post('/api/reg/popup', data)
      .then(() => {
        console.log('success!');
        this.setState({ showSuccess: true });
      })
      .catch(err => console.log(err));
  }

  renderCalendar = () => (
    <div
      style={{
        width: 'fit-content',
        height: 'fit-content',
        border: 'gray 1px',
        // alignSelf: 'flex-start',
      }}
    >
      <DateRangePicker
        startDate={this.state.form.begin_date} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={this.state.form.end_date} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => (
          this.setState({
            form: {
              ...this.state.form,
              begin_date: startDate,
              end_date: endDate
            }
          })
        )} // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => this.setState({ focusedInput })}
        anchorDirection="right"
        // orientation="vertical"
        noBorder
        required
      />
    </div>
  )

  render = () => {
    if (!this.props.content) {
      return null;
    }
    const { showModal, closeModal, content } = this.props;
    return (
      <Dialog
        fullScreen
        open={showModal}
      >
        <AppBar position="static" color="primary">
          <IconButton
            onClick={closeModal}
          >
            <Close />
          </IconButton>
        </AppBar>
        <div id="host-modal-grid">
          <div style={{ gridColumn: 1 }}>
            <Card>
              <CardMedia
                image={content.image_url ? origin + content.image_url : placeHolder}
                style={{
                paddingTop: '56.25%',
              }}
              />
            </Card>
            <div>
              <Typography align="center" variant="headline">
                {`${content.s_address_1} ${content.s_city} ${content.s_address_2 || ''} ${content.s_city}`}
              </Typography>
              <Typography variant="headline" align="center">
              Owner: {`${this.state.first_name} ${this.state.last_name}`}
              </Typography>
              <Paper elevation={4} style={{ margin: '1.5rem auto', width: 'fit-conte' }} >
                <List style={{ width: 'fit-content' }}>
                  <ListItem>
                    <Typography variant="headline">
                Available Space:
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="headline">
                  width: {content.total_store_width}sqft
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="headline">
                  length: {content.total_store_length}sqft
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="headline">
                  total: {content.total_store_length * content.total_store_width}sqft
                    </Typography>
                  </ListItem>
                </List>

              </Paper>
            </div>
          </div>
          <div style={{
            gridColumn: 2,
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            paddingRight: '1rem'
            }}
          >
            <RentalForm
              agree={this.state.agree}
              handleAgree={this.handleAgree}
              handleInput={this.handleInput}
              handleSubmit={this.handleSubmit}
              calendar={this.renderCalendar}
              inputs={this.state.form}
            />
          </div>
        </div>
        <Dialog open={this.state.showSuccess}>
          <DialogTitle>
            Success!
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Congradulations! The owner of the space will be in contact with you soon to work out the details.
            </DialogContentText>
            <Button onClick={() => window.location.reload(true)}>
              Complete Transaction
            </Button>
          </DialogContent>
        </Dialog>
      </Dialog>
    );
  }
}

export default HostModal;
