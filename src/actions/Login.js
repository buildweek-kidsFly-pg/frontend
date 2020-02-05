import { LOGIN_START,LOGIN_SUCCESS, LOGIN_FAILURE } from './index';
import axiosWithAuth from '../components/Auth/axiosWithAuth';

export const login = user => dispatch => {
    console.log('user', user);
    dispatch({ type: LOGIN_START});
    return axiosWithAuth()
        //this link is for parents
        .post('https://kidsfly-lambda.herokuapp.com/api/auth/p-login', user)
        .then(res => {
            console.log('RESULT',res);
            // localStorage.setItem('token', res.data.token);
            // dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err });
        }); 
}  