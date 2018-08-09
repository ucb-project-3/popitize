import axios from 'axios';
// import { verifyToken } from './userActions';

export const newHostProfile = host => (dispatch) => {
  console.log('new host');
  dispatch({ type: 'CREATE_HOST' });
  axios.post('/api/reg/host', host)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: 'CREATE_HOST_SUCCESS', payload: res.data });
    })
    .catch(err => dispatch({ type: 'CREATE_HOST_ERROR', payload: err }));
};

export const getHostProfile = (id = null, token = null) => dispatch => {
  axios.ge
}

export const newRenterProfile = renter => dispatch => ({ dispatch, renter });

