import {ACTION} from "../actionTypes";


export const addMessage = (message) => ({
    type: ACTION.MESSAGE.ADD_MESSAGE,
    message
})

export const updateMessage = (message) => ({
    type: ACTION.MESSAGE.UPDATE_MESSAGE,
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