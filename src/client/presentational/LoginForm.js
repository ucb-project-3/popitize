import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    right: '0.5em',
    margin: '0.5em',
    marginBottom: '0em',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    fontWeight: 'bolder',
    height: '48',
    padding: '0 30px',
    color: 'white',

  },
};
const LoginForm = props => (

  <div>
    <Typography variant="headline" id="login-h1"> Log In </Typography>
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
      <Button className={props.classes.button} type="submit">  {props.children} Login</Button>

      <Button className={props.classes.button} type="submit"> {props.children} Register</Button>
    </form>
  </div>
);

LoginForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node, 
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
