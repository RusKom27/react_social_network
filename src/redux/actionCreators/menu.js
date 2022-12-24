import {ACTION} from "../actionTypes";

export const toggleMenuTab = (flag=undefined) => ({
    type: ACTION.MENU.TOGGLE_MENU_TAB,
    flag
})