import React, {useState} from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";

import axios from 'axios';

const SignUp = ({ values, errors, touched, status }) => {
    const [userState, setUserState] = useState({
        firstName:'',
        lastName:'',
        username:'',
        email:'',
        password: '',
        address:'',
        phone:'',
        airport:''
    });
    
      const handleSubmit = event => {
        event.preventDefault();
        // REACT II
        axios
          .post('https://reqres.in/api/users', userState)
          .then(res => {
            console.log(res);
            // window.localStorage.setItem("token", res.data.payload);
            // props.history.push('')
          })
          .catch(err => console.log(err));
        }
        
        const handleChanges = e => {
            setUserState({...userState, [e.target.name]: e.target.value});
        }
    

  return (
      <div className='registration'>
          
          <Form onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              
              <Field 
              name="firstName"
              type="text" 
              placeholder="First Name"
              onChange={handleChanges}
              value={userState.firstName}
              />
              {touched.firstName && errors.firstName && (<p>{errors.firstName}</p>)}

              <Field 
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={userState.lastName}
              onChange={handleChanges}

              />
              {touched.lastName && errors.lastName && (<p>{errors.lastName}</p>)}

              <Field 
              name="username"
              type="text"
              placeholder="Username"
              value={userState.username}
              onChange={handleChanges}
              />
              {touched.username && errors.username && (<p>{errors.username}</p>)}

              <Field 
              name="email"
              type="email"
              placeholder="Email"
              value={userState.email}
              onChange={handleChanges}
              />
              {touched.email && errors.email && (<p>{errors.email}</p>)}

              <Field 
              name="password"
              type="password"
              placeholder="Password"
              value={userState.password}
              onChange={handleChanges}
              />
              {touched.password && errors.password && (<p>{errors.password}</p>)}

              <Field
              name="address"
              type="text"
              placeholder="Address"
              value={userState.address}
              onChange={handleChanges}
              />
              {touched.address && errors.address && (<p>{errors.address}</p>)}

              <Field
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={userState.phone}
              onChange={handleChanges}
              />
              {touched.phone && errors.phone && (<p>{errors.phone}</p>)}

              <Field 
              name="airport"
              type="text"
              placeholder="Airport"
              value={userState.airport}
              onChange={handleChanges}
              />
              {touched.airport && errors.airport && (<p>{errors.airport}</p>)}
              <button type="submit">Sign Up</button>
               
          </Form>
      </div>
  )
}

const FormikSignUp = withFormik({
 
  validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Please enter your first name."),
      lastName: Yup.string().required("Please enter your last name."),
      username: Yup.string().required("Please enter your username."),
      email: Yup.string().email("Please provide a valid email address").required("Please enter your email address."),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Please enter your password."),
      address: Yup.string().required("Please enter your address."),
      phone: Yup.string().min(10, "Please enter your ten digit phone number.").required("Please enter your ten digit phone number."),
      airport: Yup.string().required("Please enter your aiport location.")
  })
})(SignUp)

export default FormikSignUp; 