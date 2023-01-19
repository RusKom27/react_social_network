import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {config} from "../packages/api/config";
import IUser from "../models/IUser";
import {setCurrentUser} from "../redux/reducers/auth";

export const userApi = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.server_url}user`,
        prepareHeaders: async headers => {
            headers.set('authorization', config.token || "")
            return headers
        }
    }),
    tagTypes: ['AuthUser','User', 'UserList'],
    endpoints: (build) => ({
        authUserByToken: build.query<IUser, string>({
            query: () => ({
                url: `/`
            }),
            providesTags: (result) => ['AuthUser'],
            async onCacheEntryAdded(arg, {dispatch, cacheDataLoaded}) {
                const current_user = await cacheDataLoaded
                dispatch(setCurrentUser(current_user.data))
            }
        }),
        authUserByLoginEmail: build.query<IUser, {login: string, email: string}>({
            query: () => ({
                url: `/`
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
        fetchUserListById: build.query<IUser[], string[]>({
            query: (users_id) => ({
                url: `/id_array?users_id=${users_id.join('&users_id=')}`
            }),
            providesTags: (result) => ['UserList']
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
                }
            }),
            invalidatesTags: ['AuthUser']
        }),
        updateUser: build.mutation<IUser, any>({
            query: (props) => ({
                url: `/update`,
                method: 'POST',
                body: {
                    ...props
                }
            }),
            invalidatesTags: ['AuthUser']
        }),
        logoutUser: build.mutation({
            query: () => ({
                url: `/close_connection`,
                method: 'POST'
            }),
            invalidatesTags: ['AuthUser']
        }),
    })
})