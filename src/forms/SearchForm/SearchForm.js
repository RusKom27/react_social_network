import { Formik, Field, Form, ErrorMessage } from 'formik';
import {useDispatch} from "react-redux";
import * as Yup from 'yup';

import {ReactComponent as SearchSVG} from "../../static/images/svg/search.svg"
import {Button, SearchResults} from "../../components";

import styles from "./SearchForm.module.scss"

export const SearchForm = () => {
    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{ search_text: '' }}
            validationSchema={Yup.object({
                search_text: Yup.string()
                    .max(300, 'Must be 300 characters or less'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(false)
                resetForm({search_text: ''})
            }}
        >
            <Form onChange={event => {

            }}>
                <div>
                    <Field name="search_text" type="text"/>
                    <ErrorMessage name="search_text" />
                </div>
                <div>
                    <Button type="submit"><SearchSVG/></Button>
                </div>
            </Form>
        </Formik>
    );
};