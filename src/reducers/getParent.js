import {
  GET_PARENT_START,
  GET_PARENT_SUCCESS,
  GET_PARENT_FAILURE
} from "../actions";

const initialState = {
  parents: {},
  fetchingData: false,
  error: ""
};

export const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PARENT_START:
      return {
        ...state,
        fetchingData: true,
        error: ""
      };
    case GET_PARENT_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        error: "",
        parents: action.payload
      };
    case GET_PARENT_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
