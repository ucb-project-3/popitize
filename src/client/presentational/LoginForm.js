import React from 'react';
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';


const LoginForm = props => (

  <div>
    <h1 id="login-h1"> Log In </h1>

    <form onSubmit={props.handleSubmit}>
      <TextField
        autoFocus
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
        autoFocus
        required
        name="password"
        label="Password"
        placeholder="secret secret"
        value={props.inputs.password}
        id="password-input"
        type="password"
        onChange={event => props.handleInput(event, 'password')}
      />
      <Button type="submit">Click me</Button>
    </form>
  </div>
);

LoginForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
