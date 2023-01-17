import {makeRequest} from "../makeRequest";

type fixThisType = any

export const ImageAPI = {
    getImage(image_name: string) {
        return makeRequest({
            url: `image/${image_name}`,
            headers: {authorization: ""},
            method: 'GET'
        })
    },
    sendImage(formData: fixThisType) {
        return makeRequest({
            url: `image/upload`,
            headers: {
                authorization: "true",
                'Content-Type': 'multipart/form-data'
            },
            method: 'POST',
            data: formData,
        })
    }
}