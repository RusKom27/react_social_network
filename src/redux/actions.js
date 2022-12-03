import {ACTION} from "./actionTypes";

export const updateMessageInput = (message_text) => ({
    type: ACTION.UPDATE_MESSAGE_INPUT,
    message_text
})

export const addMessage = (dialog_id) => ({
    type: ACTION.ADD_MESSAGE,
    dialog_id
})

export const updatePostInput = (post_text) => ({
    type: ACTION.UPDATE_POST_INPUT,
    post_text
})

export const addPost = () => ({
    type: ACTION.ADD_POST,
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

export const registerUser = (user) => ({
    type: ACTION.REGISTER_USER,
    user
})

export const logoutUser = () => ({
    type: ACTION.LOGOUT_USER
})