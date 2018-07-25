import { connect } from 'react-redux';
import { newUser } from '../actions/userActions';

const LoginProps = ({ user }) => ({ user });

const LoginDispatch = dispatch => ({
  newUser: user => dispatch(newUser(user)),
});

export const connectLogin = Login => (
  connect(LoginProps, LoginDispatch)(Login)
);

export const filler = () => null;
