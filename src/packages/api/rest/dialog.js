import {makeRequest} from "../makeRequest";

const createDialog = (member_id) => {
    return makeRequest({
        url: 'api/dialog',
        method: 'POST',
        headers: {authorization: true},
        data: {members_id: [member_id]}
    })
}

const getDialogs = () => {
    return makeRequest({
        url: 'api/dialog',
        headers: {authorization: true},
        method: 'GET',
    })
}

export {
    createDialog,
    getDialogs
}