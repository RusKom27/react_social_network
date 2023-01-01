import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {Button} from "../components";
import {useState} from "react";

const FILE_SIZE = 1048576
const SUPPORTED_FORMATS = ["image/png", "image/jpeg"]

export const ImageLoadForm = ({sendImage}) => {
    return (
        <Formik
            initialValues={{ image: '' }}
            validationSchema={Yup.object({
                image: Yup.mixed()
                    .nullable()
                    .notRequired()
                    .test("FILE_SIZE", "Uploaded file is too big.",
                        value => !value || (value && value.size <= FILE_SIZE))
                    .test("FILE_FORMAT", "Uploaded file has unsupported format.",
                        value => !value || (value && SUPPORTED_FORMATS.includes(value.type))),
            })}
            onSubmit={(values, { setSubmitting }) => {
                // sendImage(
                //     values.email,
                //     values.password,
                //     user => {
                //         setSubmitting(false);
                //     }
                // )
            }}

        >
            {({values, errors, setFieldValue}) => (
                <Form onChange={event => {
                    setFieldValue("image", event.currentTarget.image.files[0])
                }}>
                    {values.image ? <img src={URL.createObjectURL(values.image)} alt=""/> : <img alt=""/>}
                    <div>
                        <input name="image" type="file" accept="image/*"/>
                        <ErrorMessage name="image" />
                    </div>
                    <div>
                        <Button type="submit">Save</Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};