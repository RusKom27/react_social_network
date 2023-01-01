import { Formik, Field, Form, ErrorMessage } from 'formik';
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';

import {Button} from "../components";

export const ImageLoadForm = ({authUser}) => {
    const navigate = useNavigate()

    return (
        <Formik
            initialValues={{ name: '', login: '', account_image: '' }}
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
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                </div>
                <div>
                    <Button type="submit">Login</Button>
                </div>
            </Form>
        </Formik>
    );
};