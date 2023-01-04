import {ACTION} from "../../types/actionTypes";

export const setInitialLoading = (isInitialLoading) => ({
    type: ACTION.PROFILE.SET_INITIAL_LOADING,
    payload: isInitialLoading,
})

export const setUser = (user) => ({
    type: ACTION.PROFILE.SET_USER,
    payload: user
})

export const addPost = (post) => ({
    type: ACTION.PROFILE.ADD_POST,
    payload: post,
})

export const setPosts = (posts) => ({
    type: ACTION.PROFILE.SET_POSTS,
    payload: posts,
})

export const updatePost = (post) => ({
    type: ACTION.PROFILE.UPDATE_POST,
    payload: post
})

export const deletePost = (post) => ({
    type: ACTION.PROFILE.DELETE_POST,
    payload: post
})
