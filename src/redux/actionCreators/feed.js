import {ACTION} from "../actionTypes";

export const setInitialLoading = (isInitialLoading) => ({
    type: ACTION.FEED.SET_INITIAL_LOADING,
    isInitialLoading,
})

export const addPost = (post) => ({
    type: ACTION.FEED.ADD_POST,
    post,
})

export const setPosts = (posts) => ({
    type: ACTION.FEED.SET_POSTS,
    posts,
})

export const updatePost = (post) => ({
    type: ACTION.FEED.UPDATE_POST,
    post
})

export const deletePost = (post) => ({
    type: ACTION.FEED.DELETE_POST,
    post
})