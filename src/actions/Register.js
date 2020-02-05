import axios from 'axios';
import {REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE} from './index';

export  const addUser = user => dispatch => {
    console.log('Add User', user);
    dispatch({ type: REGISTER_START});
    return axios 
    .post('https://kidsfly-lambda.herokuapp.com/api/auth/p-register', user)
    .then(res => {
        console.log(res);

        dispatch({ type: REGISTER_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: REGISTER_FAILURE, payload: err.data });
    });
}

