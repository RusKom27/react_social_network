import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {config} from "../packages/api/config";

export const postApi = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({baseUrl: config.server_url}),
    tagTypes: ['Post', 'PostList'],
    endpoints: (build) => ({
        fetchPostById: build.query({
            query: (post_id) => ({
                url: `post/id/${post_id}`
            }),
            providesTags: (result) => ['Post']
        }),
        fetchAllPostList: build.query({
            query: () => ({
                url: `post/all`
            }),
            providesTags: (result) => ['PostList']
        }),
        fetchPostListByUserLogin: build.query({
            query: (user_login) => ({
                url: `post/user_login/${user_login}`
            }),
            providesTags: (result) => ['PostList']
        }),
        likePost: build.mutation({
            query: (post_id) => ({
                url: `post/like/${post_id}`,
                method: 'PUT',
                headers: {'authorization': config.token}
            }),
            invalidatesTags: ['Post', 'PostList']
        }),
        removePost: build.mutation({
            query: (post_id) => ({
                url: `post/delete/${post_id}`,
                method: 'DELETE',
                headers: {'authorization': config.token}
            }),
            invalidatesTags: ['Post', 'PostList']
        }),
        checkPost: build.mutation({
            query: (post_id) => ({
                url: `post/check/${post_id}`,
                method: 'PUT',
                headers: {'authorization': config.token}
            }),
            invalidatesTags: ['Post', 'PostList']
        }),
    })

})