import {makeRequest} from "../makeRequest";

const getUsers = () => {
    return makeRequest({
        url: 'api/user/',
        headers: {authorization: true},
        method: 'GET',
    })
}

export {
    getUsers
}