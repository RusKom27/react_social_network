import {makeRequest} from "../makeRequest";

export const getUsers = () => {
    return makeRequest({
        url: 'api/user/',
        headers: {authorization: true},
        method: 'GET',
    })
}

export const getUser = (email, password) => {
    return makeRequest({
        url: 'api/auth/login',
        headers: {authorization: false},
        method: 'POST',
        data: {
            email,
            password
        }
    })
}

export const getUserByToken = (token) => {
    return makeRequest({
        url: `api/user`,
        headers: {authorization: token},
        method: 'GET',
    })
}



export const createUser = (name, login, email, password) => {
    return makeRequest({
        url: 'api/auth/register',
        headers: {authorization: false},
        method: 'POST',
        data: {
            name,
            login,
            email,
            password
        }
    })
}

