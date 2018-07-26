import React from 'react';
import LoginForm from '../presentational/LoginForm';
import { connectLogin } from '../util/connects';
import SignupForm from '../presentational/SignupForm';
import { TextField, Button } from '@material-ui/core';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      show_form: 'login'


    };
  }

  handleInput = (event, name) => {
    const { value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      email, password, first_name, last_name, age_range, credit_rating, address_1, city, state, zip, address_2
    } = this.state;
    if (email.length < 4) {
      alert('email not long');
      return;
    }
    alert('form successfully submitted :}');
    console.log(email, password);
  }
    changeForm = () => {
      if (this.state.show_form == 'login') {
        this.setState({
          show_form: 'signup'
        });
      } else {
        this.setState({
          show_form: 'login'
        });
      }
    }
  render = () => {
    const {
      email, password, first_name, last_name, age_range, credit_rating, address_1, city, state, zip, address_2
    } = this.state;
    if (this.state.show_form == 'login') {
      return (<div><LoginForm
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        inputs={{ email, password }}
      /><Button onClick={this.changeForm}>Show signup</Button>
              </div>);
    }


    return (<div><SignupForm
      handleInput={this.handleInput}
      handleSubmit={this.handleSubmit}
      inputs={{
 email, password, first_name, last_name, age_range, credit_rating, address_1, city, state, zip, address_2
}}
    /><Button onClick={this.changeForm}>Show log in</Button>
            </div>);
  };
}

export default connectLogin(Login);
