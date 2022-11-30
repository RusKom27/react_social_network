import {ACTION} from "../actionTypes";

const initialState = {
    isMenuTabOpened: true,
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.TOGGLE_MENU_TAB:
            return {
                ...state, isMenuTabOpened: action.flag === undefined ? !state.isMenuTabOpened : action.flag
            }
        default:
            return state
    }
}

export {menuReducer}