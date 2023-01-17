import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {config} from "../packages/api/config";

export const userApi = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({baseUrl: `${config.server_url}user`}),
    tagTypes: ['AuthUser','User'],
    endpoints: (build) => ({
        authUserByToken: build.query({
            query: () => ({
                url: `/`,
                headers: {'authorization': config.token}
            }),
            providesTags: (result) => ['AuthUser']
        }),
        fetchUserById: build.query({
            query: (user_id) => ({
                url: `/id/${user_id}`
            }),
            providesTags: (result) => ['User']
        }),
        fetchUserByLogin: build.query({
            query: (user_login) => ({
                url: `/login/${user_login}`
            }),
            providesTags: (result) => ['User']
        }),
        createUser: build.mutation({
            query: (post_text) => ({
                url: `/create`,
                method: 'POST',
                body: {
                    text: post_text
                },
                headers: {'authorization': config.token}
            }),
            invalidatesTags: ['Post', 'PostList']
        }),
        logoutUser: build.mutation({
            query: () => ({
                url: `/close_connection`,
                method: 'POST',
                headers: {'authorization': config.token}
            }),
            invalidatesTags: ['Post', 'PostList']
        }),
    })

})