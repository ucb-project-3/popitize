import axios from 'axios';

export const newHostProfile = host => (dispatch) => {
  dispatch({ type: 'CREATE_HOST' });
  axios.post('/api/reg/host', host)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: 'CREATE_USER_SUCCESS', payload: res.data });
    })
    .catch(err => dispatch({ type: 'CREATE_USER_ERROR', payload: err }));
};

export const newRenterProfile = renter => dispatch => ({ dispatch, renter });

