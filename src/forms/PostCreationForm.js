import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Button} from "../components";

export const PostCreationForm = ({createProfilePost}) => {
    return (
        <Formik
            initialValues={{ post_text: '' }}
            validationSchema={Yup.object({
                post_text: Yup.string()
                    .max(300, 'Must be 300 characters or less'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                createProfilePost(values.post_text, () => {
                    setSubmitting(false)
                    resetForm({post_text: ''})
                })
            }}
        >
            <Form>
                <div>
                    <Field name="post_text" type="text" component={"textarea"}/>
                    <ErrorMessage name="post_text" />
                </div>
                <div>
                    <Button type="submit">Create</Button>
                </div>
            </Form>
        </Formik>
    );
};