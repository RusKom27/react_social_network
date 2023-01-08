import { Formik, Field, Form, ErrorMessage } from 'formik';
import {useDispatch} from "react-redux";
import * as Yup from 'yup';

import {ReactComponent as SendSVG} from "../static/images/svg/send.svg";
import {Button} from "../components";
import {createMessage} from "../redux/thunk";

export const MessageCreationForm = ({dialog_id}) => {
    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{ message_text: '' }}
            validationSchema={Yup.object({
                message_text: Yup.string()
                    .max(300, 'Must be 300 characters or less'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                dispatch(createMessage(dialog_id, values.message_text, () => {
                    setSubmitting(false)
                    window.scrollTo(0, 0)
                    resetForm({message_text: ''})
                }))
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