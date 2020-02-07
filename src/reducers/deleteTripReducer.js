import {
  DELETE_TRIP_START,
  DELETE_TRIP_SUCCESS,
  DELETE_TRIP_FAILURE
} from "../actions";

const initialState = {
  trips: {},
  isDeleting: false,
  deleted: false,
  error: ""
};

export const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TRIP_START:
      return {
        ...state,
        isDeleting: true,
        error: "",
        deleted: false
      };
    case DELETE_TRIP_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        error: "",
        trips: action.payload,
        podeletedsted: true
      };
    case DELETE_TRIP_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.payload,
        deleted: false
      };
    default:
      return state;
  }
};
