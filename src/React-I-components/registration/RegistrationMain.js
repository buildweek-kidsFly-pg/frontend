import React from "react";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <div>
      <Link to="/auth-register">
        <button>Register</button>
      </Link>
      <Link to="auth-login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Registration;
