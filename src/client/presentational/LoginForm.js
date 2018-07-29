import React from 'react';
import { TextField, Button, Typography, Card, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';


const LoginForm = props => (

  <Card className="two-row-form login-form" id="login-form">
    <Typography
      className="form-headline"
      variant="headline"
      component="h2"
      color="secondary"
    >
      Log In
    </Typography>
    <form onSubmit={props.handleSubmit}>
      <div className="two-row-form-inputs">
        <TextField
          color="primary"
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
          color="primary"
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
      </div>
      <div className="two-row-form-button-row">
        <props.switchButton />
        <Button color="secondary" type="submit">Submit</Button>
      </div>
    </form>
  </Card>
);

LoginForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputs: PropTypes.object.isRequired
};

export default LoginForm;
