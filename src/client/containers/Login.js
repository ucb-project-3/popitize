// Login component on /
// will receive user obj, newUser() and authUser() from store as props

import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles';
import LoginForm from '../presentational/LoginForm';
import SignupForm from '../presentational/SignupForm';
import { connectLogin } from '../util/connects';
import LoginSuccess from '../presentational/LoginSuccessDialog';
import LoginFail from '../presentational/LoginFailureDialog';
import '../styles/Login.scss';

// inject some CSS into the DOM.
// const styles = {
//   button: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     borderRadius: 3,
//     border: 0,
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   },
// };

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
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
     <Fragment>
       {/* <div id="login-background" /> */}
       
       <div id="login-frame">
         <LoginSuccess open={this.state.success} login={this.state.showLogin} />
         <LoginFail
           open={this.state.failure}
           dismiss={this.dismissFail}
           err={this.props.user.status.err}
         />
         {/* {
        this.state.showLogin === true ? */}
         <LoginForm
           showLogin={this.state.showLogin}
           changeForm={this.changeForm}
           handleInput={this.handleInput}
           handleSubmit={this.handleSubmit}
           inputs={
             this.state.form
           }
         />

         {/* // <SignupForm
          //   handleInput={this.handleInput}
          //   handleSubmit={this.handleSubmit}
          //   inputs={{ ...this.state.form }}
          // />

         /* <Button
        //  className={this.props.classes.button}
           onClick={this.changeForm}
           color="primary"
           id="button"
         >
           {this.state.showLogin ? 'Sign Up' : 'Login' }
         </Button> */ }
       </div>
     </Fragment>
   )
}

// export default  connectLogin(Login);
// export default connectLogin(withStyles(styles)(Login));
export default connectLogin(Login);
