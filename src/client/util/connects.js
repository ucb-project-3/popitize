import { connect } from 'react-redux';
import { newUser, existingUser } from '../actions/userActions';

const LoginProps = ({ user }) => ({ user });

const LoginDispatch = dispatch => ({
  newUser: user => dispatch(newUser(user)),
  existingUser: user => dispatch(existingUser(user)),
});

export const connectLogin = Login => (
  connect(LoginProps, LoginDispatch)(Login)
);
