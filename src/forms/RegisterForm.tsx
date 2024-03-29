import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';

import {Button} from "../components";
import {createUser} from "../redux/thunk";
import {useAppDispatch} from "../hooks/redux";

export const RegisterForm = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

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
                    <div>
                        <label htmlFor="name">Name</label>
                        <label htmlFor="login">Login</label>
                        <label htmlFor="email">Email</label>
                        <label htmlFor="password">Password</label>

                    </div>
                    <div>
                        <Field name="name" type="text" />
                        <Field name="login" type="text" />
                        <Field name="email" type="email" />
                        <Field name="password" type="password" />

                    </div>
                    <div>
                        <div><ErrorMessage name="name" /></div>
                        <div><ErrorMessage name="login" /></div>
                        <div><ErrorMessage name="email" /></div>
                        <div><ErrorMessage name="password" /></div>
                    </div>
                </div>
                <div>
                    <Button type="submit">Registration</Button>
                </div>
            </Form>
        </Formik>
    );
};