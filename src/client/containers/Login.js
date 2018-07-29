// Login component on /
// will receive user obj, newUser() and authUser() from store as props

import React from 'react';
import { Button } from '@material-ui/core';
import LoginForm from '../presentational/LoginForm';
import SignupForm from '../presentational/SignupForm';
import { connectLogin } from '../util/connects';
import LoginSuccess from '../presentational/LoginSuccessDialog';
import LoginFail from '../presentational/LoginFailureDialog';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        age_range: '',
        credit_rating: '',
        address_1: '',
        city: '',
        state: '',
        zip: '',
        address_2: '',
      },
      showLogin: true,
      failure: false,
      success: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.email && nextProps.user.first_name) {
      this.setState({ success: true });
    } else if (nextProps.user.status.err && this.props.user.status.fetching) {
      this.setState({ failure: true });
    }
  }

  handleInput = (event, name) => {
    const { value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      }
    });
  }

  switchButton = () => (
    <Button
      onClick={this.changeForm}
      color="secondary"
    >
      {this.state.showLogin ? 'Sign Up' : 'Login' }
    </Button>
  );

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.showLogin) {
      const { email, password } = this.state.form;
      this.props.existingUser({ email, password });
    } else {
      this.props.newUser(this.state.form);
    }
  }

  dismissFail = () => {
    this.setState({ failure: false });
    console.log('silencing error');
  }

  changeForm = () => {
    this.setState({ showLogin: !this.state.showLogin });
  }

  render = () => (
    <div>
      <LoginSuccess open={this.state.success} login={this.state.showLogin} />
      <LoginFail
        open={this.state.failure}
        dismiss={this.dismissFail}
        err={this.props.user.status.err}
      />
      {
        this.state.showLogin === true ?
          <LoginForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            inputs={{
              email: this.state.email,
              password: this.state.password
              }}
            switchButton={this.switchButton}
          />
        :
          <SignupForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            inputs={{ ...this.state.form }}
          />
      }
    </div>
  )
}

export default connectLogin(Login);
