import React, {useState}  from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";

import axiosWithAuth from "../../components/Auth/axiosWithAuth";


const LogIn = ({values, errors, touched, status}, props) => {
  // REACT II
  const [userState, setUserState] = useState({
    username:'',
    password:''
  });

  const handleSubmit = event => {
    event.preventDefault();
    // // REACT II
    axiosWithAuth()
      .post('https://reqres.in/api/users', userState)
      .then(res => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);
        props.history.push('/admin')
      })
      .catch(err => console.log(err));
  }

  const handleChanges = e => {
    setUserState({...userState, [e.target.name]: e.target.value})
  }

  
  

return (
  <div className="login">
    <Form onSubmit={handleSubmit}>
      <h2>Log In</h2>

      <Field
        name="username"
        type="text"
        placeholder="Username"
        value={userState.username}
        onChange={handleChanges}
      />
      {touched.username && errors.username && (<p>{errors.username}</p>)}

      <Field
        name="password"
        type="password"
        placeholder="password"
        value={userState.password}
        onChange={handleChanges}
      />
      {touched.password && errors.password && (<p>{errors.password}</p>)}
      <button type="submit">Log In</button>
    
    </Form>
  </div>
)
}

const FormikLogIn = withFormik({
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter your username."),
    password: Yup.string().required("Please enter your password")
  })
})(LogIn)

export default FormikLogIn