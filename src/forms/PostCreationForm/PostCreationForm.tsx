import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import {Button} from "../../components";
import {postApi} from "../../redux/services";

import styles from "./PostCreationForm.module.scss"

export const PostCreationForm = () => {
    const [createPost] = postApi.useCreatePostMutation()

    return (
        <Formik
            initialValues={{ post_text: '' }}
            validationSchema={Yup.object({
                post_text: Yup.string()
                    .max(300, 'Must be 300 characters or less'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                createPost(values.post_text)
                setSubmitting(false)
                resetForm()
            }}
        >
            <Form>
                <div className={styles.container}>
                    <div>
                        <Field name="post_text" type="text" component={"textarea"}/>
                        <ErrorMessage name="post_text" />
                    </div>
                    <div>
                        <Button type="submit">Create</Button>
                    </div>
                </div>

            </Form>
        </Formik>
    );
};