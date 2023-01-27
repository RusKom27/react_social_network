import React, {FC} from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {Button} from "../components";
import IUser from "../models/IUser";
import {userApi} from "../redux/services";

type PropsType = {
    current_user: IUser
}

export const AccountChangeForm: FC<PropsType> = ({current_user}) => {
    const [updateUser] = userApi.useUpdateUserMutation()

    return (
        <Formik
            initialValues={{
                name: current_user.name,
                login: current_user.login,
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                login: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                updateUser({
                    name: values.name,
                    login: values.login,
                }).then(value => setSubmitting(false))
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
                    <Button type="submit">Save</Button>
                </div>
            </Form>
        </Formik>
    );
};