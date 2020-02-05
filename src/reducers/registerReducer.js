import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions';

const initialState  = {
    users: [],
    registering: false,
    error: ''
}

export const registerReducer = ( state = initialState, action) => {
    switch(action.type){
        case REGISTER_START:
      return {
        ...state,
        registering: true,
        error: ''
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        error: '',
        users: payload
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        error: payload
      };
    default:
      return state;
    }
}