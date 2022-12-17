import {makeRequest} from "../makeRequest";

export const MessageAPI = {
    createMessage(dialog_id, text = "", image = "") {
        return makeRequest({
            url: 'api/message',
            method: 'POST',
            headers: {authorization: true},
            data: {dialog_id, text, image}
        })
    },

    getMessages(dialog_id) {
        return makeRequest({
            url: `api/message/${dialog_id}`,
            headers: {authorization: true},
            method: 'GET',
        })
    },

    newGetMessages() {
        return makeRequest({
            url: `api/message`,
            headers: {authorization: true},
            method: 'GET',
        })
    }
}