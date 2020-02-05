import React from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";

const AssistSignUp = ({ values, errors, touched, status }) => {
  const handleSubmit = event => {
      event.preventDefault();
  }

  return (
      <div className="registration">
          
          <Form onSubmit={handleSubmit}>
              <h2>Assistant Sign Up</h2>
              
              <Field 
              name="first_name"
              type="text"
              placeholder="First Name"
              />
              {touched.firstName && errors.firstName && (<p>{errors.firstName}</p>)}

              <Field 
              name="last_name"
              type="text"
              placeholder="Last Name"
              />
              {touched.lastName && errors.lastName && (<p>{errors.lastName}</p>)}

              <Field 
              name="email"
              type="email"
              placeholder="Email"
              />
              {touched.email && errors.email && (<p>{errors.email}</p>)}

              <Field 
              name="password"
              type="password"
              placeholder="Password"
              />
              {touched.password && errors.password && (<p>{errors.password}</p>)}

              <Field
              name="phone"
              type="tel"
              placeholder="Phone Number"
              />
              {touched.phone && errors.phone && (<p>{errors.phone}</p>)}

              <Field 
              name="a_home_airport"
              type="text"
              placeholder="Home Airport"
              />
              {touched.airport && errors.airport && (<p>{errors.airport}</p>)}
              <button type="submit">Sign Up</button>
              
          </Form>
      </div>
  )
}

const FormikAssistSignUp = withFormik({
 
  validationSchema: Yup.object().shape({
      first_name: Yup.string().required("Please enter your first name."),
      last_name: Yup.string().required("Please enter your last name."),
      email: Yup.string().email("Please provide a valid email address").required("Please enter your email address."),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Please enter your password."),
      phone: Yup.string().min(10, "Please enter your ten digit phone number.").required("Please enter your ten digit phone number."),
      a_home_airport: Yup.string().required("Please enter your aiport location.")
  })
})(AssistSignUp)

export default FormikAssistSignUp; 