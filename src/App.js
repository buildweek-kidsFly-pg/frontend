import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Logo from "../src/img/kidsfly.png";

//COMPONENTS
import LogIn from "./React-I-components/registration/ParentLogin";
import SignUp from "./React-I-components/registration/ParentSignup";
import AssistSignUp from "./React-I-components/registration/AssistSignUp";
import ParentProfile from "./components/ParentProfile";
import AssistantProfile from "./components/AssistantProfile";
import AssistLogin from "./React-I-components/registration/AssistLogin";
import AuthorizationButtonsRegister from "./components/AuthorizationButtonsRegister";
import AuthorizationButtonsLogin from "./components/AuthorizationButtonsLogin";
import AddTrip from "./components/AddTrip";
import Registration from "./React-I-components/registration/RegistrationMain";
import LoginComponents from "./React-I-components/registration/LoginComponents";

import PrivateRoute from "./components/Auth/PrivateRoute";

const KidsFly = styled.h1`
  background: #00c4ee;
  padding: 1%;
  width: 100%;
  margin: 0 auto;
  color: white;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <KidsFly className="headertest">
            Kids Fly App
            <div className="logo">
              <img src={Logo} alt="KidsFly logo" />
            </div>
          </KidsFly>
        </div>

        <Switch>
          <Route exact path="/" component={Registration} />
          <Route
            exact
            path="/auth-register"
            component={AuthorizationButtonsRegister}
          />
          <Route
            exact
            path="/auth-login"
            component={AuthorizationButtonsLogin}
          />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/assistsignup" component={AssistSignUp} />
          <Route exact path="/assistlogin" component={AssistLogin} />
          <PrivateRoute exact path="/parent" component={ParentProfile} />
          <PrivateRoute exact path="/assistant" component={AssistantProfile} />
          <PrivateRoute exact path="/add-trip" component={AddTrip} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
