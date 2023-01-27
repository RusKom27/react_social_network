import {makeRequest} from "../makeRequest";
import {Axios, AxiosResponse} from "axios";
import {AuthResponse} from "../../../models/AuthResponse";

export const UserAPI = {
    authUser(email: string, password: string) {
        return makeRequest({
            url: 'auth/login',
            headers: {authorization: false},
            method: 'POST',
            data: {
                email,
                password
            }
        })
    },

    createUser(name: string, login: string, email: string, password: string) {
        return makeRequest({
            url: 'auth/register',
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

    login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return makeRequest({
            url: 'auth/login',
            headers: {},
            method: 'POST',
            data: {
                email,
                password
            }
        })
    },

    logout(): Promise<any> {
        return makeRequest({
            url: 'auth/logout',
            headers: {},
            method: 'POST'
        })
    },

    getUser(login = '') {
        return makeRequest({
            url: `user/login/${login}`,
            headers: {authorization: true},
            method: 'GET',
        })
    },

    getUserById(id: string) {
        return makeRequest({
            url: `user/id/${id}`,
            headers: {authorization: true},
            method: 'GET',
        })
    },

    updateUser(props: any) {
        return makeRequest({
            url: 'user/update',
            headers: {authorization: true},
            method: 'POST',
            data: {
                ...props
            }
        })
    },

    subscribeUser(login: string) {
        return makeRequest({
            url: `user/subscribe/${login}`,
            headers: {authorization: true},
            method: 'PUT',
        })
    },

    closeConnection() {
        return makeRequest({
            url: `user/close_connection`,
            headers: {authorization: true},
            method: 'DELETE',
        })
    }
}

