import React from 'react';
import LoginForm from '../presentational/Login/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const { email, password } = this.state;
    if (email.length < 4) {
      alert('email not long');
      return;
    }
    alert('form successfully submitted :}');
    console.log(email, password);
  }

  render = () => {
    const { email, password } = this.state;
    return (
      <LoginForm
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        inputs={{ email, password }}
      />
    );
  };
}

export default Login;
