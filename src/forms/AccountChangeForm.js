import { Formik, Field, Form, ErrorMessage } from 'formik';
import {connect, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import * as Yup from 'yup';

import {Button} from "../components";
import {useImage} from "../hooks";
import {getImage} from "../redux/thunk";

const FILE_SIZE = 1_048_576
const SUPPORTED_FORMATS = ["image/png", "image/jpg"]

export const AccountChangeForm = ({updateCurrentUser, current_user, getImage}) => {
    return (
        <Formik
            initialValues={{
                name: current_user.name,
                login: current_user.login,
                // avatar_image: useImage(current_user.images.avatar_image.small, getImage),
                // profile_image: useImage(current_user.images.profile_image.small, getImage)
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                login: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                // avatar_image: Yup.mixed()
                //     .nullable()
                //     .notRequired()
                //     .test("FILE_SIZE", "Uploaded file is too big.",
                //         value => !value || (value && value.size <= FILE_SIZE))
                //     .test("FILE_FORMAT", "Uploaded file has unsupported format.",
                //         value => !value || (value && SUPPORTED_FORMATS.includes(value.type))),
                // profile_image: Yup.mixed()
                //     .nullable()
                //     .notRequired()
                //     .test("FILE_SIZE", "Uploaded file is too big.",
                //         value => !value || (value && value.size <= FILE_SIZE))
                //     .test("FILE_FORMAT", "Uploaded file has unsupported format.",
                //         value => !value || (value && SUPPORTED_FORMATS.includes(value.type)))
            })}
            onSubmit={(values, { setSubmitting }) => {
                updateCurrentUser({
                        name: values.name,
                        login: values.login,
                    },
                    user => {
                        setSubmitting(false);
                    }
                )
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