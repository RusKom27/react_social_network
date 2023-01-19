import { Formik, Field, Form, ErrorMessage } from 'formik';
import React, {FC} from 'react';
import * as Yup from 'yup';

import {ReactComponent as SendSVG} from "../../static/images/svg/send.svg";
import {Button} from "../../components";
import {createMessage} from "../../redux/thunk";
import {useAppDispatch} from "../../hooks/redux";

import styles from "./MessageCreationForm.module.scss"

type PropsType = {
    dialog_id: string
}

export const MessageCreationForm: FC<PropsType> = ({dialog_id}) => {
    const dispatch = useAppDispatch()

    return (
        <Formik
            initialValues={{ message_text: '' }}
            validationSchema={Yup.object({
                message_text: Yup.string()
                    .max(300, 'Must be 300 characters or less')
                    .required(''),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                dispatch(createMessage(dialog_id, values.message_text, () => {
                    setSubmitting(false)
                    window.scrollTo(0, 0)
                    resetForm()
                }))
            }}
        >
            <Form>
                <div className={styles.container}>
                    <div>
                        <Field name="message_text" type="text"/>
                        <ErrorMessage name="message_text" />
                    </div>
                    <div>
                        <Button type="submit"><SendSVG/> Send</Button>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};