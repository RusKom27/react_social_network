import axios, {AxiosHeaders} from "axios";
import {config} from "./config";

interface CustomAxiosHeaders extends AxiosHeaders {
    authorization?: string
}

interface RequestType {
    url: string
    method: string
    params?: any
    data?: any
    headers?: any
}

const api = axios.create({
    withCredentials: true,
})

api.interceptors.request.use((config) => {
    if (!config.headers) return config
    console.log(config)
    config.headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`
    } as CustomAxiosHeaders
    return config
})

function makeRequest ({
    url= '/',
    method= 'GET',
    params= {},
    data= {},
    headers = {
        // authorization: "",
        withCredentials: true,
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
}: RequestType) {
    // if (headers.authorization) headers.authorization = config.token
    return api({
        url: config.server_url + url,
        method,
        headers,
        params,
        data
    })
}

export {makeRequest}