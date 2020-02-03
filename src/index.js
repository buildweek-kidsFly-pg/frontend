import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//REDUX
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { usersReducer } from './reducers';


const store = createStore(
    usersReducer, 
    applyMiddleware(thunk, logger)
  );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); 