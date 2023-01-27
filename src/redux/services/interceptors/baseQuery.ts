import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {config} from "../../../packages/api/config";

export const baseQuery = fetchBaseQuery({
    baseUrl: `${config.server_url}/api`,
    credentials: 'include',
    prepareHeaders: headers => {
        headers.append('authorization', `${ localStorage.getItem("token") }`)
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000')
        headers.append('Access-Control-Allow-Credentials', 'true')
    }
})