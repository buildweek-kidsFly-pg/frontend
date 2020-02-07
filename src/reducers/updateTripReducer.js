import {
  UPDATE_PARENT_START,
  UPDATE_PARENT_SUCCESS,
  UPDATE_PARENT_FAILURE
} from "../actions";

const initialState = {
  parents: {},
  isUpdating: false,
  updated: false,
  error: ""
};

export const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PARENT_START:
      return {
        ...state,
        isUpdating: true,
        error: "",
        updated: false
      };
    case UPDATE_PARENT_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        error: "",
        parents: action.payload,
        podeletedsted: true
      };
    case UPDATE_PARENT_FAILURE:
      return {
        ...state,
        isUpdating: false,
        error: action.payload,
        updated: false
      };
    default:
      return state;
  }
};
