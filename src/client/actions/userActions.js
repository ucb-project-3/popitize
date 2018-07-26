import axios from 'axios';
import { newUserValidator } from '../validators/userValidators';

export const newUser = user => (dispatch) => {
  dispatch({ type: 'CREATE_USER' });
  const valid = newUserValidator(user);
  if (valid.err) {
    console.log(valid.error);
    dispatch({ type: 'CREATE_USER_ERROR', payload: 'Form Validation Failed' });
    return;
  }
  axios.post('./api/auth/new', user)
    .then(res => (
      dispatch({ type: 'CREATE_USER_SUCCESS', payload: res.data })))
    .catch((res) => {
      console.log(res);
      dispatch({ type: 'CREATE_USER_ERROR', payload: res.error });
    });
};

export const authenticateUser = () => null;

