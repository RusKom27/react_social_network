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

    checkMessage(message_id) {
        return makeRequest({
            url: `api/message/check/${message_id}`,
            method: 'PUT',
            headers: {authorization: true}
        })
    },

    createDialog(member_id) {
        return makeRequest({
            url: 'api/message/create_dialog',
            method: 'POST',
            headers: {authorization: true},
            data: {members_id: [member_id]}
        })
    },

    getMessages() {
        return makeRequest({
            url: `api/message`,
            method: 'GET',
            headers: {
                authorization: true
            },
        })
    }
}