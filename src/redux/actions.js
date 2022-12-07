import {ACTION} from "./actionTypes";

export const addMessage = (message) => ({
    type: ACTION.ADD_MESSAGE,
    message
})

export const setMessages = (messages) => ({
    type: ACTION.SET_MESSAGES,
    messages
})

export const setDialogs = (dialogs) => ({
    type: ACTION.SET_DIALOGS,
    dialogs
})

export const addPost = (post) => ({
    type: ACTION.ADD_POST,
    post,
})

export const setFeedPosts = (posts) => ({
    type: ACTION.SET_FEED_POSTS,
    posts,
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

export const loginUser = (user) => ({
    type: ACTION.LOGIN_USER,
    user
})

export const setUser = (user) => ({
    type: ACTION.SET_USER,
    user
})

export const logoutUser = () => ({
    type: ACTION.LOGOUT_USER
})