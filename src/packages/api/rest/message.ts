import {makeRequest} from "../makeRequest";

export const MessageAPI = {
    createMessage(dialog_id: string, text = "", image = "") {
        return makeRequest({
            url: 'message',
            method: 'POST',
            headers: {authorization: "true"},
            data: {dialog_id, text, image}
        })
    },

    checkMessage(message_id: string) {
        return makeRequest({
            url: `message/check/${message_id}`,
            method: 'PUT',
            headers: {authorization: "true"}
        })
    },

    createDialog(member_id: string) {
        return makeRequest({
            url: 'message/create_dialog',
            method: 'POST',
            headers: {authorization: "true"},
            data: {members_id: [member_id]}
        })
    },

    getMessages() {
        return makeRequest({
            url: `message`,
            method: 'GET',
            headers: {authorization: "true"},
        })
    }
}