import axiosWithAuth from "../components/Auth/axiosWithAuth";
import {
  GET_PARENT_START,
  GET_PARENT_SUCCESS,
  GET_PARENT_FAILURE
} from "../actions";

export const addTrip = state => dispatch => {
  console.log("state", state);
  dispatch({ type: GET_PARENT_START });
  return axiosWithAuth()
    .get("https://kidsfly-lambda.herokuapp.com/api/users/parent")
    .then(res => {
      console.log(res);
      dispatch({ type: GET_PARENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_PARENT_FAILURE, payload: err });
    });
};
