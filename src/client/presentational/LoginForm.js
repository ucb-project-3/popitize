import React from 'react';
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const LoginForm = props => (
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
    <Button type="submit">Click me</Button>
  </form>
);

LoginForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
