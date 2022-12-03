import axios from "axios";
import {config} from "./config";

const makeRequest = ({
    url='/',
    method='GET',
    params={},
    data={},
    headers={}
}) => {
    return axios({
        url: config.local_server_url + url,
        method,
        headers,
        params,
        data
    })
}

export {makeRequest}