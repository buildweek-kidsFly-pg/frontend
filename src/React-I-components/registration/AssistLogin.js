import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import './Registration.scss';
import * as Yup from "yup";
import { connect } from 'react-redux';
import { loginAssistant } from '../../actions/Login';



const AssistLogin = ({ values, errors, touched, status, ...props }) => {
        const [assistantState, setAssistantState] = useState({
            email: '',
            password: ''
        });
        const handleSubmit = (event) => {
            event.preventDefault();
            props.loginAssistant(assistantState)
                .then(() =>
                    console.log('WOOHOO, LOGGED IN!!!'),
                    props.history.push('/assistant')
                );
            setAssistantState({
                email: '',
                password: ''
            });
        };
        const handleChanges = e => {
            setAssistantState({...assistantState, [e.target.name]: e.target.value })
        }
        return ( <
                div className = "login" >
                <
                Form onSubmit = { handleSubmit } >
                <
                h2 > Log In < /h2> <
                Field name = "email"
                type = "text"
                placeholder = "email"
                value = { assistantState.email }
                onChange = { handleChanges }
                /> {
                    touched.email && errors.email && ( < p > { errors.email } < /p>)} <
                            Field name = "password"
                            type = "password"
                            placeholder = "password"
                            value = { assistantState.password }
                            onChange = { handleChanges }
                            /> {
                                touched.password && errors.password && ( < p > { errors.password } < /p>)} <
                                    button className = "btnlog"
                                    type = "submit" > Log In < /button> <
                                    /Form> <
                                    /div>
                                )
                            }
                            const FormikLogIn = withFormik({
                                mapPropsToValues({ username, password }) {
                                    return {
                                        username: username || "",
                                        password: password || "",
                                    };
                                },
                                validationSchema: Yup.object().shape({
                                    username: Yup.string().required("Please enter your username."),
                                    password: Yup.string().required("Please enter your password")
                                }),

                            })(AssistLogin)

                            export default connect(
                                null, { loginAssistant }
                            )(FormikLogIn);