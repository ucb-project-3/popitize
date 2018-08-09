export default (
  state = {
    host: {
      id: null,
      total_store_length: null,
      total_store_width: null,
      s_address_1: null,
      s_address_2: null,
      s_city: null,
      s_state: null,
      s_zip: null,
      rental_rate: null,
      pic_url: null,
    },
    renter: {
      id: null,
    },
    status: {
      fetching: false,
      fetched: false,
      err: null,
    }
  },
  action = { type: null }
) => {
  if (action.type === 'CREATE_HOST') {
    return {
      ...state,
      status: {
        fetching: true,
        fetched: false,
        err: null
      }
    };
  } else if (action.type === 'CREATE_HOST_SUCCESS') {
    return {
      ...state,
      host: {
        ...action.payload,
      },
      status: {
        fetching: false,
        fetched: true,
        err: null
      }
    };
  } else if (action.type === 'CREATE_HOST_ERROR') {
    return {
      ...state,
      status: {
        fetching: false,
        fetched: false,
        err: action.payload
      }
    };
  } else if (action.type === 'CREATE_RENTER') {
    return {
      ...state,
      status: {
        fetching: true,
        fetched: false,
        err: null
      }
    };
  } else if (action.type === 'CREATE_RENTER_SUCCESS') {
    return {
      ...state,
      renter: {
        ...action.payload,
      },
      status: {
        fetching: false,
        fetched: true,
        err: null
      }
    };
  } else if (action.type === 'CREATE_RENTER_ERROR') {
    return {
      ...state,
      status: {
        fetching: false,
        fetched: false,
        err: action.payload
      }
    };
  }
  return { ...state };
};

