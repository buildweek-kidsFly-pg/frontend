import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//REDUX
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { usersReducer } from './reducers';


const store = createStore(
    usersReducer, 
    applyMiddleware(thunk, logger)
  );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); 



//parents - register
//https://kidsfly-lambda.herokuapp.com/api/auth/p-register


//parent - login 
//https://kidsfly-lambda.herokuapp.com/api/auth/p-login

//assistant - register  
// /https://kidsfly-lambda.herokuapp.com/api/auth/a-register

//assistant - login
//https://kidsfly-lambda.herokuapp.com/api/auth/a-login