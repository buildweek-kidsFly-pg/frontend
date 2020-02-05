import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
  users: [],
  isLogging: false,
  error: '',
  loggedIn: false,
  token: localStorage.getItem('token')
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: 
      return {
        ...state,
        isLogging: true,
        error: '',
        loggedIn: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        error: '',
        users: payload,
        loggedIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLogging: false,
        error: payload,
        loggedIn: false
      };
    default:
      return state;
  }
};