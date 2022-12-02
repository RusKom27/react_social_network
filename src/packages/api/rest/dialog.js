import {makeRequest} from "../makeRequest";

const createDialog = ({
                          members_id = [
                              "6389ee473a59ad984960e97b",
                              "6389ea976372580be6b8f066"
                          ]
                      }) => {
    return makeRequest({
        url: 'api/dialog',
        method: 'POST',
        headers: {authorization: true},
        data: {members_id}
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