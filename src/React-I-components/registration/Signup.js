import React, {useState} from "react";
import './Registration.scss';
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import {connect} from 'react-redux';
import { addUser } from '../../actions/Register';
const SignUp = ({ values, errors, touched, status, ...props }) => {
    const [userState, setUserState] = useState({
        first_name:'',
        last_name:'',
        email:'',
        password: '',
        address:'', 
        phone:'',
        p_home_airport:''
    });
    const handleSubmit = event => {
      event.preventDefault();
      props.addUser(userState).then(() => props.history.push('/parent'));
      setUserState({
        username:'',
        password: ''
      })
    }
    const handleChanges = e => {
        setUserState({...userState, [e.target.name]: e.target.value});
    }
  return (
      <div className='registration'>
          <Form onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <Field 
              name="first_name"
              type="text" 
              placeholder="First Name"
              onChange={handleChanges}
              value={userState.first_name}
              />
              {touched.first_name && errors.first_name && (<p>{errors.first_name}</p>)}
              <Field 
              name="last_name"
              type="text"
              placeholder="Last Name"
              value={userState.last_name}
              onChange={handleChanges}

              />
              {touched.last_name && errors.last_name && (<p>{errors.last_name}</p>)}

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
              name="p_home_airport"
              type="text"
              placeholder="Airport"
              value={userState.p_home_airport}
              onChange={handleChanges}
              />
              {touched.p_home_airport && errors.p_home_airport && (<p>{errors.p_home_airport}</p>)}
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
export default connect(
  null,
  {addUser}
)(FormikSignUp);