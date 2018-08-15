import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';


const SignupForm = props => (
  <div
  >
    <Typography variant="headline" id="signup-h1"> Sign up Form </Typography>
    <form onSubmit={props.handleSubmit} className="2-col-form-body">
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
        name="age_range"
        label="Age range"
        placeholder="Age Range"
        value={props.inputs.age_range}
        id="age_range-input"
        type="number"
        onChange={event => props.handleInput(event, 'age_range')}
      />

      <TextField
        required
        name="credit_rating"
        label="Credit rating"
        placeholder="Credit Rating"
        value={props.inputs.credit_rating}
        id="credit_rating-input"
        type="number"
        onChange={event => props.handleInput(event, 'credit_rating')}
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
        required
        name="address_2"
        label="Address 2"
        placeholder="Address 2"
        value={props.inputs.address_2}
        id="address_2-input"
        type="text"
        onChange={event => props.handleInput(event, 'address_2')}
      />
      <Button type="submit">Login</Button>
    </form>
  </div>
);

SignupForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
