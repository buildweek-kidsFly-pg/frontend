import { ADDTRIP_START, ADDTRIP_SUCCESS, ADDTRIP_FAILURE } from "../actions";

const initialState = {
  trips: [],
  isPosting: false,
  error: ""
};

export const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTRIP_START:
      return {
        ...state,
        isPosting: true,
        error: ""
      };
    case ADDTRIP_SUCCESS:
      return {
        ...state,
        isPosting: false,
        error: "",
        trips: action.payload
      };
    case ADDTRIP_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };
    default:
      return state;
  }
};
