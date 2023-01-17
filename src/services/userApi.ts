import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {config} from "../packages/api/config";
import IUser from "../models/IUser";
import {setCurrentUser} from "../redux/reducers/auth";

export const userApi = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({baseUrl: `${config.server_url}user`}),
    tagTypes: ['AuthUser','User'],
    endpoints: (build) => ({
        authUserByToken: build.query<IUser, string>({
            query: () => ({
                url: `/`,
                headers: {'authorization':  config.token || ""}
            }),
            providesTags: (result) => ['AuthUser'],
            async onCacheEntryAdded(arg, {dispatch, getCacheEntry}) {
                dispatch(setCurrentUser(getCacheEntry().data))
            }
        }),
        authUserByLoginEmail: build.query<IUser, {login: string, email: string}>({
            query: () => ({
                url: `/`,
                headers: {'authorization':  config.token || ""}
            }),
            providesTags: (result) => ['AuthUser'],
            async onCacheEntryAdded(arg, {dispatch, getCacheEntry}) {
                dispatch(setCurrentUser(getCacheEntry().data))
            }
        }),
        fetchUserById: build.query<IUser, string>({
            query: (user_id) => ({
                url: `/id/${user_id}`
            }),
            providesTags: (result) => ['User']
        }),
        fetchUserByLogin: build.query<IUser, string>({
            query: (user_login) => ({
                url: `/login/${user_login}`
            }),
            providesTags: (result) => ['User']
        }),
        createUser: build.mutation<IUser, string>({
            query: (post_text) => ({
                url: `/create`,
                method: 'POST',
                body: {
                    text: post_text
                },
                headers: {'authorization':  config.token || ""}
            }),
            invalidatesTags: ['AuthUser']
        }),
        updateUser: build.mutation<IUser, any>({
            query: (props) => ({
                url: `/update`,
                method: 'POST',
                body: {
                    ...props
                },
                headers: {'authorization':  config.token || ""}
            }),
            invalidatesTags: ['AuthUser']
        }),
        logoutUser: build.mutation({
            query: () => ({
                url: `/close_connection`,
                method: 'POST',
                headers: {'authorization':  config.token || ""}
            }),
            invalidatesTags: ['AuthUser']
        }),
    })
})