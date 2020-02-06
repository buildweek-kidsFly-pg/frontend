import React from 'react';
import './App.css';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Logo from "../src/img/kidsfly.png";

//COMPONENTS
import LogIn from "./React-I-components/registration/ParentLogin";
import SignUp from "./React-I-components/registration/ParentSignup";
import AssistSignUp from "./React-I-components/registration/AssistSignUp";
import ParentProfile from './components/ParentProfile';
import AssistantProfile from './components/AssistantProfile';
import AssistLogin from './React-I-components/registration/AssistLogin';

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
            <Link to="/register">Parent Register</Link><br></br>
          </button>
          <button className="logbtn">
            <Link to="/login">Parent Login</Link><br></br>
            {/* <Link to="/admin">Admin Dashboard</Link> */}
          </button>
          <button className="assistbtn">
            <Link to="assistsignup">Assistant Register</Link>
          </button>
          <button className="assistbtn">
            <Link to="assistlogin">Assistant Login</Link>
          </button>
         
        </div>
        <Switch>
          <Route exact path="/register" component={SignUp} /> 
          <Route exact path="/login" component={LogIn}/>
          <Route exact path="/assistsignup" component={AssistSignUp}/>
          <Route exact path="/assistlogin" component={AssistLogin}/>
          <PrivateRoute exact path="/parent" component={ParentProfile}/>
          <PrivateRoute exact path="/assistant" component={AssistantProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
