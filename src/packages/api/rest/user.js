import {makeRequest} from "../makeRequest";

export const UserAPI = {
    getUser(email, password) {
        return makeRequest({
            url: 'api/auth/login',
            headers: {authorization: false},
            method: 'POST',
            data: {
                email,
                password
            }
        })
    },

    getUserByToken() {
        return makeRequest({
            url: `api/user`,
            headers: {authorization: true},
            method: 'GET',
        })
    },

    getUserByLogin(login) {
        return makeRequest({
            url: `api/user/${login}`,
            headers: {authorization: true},
            method: 'GET',
        })
    },

    createUser(name, login, email, password) {
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
}

