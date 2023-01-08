import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import * as Yup from 'yup';

import {Button} from "../components";
import {createUser} from "../redux/thunk";

export const RegisterForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{name: '', login: '', email: '', password: '' }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                login: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                dispatch(createUser(
                    values.name,
                    values.login,
                    values.email,
                    values.password,
                    user => {
                        setSubmitting(false)
                        navigate(`/profile/${user.login}`)
                    }
                ))
            }}
        >
            <Form>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />
                </div>
                <div>
                    <label htmlFor="login">Login</label>
                    <Field name="login" type="text" />
                    <ErrorMessage name="login" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" />
                </div>
                <div>
                    <Button type="submit">Registration</Button>
                </div>
            </Form>
        </Formik>
    );
};