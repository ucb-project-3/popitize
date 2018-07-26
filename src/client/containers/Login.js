// Login component on /
// will receive user obj, newUser() and authUser() from store as props

import React from 'react';
import { Button } from '@material-ui/core';
import LoginForm from '../presentational/LoginForm';
import SignupForm from '../presentational/SignupForm';
import { connectLogin } from '../util/connects';

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
      showLogin: true

    };
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.newUser(this.state.form);
    console.log(this.state.form);
  }

  changeForm = () => {
    this.setState({ showLogin: !this.state.showLogin });
  }

  render = () => (
    <div>
      {
        this.state.showLogin === true ?
          <LoginForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            inputs={{
              email: this.state.email,
              password: this.state.password
              }}
          />
        :
          <SignupForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            inputs={{ ...this.state.form }}
          />
      }
      <Button
        onClick={this.changeForm}
        color="primary"
      >
        {this.state.showLogin ? 'Sign Up' : 'Login' }
      </Button>
    </div>
  )
}

export default connectLogin(Login);
