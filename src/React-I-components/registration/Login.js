import React, {useState}  from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import './registration.scss';
import { connect } from 'react-redux';
import { login } from '../../actions/Login';



const LogIn = ({values, errors, touched, status, ...props}) => {

  const [userState, setUserState] = useState({ 
    username:'',
    password:''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userState)
    .then(()=> 
      console.log('WOOHOO, LOGGED IN!!!'),
      props.history.push('/parent')  
    );
    setUserState({
      username:'',
      password:''
    });
  };

  const handleChanges = e => {
    setUserState({...userState, [e.target.name]: e.target.value})
  }


return (
  <div className="registration">
    <Form onSubmit={handleSubmit}>
      <h2>Log In</h2>

      <Field className="login"
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
  
  // handleSubmit(values, {props, setState}) {
  //   axios
  //   .post("", values)
  //   .then(response => {
  //     setStatus(response.data);
  //     console.log(response);
  //     localStorage.setItem("token", response.data.token);
  //     localStorage.setItem("username", response.data.username);
  //     props.history.push(``)
  //   })
  //   .catch(error => console.log(error.response));
  // }
})(LogIn)

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

export default connect(
  null,
  { login }
)(FormikLogIn);
