import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {ReactComponent as SendSVG} from "../images/send.svg";
import {Button} from "../components";

export const MessageCreationForm = ({createMessage, dialog_id}) => {
    return (
        <Formik
            initialValues={{ message_text: '' }}
            validationSchema={Yup.object({
                message_text: Yup.string()
                    .max(300, 'Must be 300 characters or less'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                createMessage(dialog_id, values.message_text, () => {
                    setSubmitting(false)
                    window.scrollTo(0, 0)
                    resetForm({message_text: ''})
                })
            }}
        >
            <Form>
                <div>
                    <Field name="message_text" type="text"/>
                    <ErrorMessage name="message_text" />
                </div>
                <div>
                    <Button type="submit"><SendSVG/> Send</Button>
                </div>
            </Form>
        </Formik>
    );
};