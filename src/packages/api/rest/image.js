import {makeRequest} from "../makeRequest";

export const ImageAPI = {
    getImage(image_name) {
        return makeRequest({
            url: `images/${image_name}`,
            headers: {authorization: false},
            method: 'GET'
        })
    },
    sendImage(formData) {
        return makeRequest({
            url: `api/image/upload`,
            headers: {
                authorization: true,
                'Content-Type': 'multipart/form-data'
            },
            method: 'POST',
            data: formData,
        })
    }

}