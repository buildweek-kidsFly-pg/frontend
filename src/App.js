import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//COMPONENTS
import LogIn from "./React-I-components/registration/Login";
import SignUp from "./React-I-components/registration/Signup";
import AssistSignUp from "./React-I-components/registration/AssistSignUp";
import ParentProfile from './components/ParentProfile';

import PrivateRoute from "./components/Auth/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>
          Kids Fly App
        </h1>
        <li>
          <Link to="/register">Register</Link><br></br>
            <Link to="/login">Login</Link><br></br>
            {/* <Link to="/admin">Admin Dashboard</Link> */}
          </li>
      {/* <SignUp/>
      <AssistSignUp/> */}
      <Route path="/register" component={SignUp} /> 
      <Route path="/login" component={LogIn}/>
      <PrivateRoute exact path="/parent" component={ParentProfile}/>
      </div>
    </Router>
  );
}

export default App;
