import React from 'react';
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';



const SignupForm = props => (

  <div>

    <h1> Sign up Form </h1>


  <form onSubmit={props.handleSubmit}>
    <TextField
      autoFocus
      required
      name="email"
      value={props.inputs.email}
      placeholder="ben@trackgraphic.com"
      id="email-input"
      type="text"
      onChange={event => props.handleInput(event, 'email')}
    />
    <TextField
      autoFocus
      required
      name="password"
      placeholder="secret secret"
      value={props.inputs.password}
      id="password-input"
      type="password"
      onChange={event => props.handleInput(event, 'password')}
    />

    <TextField
      autoFocus
      required
      name="first_name"
      placeholder="First Name"
      value={props.inputs.first_name}
      id="first_name-input"
      type="text"
      onChange={event => props.handleInput(event, 'first_name')}
    />
    <TextField
      autoFocus
      required
      name="last_name"
      placeholder="Last Name"
      value={props.inputs.last_name}
      id="last_name-input"
      type="text"
      onChange={event => props.handleInput(event, 'last_name')}
    />

    <TextField
      autoFocus
      required
      name="age_range"
      placeholder="Age Range"
      value={props.inputs.age_range}
      id="age_range-input"
      type="number"
      onChange={event => props.handleInput(event, 'age_range')}
    />

    <TextField
      autoFocus
      required
      name="credit_rating"
      placeholder="Credit Rating"
      value={props.inputs.credit_rating}
      id="credit_rating-input"
      type="number"
      onChange={event => props.handleInput(event, 'credit_rating')}
    />

    <TextField
      autoFocus
      required
      name="address_1"
      placeholder="Address 1"
      value={props.inputs.address_1}
      id="address_1-input"
      type="text"
      onChange={event => props.handleInput(event, 'address_1')}
    />

    
    <TextField
      autoFocus
      required
      name="city"
      placeholder="City"
      value={props.inputs.city}
      id="city-input"
      type="text"
      onChange={event => props.handleInput(event, 'city')}
    />

     <TextField
      autoFocus
      required
      name="state"
      placeholder="State"
      value={props.inputs.state}
      id="state-input"
      type="text"
      onChange={event => props.handleInput(event, 'state')}
    />

    <TextField
      autoFocus
      required
      name="zip"
      placeholder="Zip"
      value={props.inputs.state}
      id="zip-input"
      type="number"
      onChange={event => props.handleInput(event, 'zip')}
    />

    <TextField
      autoFocus
      required
      name="address_2"
      placeholder="Address 2"
      value={props.inputs.address_2}
      id="address_2-input"
      type="text"
      onChange={event => props.handleInput(event, 'address_2')}
    />
    <Button type="submit">Click me</Button>
  </form>
  </div>
);

SignupForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
