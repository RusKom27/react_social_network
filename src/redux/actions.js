import {ACTION} from "./actionTypes";

export const addMessage = (message) => ({
    type: ACTION.MESSAGE.ADD_MESSAGE,
    message
})

export const setMessages = (messages) => ({
    type: ACTION.MESSAGE.SET_MESSAGES,
    messages
})

export const setDialogs = (dialogs) => ({
    type: ACTION.MESSAGE.SET_DIALOGS,
    dialogs
})

export const addPost = (post) => ({
    type: ACTION.POST.ADD_POST,
    post,
})

export const setPosts = (posts) => ({
    type: ACTION.POST.SET_POSTS,
    posts,
})

export const updatePost = (post) => ({
    type: ACTION.POST.UPDATE_POST,
    post
})

export const deletePost = (post_id) => ({
    type: ACTION.POST.DELETE_POST,
    post_id
})

export const toggleMenuTab = (flag=undefined) => ({
    type: ACTION.MENU.TOGGLE_MENU_TAB,
    flag
})

export const loginUser = (user) => ({
    type: ACTION.USER.LOGIN_USER,
    user
})

export const setUser = (user) => ({
    type: ACTION.USER.SET_USER,
    user
})

export const logoutUser = () => ({
    type: ACTION.USER.LOGOUT_USER
})