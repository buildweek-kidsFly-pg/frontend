import React from 'react';
import './App.css';
import LogIn from "./React-I-components/registration/Login";
import SignUp from "./React-I-components/registration/Signup";

function App() {
  return (
    <div className="App">
      <h1>
        Kids Fly App
      </h1>
     <SignUp/>
     <LogIn/>
    </div>
  );
}

export default App;
