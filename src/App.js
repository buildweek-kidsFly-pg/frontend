import React from 'react';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";

//COMPONENTS
import LogIn from "./React-I-components/registration/Login";
import SignUp from "./React-I-components/registration/Signup";
import AssistSignUp from "./React-I-components/registration/AssistSignUp";

function App() {
  return (
    <div className="App">
      <h1>
        Kids Fly App
      </h1>
     <SignUp/>
     <AssistSignUp/>
     <LogIn/>
    </div>
  );
}

export default App;
