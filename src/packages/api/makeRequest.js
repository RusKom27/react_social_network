import axios from "axios";
import {config} from "./config";

const makeRequest = ({
    url='/',
    method='GET',
    params={},
    data={},
    headers={}
}) => {
    if (headers.authorization) headers.authorization = config.token
    headers["Access-Control-Allow-Credentials"] = "true"
    headers["Access-Control-Allow-Origin"] = "*"
    headers["Access-Control-Allow-Methods"] = "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    headers["Access-Control-Allow-Headers"] = "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    console.log(data)
    return axios({
        url: config.local_server_url + url,
        method,
        headers,
        params,
        data
    })
}

export {makeRequest}