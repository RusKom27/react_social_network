import {ACTION, NOTIFICATION} from "../../types";

export const initialize = () => ({
    type: ACTION.APP.INITIALIZE,
})

export const toggleMenuTab = (flag=undefined) => ({
    type: ACTION.APP.TOGGLE_MENU_TAB,
    payload: flag
})

export const addErrorNotification = (message) => ({
    type: ACTION.APP.ADD_NOTIFICATION,
    payload: {
        id: Date.now(),
        type: NOTIFICATION.ERROR,
        message: message
    }
})

export const addInfoNotification = (message) => ({
    type: ACTION.APP.ADD_NOTIFICATION,
    payload: {
        id: Date.now(),
        type: NOTIFICATION.INFO,
        message: message
    }
})

export const removeNotification = (id) => ({
    type: ACTION.APP.REMOVE_NOTIFICATION,
    payload: id
})