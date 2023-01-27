import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {config} from "../../packages/api/config";
import {removeToken, setToken} from "../reducers/auth";
import {queryWithAuth} from "./interceptors/queryWithAuth";
import {baseQuery} from "./interceptors/baseQuery";

export const authApi = createApi({
    reducerPath: "authAPI",
    baseQuery: baseQuery,
    endpoints: (build) => ({
        login: build.mutation<
            {access_token: string},
            {email: string, password: string}
            >({
            query: ({email, password}) => ({
                url: `/auth/login`,
                method: 'POST',
                body: {
                    email,
                    password
                }
            }),
            async onCacheEntryAdded(arg, {cacheDataLoaded, dispatch}) {
                const cacheData = await cacheDataLoaded
                dispatch(setToken({access_token: cacheData.data.access_token}))
            }
        }),
        registration: build.mutation<
            {access_token: string},
            {name: string, login: string, email: string, password: string}
            >({
            query: ({name, login, email, password}) => ({
                url: `/auth/registration`,
                method: 'POST',
                body: {
                    name,
                    login,
                    email,
                    password
                }
            }),
            async onCacheEntryAdded(arg, {cacheDataLoaded, dispatch}) {
                const cacheData = await cacheDataLoaded
                dispatch(setToken({access_token: cacheData.data.access_token}))
            }
        }),
        logout: build.mutation({
            query: () => ({
                url: `/auth/logout`,
                method: 'POST'
            }),
            async onCacheEntryAdded(arg, {dispatch}) {
                dispatch(removeToken())
            }
        }),
    })
})