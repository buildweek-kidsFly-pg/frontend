import React from "react";


const SignUp = () => {
  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
        name="firstName"
        type="text"
        placeholder="First Name"
        />
        <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        />
        <input
        name="address"
        type="address"
        placeholder="Address"
        />
        <input
        name="email"
        type="email"
        placeholder="example123@example.com"
        />
        <input
        name="phoneNumber"
        type="tel"
        placeholder="(123) 456-7890"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp