import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//REDUX
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

ReactDOM.render(<App />, document.getElementById('root')); 