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

    createDialog(member_id) {
        return makeRequest({
            url: 'api/message/create_dialog',
            method: 'POST',
            headers: {authorization: true},
            data: {members_id: [member_id]}
        })
    },

    getMessages(initial) {
        return makeRequest({
            url: `api/message`,
            headers: {
                authorization: true,
                initial: initial ? "true" : "false"
            },
            method: 'GET',
        })
    }
}