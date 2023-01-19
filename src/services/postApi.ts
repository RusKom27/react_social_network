import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {config} from "../packages/api/config";
import IPost from "../models/IPost";

export const postApi = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({baseUrl: `${config.server_url}post`}),
    tagTypes: ['Post', 'PostList', 'ActualTopicList', 'PopularTagList'],
    endpoints: (build) => ({
        fetchPostById: build.query<IPost, string>({
            query: (post_id) => ({
                url: `/id/${post_id}`
            }),
            providesTags: (result) => ['Post']
        }),
        fetchAllPostList: build.query<IPost[], string>({
            query: () => ({
                url: `/all`
            }),
            providesTags: (result) => ['PostList']
        }),
        fetchPostListByUserLogin: build.query<IPost[], string>({
            query: (user_login) => ({
                url: `/user_login/${user_login}`
            }),
            providesTags: (result) => ['PostList']
        }),
        fetchActualTopicList: build.query({
            query: () => ({
                url: `/actual_topics`
            }),
            providesTags: (result) => ['ActualTopicList']
        }),
        fetchPopularTagList: build.query({
            query: (user_login) => ({
                url: `/popular_tags`
            }),
            providesTags: (result) => ['PopularTagList']
        }),
        createPost: build.mutation<IPost, string>({
            query: (post_text) => ({
                url: `/create`,
                method: 'POST',
                body: {
                    text: post_text
                },
                headers: {'authorization': config.token || ""}
            }),
            invalidatesTags: ['Post', 'PostList']
        }),
        likePost: build.mutation<IPost, string>({
            query: (post_id) => ({
                url: `/like/${post_id}`,
                method: 'PUT',
                headers: {'authorization': config.token || ""}
            }),
            invalidatesTags: ['Post', 'PostList']
        }),
        removePost: build.mutation({
            query: (post_id) => ({
                url: `/delete/${post_id}`,
                method: 'DELETE',
                headers: {'authorization': config.token || ""}
            }),
            invalidatesTags: ['Post', 'PostList']
        }),
        checkPost: build.mutation({
            query: (post_id) => ({
                url: `/check/${post_id}`,
                method: 'PUT',
                headers: {'authorization': config.token || ""}
            }),
            invalidatesTags: ['Post', 'PostList']
        }),
    })
})