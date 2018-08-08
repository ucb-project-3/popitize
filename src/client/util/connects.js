import { connect } from 'react-redux';
import { newUser, existingUser, verifyToken } from '../actions/userActions';
import { newHostProfile } from '../actions/registrationActions';

const LoginProps = ({ user }) => ({ user });

const LoginDispatch = dispatch => ({
  newUser: user => dispatch(newUser(user)),
  existingUser: user => dispatch(existingUser(user)),
});

const RegistrationDispatch = dispatch => ({
  newHost: host => dispatch(newHostProfile(host)),
  newRenter: () => console.log('dispatch new renter'),
  reload: () => verifyToken(localStorage.token),
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

