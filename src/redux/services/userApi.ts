import {createApi} from "@reduxjs/toolkit/dist/query/react";
import IUser from "../../models/IUser";
import {queryWithAuth} from "./interceptors/queryWithAuth";

export const userApi = createApi({
    reducerPath: "userAPI",
    baseQuery: queryWithAuth,
    tagTypes: ['User', 'UserList'],
    endpoints: (build) => ({
        fetchUserById: build.query<IUser, string>({
            query: (user_id) => ({
                url: `/user/id/${user_id}`
            }),
            providesTags: () => ['User']
        }),
        fetchUserListById: build.query<IUser[], string[]>({
            query: (users_id) => ({
                url: `/user/id_array?users_id=${users_id.join('&users_id=')}`
            }),
            providesTags: () => ['UserList']
        }),
        fetchUserByLogin: build.query<IUser, string>({
            query: (user_login) => ({
                url: `/user/login/${user_login}`
            }),
            providesTags: () => ['User']
        }),
        updateUser: build.mutation<IUser, any>({
            query: (props) => ({
                url: `/user/update`,
                method: 'POST',
                body: {
                    ...props
                }
            }),
            invalidatesTags: ['User']
        })
    })
})