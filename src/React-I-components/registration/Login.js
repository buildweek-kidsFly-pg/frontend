import React  from "react";
import {Link} from "react-router-dom";


const LogIn = () => {
  const handleSubmit = event => {
    event.perventDefault();
  }


return (
  <div className="login">
    <form onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <input
      name="username"
      type="text"
      placeholder="Username"
      />
      <input
      name="password"
      type="password"
      placeholder="password"
      />
      <button type="submit">Log In</button>
    </form>
  </div>
)
}

export default LogIn