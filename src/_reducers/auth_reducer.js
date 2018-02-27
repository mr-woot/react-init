export function user(
  state = {
    userType: "UNAUTH_USER"
  },
  action
) {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        userType: action.payload
      };
    }
  }
  return state;
}

export function login(
  state = {
    processing: false,
    data: null,
    error: null
  },
  action
) {
  switch (action.type) {
    case "LOGIN_PENDING": {
      return {
        ...state,
        processing: true,
        error: null
      };
    }
    case "LOGIN_FULFILLED": {
      return {
        ...state,
        processing: false,
        data: action.payload.data.result,
        error: null
      };
    }
    case "LOGIN_REJECTED": {
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    }
  }
  return state;
}
