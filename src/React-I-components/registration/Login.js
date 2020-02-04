import React, {useState, useEffect}  from "react";
import axios from "axios";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";

const LogIn = ({values, errors, touched, status}, props) => {
  const [LogForm, setLogForm] = useState([]);
  useEffect(() => {
status && setLogForm(LogForm =>
  [...LogForm, status]);
  }, [status]);

  const handleSubmit = event => {
    event.perventDefault();
  }

return (
  <div className="login">
    <Form onSubmit={handleSubmit}>
      <h2>Log In</h2>

      <Field
      name="username"
      type="text"
      placeholder="Username"
      />
      {touched.username && errors.username && (<p>{errors.username}</p>)}

      <Field
      name="password"
      type="password"
      placeholder="password"
      />
      {touched.password && errors.password (<p>{errors.password}</p>)}
      <button type="submit">Log In</button>
    
    </Form>
  </div>
)
}

const FormikLogIn = withFormik({
  mapPropsToValues({username, password}){
    return {
      username: username || "",
      password: password || "",
    };
  },
  
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter your username."),
    password: Yup.string().required("Please enter your password")
  }),
  
  handleSubmit(values, {props, setState}) {
    axios
    .post("", values)
    .then(response => {
      setStatus(response.data);
      console.log(response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);
      props.history.push(``)
    })
    .catch(error => console.log(error.response));
  }
})(LogIn)

export default FormikLogIn