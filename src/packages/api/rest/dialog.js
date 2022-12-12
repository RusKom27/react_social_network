import {makeRequest} from "../makeRequest";

export const DialogAPI = {
    createDialog(member_id) {
        return makeRequest({
            url: 'api/dialog',
            method: 'POST',
            headers: {authorization: true},
            data: {members_id: [member_id]}
        })
    },

    getDialogs() {
        return makeRequest({
            url: 'api/dialog',
            headers: {authorization: true},
            method: 'GET',
        })
    }
}