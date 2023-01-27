import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';

import {Button} from "../components";
import {authUser} from "../redux/thunk";
import {useAppDispatch} from "../hooks/redux";
import {authApi} from "../redux/services";

export const LoginForm = () => {
    const navigate = useNavigate()
    const [login, {isSuccess}] = authApi.useLoginMutation()

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                login(
                    {email: values.email,
                    password: values.password}
                )
                if (isSuccess) {
                    setSubmitting(false);
                    navigate(`/`)
                }
            }}
        >
            <Form>
                <div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div>
                        <Field name="email" type="email" />
                        <Field name="password" type="password" />
                    </div>
                    <div>
                        <div><ErrorMessage name="email" /></div>
                        <div><ErrorMessage name="password" /></div>
                    </div>
                </div>
                <div>
                    <Button type="submit">Login</Button>
                </div>
            </Form>
        </Formik>
    );
};