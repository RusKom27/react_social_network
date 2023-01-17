import axios from "axios";
import {config} from "./config";

interface RequestType {
    url: string
    method: string
    params?: any
    data?: any
    headers?: any
}

const makeRequest = ({
    url= '/',
    method= 'GET',
    params= {},
    data= {},
    headers = {authorization: ""}
}: RequestType) => {
    if (headers.authorization) headers.authorization = config.token
    return axios({
        url: config.server_url + url,
        method,
        headers,
        params,
        data
    })
}

export {makeRequest}