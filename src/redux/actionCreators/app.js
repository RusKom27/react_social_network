import {ACTION} from "../actionTypes";

export const initializeApp = () => ({
    type: ACTION.APP.INITIALIZE,
})

export const toggleMenuTab = (flag=undefined) => ({
    type: ACTION.APP.TOGGLE_MENU_TAB,
    flag
})