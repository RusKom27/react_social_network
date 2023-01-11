import { Formik, Field, Form, ErrorMessage } from 'formik';
import {useDispatch} from "react-redux";
import * as Yup from 'yup';

import {ReactComponent as SearchSVG} from "../../static/images/svg/search.svg"
import {Button, SearchResults} from "../../components";

import styles from "./SearchForm.module.scss"
import {searchByUserInput} from "../../redux/thunk/search";
import {useDebounce} from "../../hooks";


export const SearchForm = () => {
    const dispatch = useDispatch()
    const debouncedSearch = useDebounce((search_text) => {
        dispatch(searchByUserInput(search_text))
    }, 500, true)

    return (
        <Formik
            initialValues={{ search_text: '' }}
            validationSchema={Yup.object({
                search_text: Yup.string()
                    .max(300, 'Must be 300 characters or less')
                    .required("")
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                dispatch(searchByUserInput(values.search_text)).then(() => {
                    setSubmitting(false)
                })
            }}
        >
            {({values, errors, setFieldValue}) => (
                <Form>
                    <div className={styles.container}>
                        <div>
                            <input name="search_text" type="text" onChange={event => {
                                dispatch(searchByUserInput(event.target.value))
                            }}/>
                            <ErrorMessage name="search_text" />
                        </div>
                        <div>
                            <Button type="submit"><SearchSVG/></Button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
};