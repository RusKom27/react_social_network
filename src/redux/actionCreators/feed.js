import {ACTION} from "../../types";

export const setInitialLoading = (isInitialLoading) => ({
    type: ACTION.FEED.SET_INITIAL_LOADING,
    payload: isInitialLoading,
})

export const addPost = (post) => ({
    type: ACTION.FEED.ADD_POST,
    payload: post,
})

export const setPosts = (posts) => ({
    type: ACTION.FEED.SET_POSTS,
    payload: posts,
})

export const updatePost = (post) => ({
    type: ACTION.FEED.UPDATE_POST,
    payload: post
})

export const deletePost = (post) => ({
    type: ACTION.FEED.DELETE_POST,
    payload: post
})

export const setPopularTags = (tags) => ({
    type: ACTION.FEED.SET_POPULAR_TAGS,
    payload: tags
})
