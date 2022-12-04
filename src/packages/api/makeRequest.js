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
    return axios({
        url: config.local_server_url + url,
        method,
        headers,
        params,
        data
    })
}

export {makeRequest}