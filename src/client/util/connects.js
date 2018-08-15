import { connect } from 'react-redux';
import { newUser, existingUser, verifyToken } from '../actions/userActions';
import { newHostProfile, newRenterProfile } from '../actions/registrationActions';

const LoginProps = ({ user }) => ({ user });

const HostProps = ({ reg }) => ({ reg });

const LoginDispatch = dispatch => ({
  newUser: user => dispatch(newUser(user)),
  existingUser: user => dispatch(existingUser(user)),
});

const RegistrationProps = ({ user, reg }) => ({ user, reg });

const RegistrationDispatch = dispatch => ({
  newHost: host => dispatch(newHostProfile(host)),
  newRenter: renter => dispatch(newRenterProfile(renter)),
  reload: () => verifyToken(localStorage.token),
});

export const connectLogin = Login => (
  connect(LoginProps, LoginDispatch)(Login)
);

export const connectProfile = Profile => (
  connect(LoginProps, null)(Profile)
);

export const connectRegistration = Reg => (
  connect(RegistrationProps, RegistrationDispatch)(Reg)
);

export const connectHosts = Hosts => (
  connect(HostProps, null)(Hosts)
);

