module.exports = (
  state = {
    status: {
      fetching: false,
      fetched: false,
      err: null
    },
    loggedIn: false,
    id: null,
    email: null,
    first_name: null,
    last_name: null,
    age_range: null,
  },
  action = { type: null, payload: null }
) => {
  if (action.type === 'FETCH_USER') {
    return {
      ...state,
      status: {
        fetching: true,
        fetched: false,
        err: null
      }
    };
  } else if (action.type === 'FETCH_USER_SUCCESS') {
    return {
      ...state,
      ...action.payload,
      status: {
        fetching: false,
        fetched: true,
        err: null,
      }
    };
  } else if (action.payload === 'FETCH_USER_CATCH') {
    return {
      ...state,
      status: {
        fetching: false,
        fetched: false,
        err: action.payload,
      }
    }
  }

  return { ...state };
};

