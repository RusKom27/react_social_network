import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {Button} from "../components";
import {useDispatch} from "react-redux";
import {updateCurrentUser} from "../redux/thunk";


export const AccountChangeForm = ({current_user}) => {
    const dispatch = useDispatch()

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
                dispatch(updateCurrentUser({
                        name: values.name,
                        login: values.login,
                    },
                    user => {
                        setSubmitting(false);
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
                    <Button type="submit">Save</Button>
                </div>
            </Form>
        </Formik>
    );
};