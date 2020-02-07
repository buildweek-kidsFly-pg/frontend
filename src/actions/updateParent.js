import axiosWithAuth from "../components/Auth/axiosWithAuth";
import {
  UPDATE_PARENT_START,
  UPDATE_PARENT_SUCCESS,
  UPDATE_PARENT_FAILURE
} from "../actions";

export const addTrip = state => dispatch => {
  console.log("state", state);
  dispatch({ type: UPDATE_PARENT_START });
  return axiosWithAuth()
    .put("https://kidsfly-lambda.herokuapp.com/api/users/parent/myTrips/:id")
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_PARENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_PARENT_FAILURE, payload: err });
    });
};
