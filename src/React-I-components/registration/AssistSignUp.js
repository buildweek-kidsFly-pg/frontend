import React, { useState } from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import {Input} from 'reactstrap';
import {connect} from 'react-redux';
import { addAssistant } from '../../actions/Register';
import { Link } from 'react-router-dom';

const AssistSignUp = ({ values, errors, touched, status, ...props }) => {

    const [ assistant, setAssistant ] = useState({
        first_name:'',
        last_name:'',
        email:'',
        password: '',
        phone:'',
        a_home_airport:''
    })

    const handleSubmit = event => {
      event.preventDefault();
      props
        .addAssistant(assistant)
        .then(() => props.history.push('/assistant'));
            setAssistant({
                username:'',
                password: ''
            })
    }

    const handleChanges = e => {
        setAssistant({...assistant, [e.target.name]: e.target.value});
    }

  return (
      <div className="assistlogin">
          
          <Form onSubmit={handleSubmit}>
              <h2>Assistant Sign Up</h2>
              
              <Field 
                name="first_name"
                type="text"
                placeholder="First Name"
                value={assistant.first_name}
                onChange={handleChanges}
              />
              {touched.first_name && errors.first_name && (<p>{errors.first_name}</p>)}

              <Field 
                name="last_name"
                type="text"
                placeholder="Last Name"
                value={assistant.last_name}
                onChange={handleChanges}
              />
              {touched.last_name && errors.last_name && (<p>{errors.last_name}</p>)}

              <Field 
                name="email"
                type="email"
                placeholder="Email"
                value={assistant.email}
                onChange={handleChanges}
              />
              {touched.email && errors.email && (<p>{errors.email}</p>)}

              <Field 
                name="password"
                type="password"
                placeholder="Password"
                value={assistant.password}
                onChange={handleChanges}
              />
              {touched.password && errors.password && (<p>{errors.password}</p>)}

              <Field
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={assistant.phone}
                onChange={handleChanges}
              />
              {touched.phone && errors.phone && (<p>{errors.phone}</p>)}

              <Field 
                name="a_home_airport"
                type="text"
                placeholder="Home Airport"
                value={assistant.a_home_airport}
                onChange={handleChanges}
              />
              {touched.a_home_airport && errors.a_home_airport && (<p>{errors.a_home_airport}</p>)}
              <div className="assisbtn">
              <Input type="select">
              <option value={false}>Not Available</option>
              <option value={true}>Available</option>
              </Input>
              <button className="btnsign" type="submit">Sign Up</button>
              </div>
              
              
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

export default connect(
    null,
    {addAssistant}
  )(FormikAssistSignUp);
