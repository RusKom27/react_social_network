import {makeRequest} from "../makeRequest";

export const UserAPI = {
    authUser(email, password) {
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

    getUser(login = '') {
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
    },

    updateUser(props) {
        return makeRequest({
            url: 'api/user/update',
            headers: {authorization: true},
            method: 'POST',
            data: {
                ...props
            }
        })
    },

    subscribeUser(login) {
        return makeRequest({
            url: `api/user/subscribe/${login}`,
            headers: {authorization: true},
            method: 'PUT',
        })
    }
}

