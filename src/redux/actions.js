import {ACTION} from "./actionTypes";

export const addMessage = (message) => ({
    type: ACTION.MESSAGE.ADD_MESSAGE,
    message
})

export const setMessages = (messages) => ({
    type: ACTION.MESSAGE.SET_MESSAGES,
    messages
})

export const updateDialog = (dialog) => ({
    type: ACTION.MESSAGE.UPDATE_DIALOG,
    dialog
})


export const addDialog = (dialog) => ({
    type: ACTION.MESSAGE.ADD_DIALOG,
    dialog
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

export const deletePost = (post) => ({
    type: ACTION.POST.DELETE_POST,
    post
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

export const subscribeUser = (user_login) => ({
    type: ACTION.USER.SUBSCRIBE_USER,
    user_login
})

export const addImage = (image) => ({
    type: ACTION.IMAGE.ADD_IMAGE,
    image
})


