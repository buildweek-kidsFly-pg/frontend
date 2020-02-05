import React from 'react';
import './App.css';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Logo from "../src/img/kidsfly.png";

//COMPONENTS
import LogIn from "./React-I-components/registration/Login";
import SignUp from "./React-I-components/registration/Signup";
import AssistSignUp from "./React-I-components/registration/AssistSignUp";
import ParentProfile from './components/ParentProfile';

import PrivateRoute from "./components/Auth/PrivateRoute";

const KidsFly = styled.h1`
background:#00C4EE;
padding:1%;
width: 100%;
margin:0 auto;
color: white;
`

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
        <KidsFly className="headertest">
          Kids Fly App
          <div className="logo">
          <img src={Logo} alt="KidsFly logo"/>
        </div>
        </KidsFly>
        </div>
        
        <div className="btncontainer">
        <button className="regbtn">
          <Link to="/register">Register</Link><br></br>
          </button>
          <button className="assistbtn">
            <Link to="assistsignup">Assistant Register</Link>
            </button>
          <button className="logbtn">
            <Link to="/login">Login</Link><br></br>
            {/* <Link to="/admin">Admin Dashboard</Link> */}
          </button>
          </div>
          
      {/* <SignUp/>
      <AssistSignUp/> */}
      <Route path="/register" component={SignUp} /> 
      <Route path="/login" component={LogIn}/>
      <Route path="/assistsignup" component={AssistSignUp}/>
      <PrivateRoute exact path="/parent" component={ParentProfile}/>
      </div>
    </Router>
  );
}

export default App;
