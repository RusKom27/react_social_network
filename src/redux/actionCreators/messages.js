import {ACTION} from "../../types/actionTypes";


export const addMessage = (message) => ({
    type: ACTION.MESSAGE.ADD_MESSAGE,
    payload: message
})

export const updateMessage = (message) => ({
    type: ACTION.MESSAGE.UPDATE_MESSAGE,
    payload: message
})

export const setMessages = (messages) => ({
    type: ACTION.MESSAGE.SET_MESSAGES,
    payload: messages
})

export const updateDialog = (dialog) => ({
    type: ACTION.MESSAGE.UPDATE_DIALOG,
    payload: dialog
})

export const addDialog = (dialog) => ({
    type: ACTION.MESSAGE.ADD_DIALOG,
    payload: dialog
})