import {ACTION} from "./actionTypes";

export const updateMessageInput = (message_text) => ({
    type: ACTION.UPDATE_MESSAGE_INPUT,
    message_text
})

export const addMessage = (dialog_id) => ({
    type: ACTION.ADD_MESSAGE,
    dialog_id
})

export const addPost = (post) => ({
    type: ACTION.ADD_POST,
    post,
})

export const setPosts = (posts) => ({
    type: ACTION.SET_POSTS,
    posts,
})

export const updatePost = (post) => ({
    type: ACTION.UPDATE_POST,
    post
})

export const deletePost = (post_id) => ({
    type: ACTION.DELETE_POST,
    post_id
})

export const toggleMenuTab = (flag=undefined) => ({
    type: ACTION.TOGGLE_MENU_TAB,
    flag
})

export const setToken = (token) => ({
    type: ACTION.SET_TOKEN,
    token
})

export const loginUser = (user) => ({
    type: ACTION.LOGIN_USER,
    user
})

export const logoutUser = () => ({
    type: ACTION.LOGOUT_USER
})