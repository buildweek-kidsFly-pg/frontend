import axios from "axios";
import {
  DELETE_TRIP_START,
  DELETE_TRIP_SUCCESS,
  DELETE_TRIP_FAILURE
} from "../actions";

export const addTrip = state => dispatch => {
  console.log("state", state);
  dispatch({ type: DELETE_TRIP_START });
  return axios
    .delete(
      `https://kidsfly-lambda.herokuapp.com/api/users/parent/myFlights/:id`
    )
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_TRIP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_TRIP_FAILURE, payload: err });
    });
};
