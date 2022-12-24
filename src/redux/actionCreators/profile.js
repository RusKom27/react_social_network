import {ACTION} from "../actionTypes";

export const setInitialLoading = (isInitialLoading) => ({
    type: ACTION.PROFILE.SET_INITIAL_LOADING,
    isInitialLoading,
})

export const setUser = (user) => ({
    type: ACTION.PROFILE.SET_USER,
    user
})

export const addPost = (post) => ({
    type: ACTION.PROFILE.ADD_POST,
    post,
})

export const setPosts = (posts) => ({
    type: ACTION.PROFILE.SET_POSTS,
    posts,
})

export const updatePost = (post) => ({
    type: ACTION.PROFILE.UPDATE_POST,
    post
})

export const deletePost = (post) => ({
    type: ACTION.PROFILE.DELETE_POST,
    post
})
