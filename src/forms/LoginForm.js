import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Button} from "../components";
import {useNavigate} from "react-router-dom";

export const LoginForm = ({authUser}) => {
    const navigate = useNavigate()

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
                authUser(
                    values.email,
                    values.password,
                    user => {
                        setSubmitting(false);
                        navigate(`/profile/${user.data.login}`)
                    }
                )
            }}
        >
            <Form>
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
                    <Button type="submit">Login</Button>
                </div>
            </Form>
        </Formik>
    );
};