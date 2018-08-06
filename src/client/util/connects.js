import { connect } from 'react-redux';
import { newUser, existingUser } from '../actions/userActions';

const LoginProps = ({ user }) => ({ user });

const LoginDispatch = dispatch => ({
  newUser: user => dispatch(newUser(user)),
  existingUser: user => dispatch(existingUser(user)),
});

const RegistrationDispatch = dispatch => ({
  newHost: () => console.log('dispatch new host'),
  newRenter: () => console.log('dispatch new renter'),
});

export const connectLogin = Login => (
  connect(LoginProps, LoginDispatch)(Login)
);

export const connectProfile = Profile => (
  connect(LoginProps, null)(Profile)
);

export const connectRegistration = Reg => (
  connect(LoginProps, RegistrationDispatch)(Reg)
);

