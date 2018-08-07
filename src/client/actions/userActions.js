import axios from 'axios';
import { newUserValidator, existingUserValidator } from '../validators/userValidators';

export const newUser = user => (dispatch) => {
  dispatch({ type: 'CREATE_USER' });
  const valid = newUserValidator(user);
  if (valid.error) {
    console.log(valid.error);
    dispatch({ type: 'CREATE_USER_ERROR', payload: 'Form Validation Failed' });
    return;
  }
  axios.post('/api/auth/new', user)
    .then((res) => {
      if (res.data.id) {
        const {
          // id,
          first_name,
          last_name,
          age_range,
          email
        } = user;
        const payload = {
          id: res.data.id,
          email,
          first_name,
          last_name,
          age_range,
        };
        dispatch({ type: 'CREATE_USER_SUCCESS', payload });
      } else {
        dispatch({ type: 'CREATE_USER_ERROR', payload: res.data.err });
      }
    })
    .catch((res) => {
      console.log(res);
      dispatch({ type: 'CREATE_USER_ERROR', payload: res });
    });
};

export const existingUser = user => (dispatch) => {
  dispatch({ type: 'AUTH_USER' });
  const fail = () => dispatch({ type: 'AUTH_USER_ERROR', payload: 'username or password incorrect' });
  const valid = existingUserValidator(user);
  if (valid.error) {
    console.log(valid.error);
    fail();
  }
  axios.post('/api/auth/existing', user)
    .then((res) => {
      if (res.data.id) {
        const payload = {
          ...res.data
        };
        dispatch({ type: 'AUTH_USER_SUCCESS', payload });
      } else {
        fail();
      }
    })
    .catch((res) => {
      console.log(res);
      fail();
    });
};

