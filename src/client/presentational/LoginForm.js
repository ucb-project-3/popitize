import React, { Fragment } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
//   button: {
//     right: '0.5em',
//     margin: '0.5em',
//     marginBottom: '0em',
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     fontWeight: 'bolder',
//     height: '48',
//     padding: '0 30px',
//     color: 'white',
//   },
//   form: {
//   }
// };
const LoginForm = props => (

  <div>
    <Typography variant="headline" id="login-h1">
      {
       props.showLogin ?
         'Log In' :
         'sign Up'
       }
    </Typography>
    <form onSubmit={props.handleSubmit}>
      {
        props.showLogin ?
          <Fragment>
            <TextField
              required
              name="email"
              label="Email"
              value={props.inputs.email}
              placeholder="dave@ucb.com"
              id="email-input"
              type="text"
              onChange={event => props.handleInput(event, 'email')}
            />
            <TextField
              required
              name="password"
              label="Password"
              placeholder="secret secret"
              value={props.inputs.password}
              id="password-input"
              type="password"
              onChange={event => props.handleInput(event, 'password')}
            />

          </Fragment>
        :
          <Fragment>
            <TextField
              required
              name="email"
              label="Email"
              value={props.inputs.email}
              placeholder="dave@dave.dave"
              id="email-input"
              type="text"
              onChange={event => props.handleInput(event, 'email')}
            />
            <TextField
              required
              name="password"
              label="Password"
              placeholder="secret"
              value={props.inputs.password}
              id="password-input"
              type="password"
              onChange={event => props.handleInput(event, 'password')}
            />
            <TextField
              required
              name="first_name"
              label="First name"
              placeholder="First Name"
              value={props.inputs.first_name}
              id="first_name-input"
              type="text"
              onChange={event => props.handleInput(event, 'first_name')}
            />
            <TextField
              required
              name="last_name"
              label="Last name"
              placeholder="Last Name"
              value={props.inputs.last_name}
              id="last_name-input"
              type="text"
              onChange={event => props.handleInput(event, 'last_name')}
            />
            <TextField
              required
              name="address_1"
              label="Address 1"
              placeholder="Address 1"
              value={props.inputs.address_1}
              id="address_1-input"
              type="text"
              onChange={event => props.handleInput(event, 'address_1')}
            />
            <TextField
              required
              name="city"
              label="City"
              placeholder="City"
              value={props.inputs.city}
              id="city-input"
              type="text"
              onChange={event => props.handleInput(event, 'city')}
            />
            <TextField
              required
              name="state"
              label="State"
              placeholder="State"
              value={props.inputs.state}
              id="state-input"
              type="text"
              onChange={event => props.handleInput(event, 'state')}
            />
            <TextField
              required
              name="zip"
              label="Zip"
              placeholder="Zip"
              value={props.inputs.zip}
              id="zip-input"
              type="number"
              onChange={event => props.handleInput(event, 'zip')}
            />
            <TextField
              name="address_2"
              label="Address 2"
              placeholder="Address 2"
              value={props.inputs.address_2}
              id="address_2-input"
              type="text"
              onChange={event => props.handleInput(event, 'address_2')}
            />
          </Fragment>

      }
      <div
        style={{
          display: 'flex',
          flexFlow: 'row-reverse nowrap',
          justifyContent: 'space-between',
          padding: '.8rem 0 0 0'
        }}
      >
        <Button
          className="form-button"
          type="submit"
        >
          {
            props.showLogin ?
              'LogIn' :
              'signUp'
          }
        </Button>
        <Button
          className="form-button"
          onClick={props.changeForm}
        >
          {
            props.showLogin ?
              'Create an account?' :
              'Have an Account?'
          }
        </Button>
      </div>
    </form>
  </div>
);

LoginForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  changeForm: PropTypes.func.isRequired,
  showLogin: PropTypes.bool.isRequired,
  inputs: PropTypes.object.isRequired,
};

export default LoginForm;
