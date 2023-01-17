import { Formik, Form, ErrorMessage } from 'formik';
import {useDispatch} from "react-redux";
import * as Yup from 'yup';

import {Button} from "../components";
import {sendImage} from "../redux/thunk";

const FILE_SIZE = 1048576
const SUPPORTED_FORMATS = ["image/png", "image/jpeg"]

export const ImageLoadForm = ({fileName, onImageLoad=()=>{}}) => {
    const dispatch = useDispatch()

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
                let formData = new FormData();
                const file_type = values.image.name.split('.').at(-1)
                const file_name = `${fileName}.${file_type}`
                formData.append("image", values.image, file_name);
                dispatch(sendImage(
                    formData,
                    () => {
                        setSubmitting(false);
                        onImageLoad(file_name)
                    }
                ))
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