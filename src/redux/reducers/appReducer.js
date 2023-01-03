import {ACTION} from "../actionTypes";

const initialState = {
    isMenuTabOpened: true,
    isInitialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.APP.TOGGLE_MENU_TAB:
            return {
                ...state, isMenuTabOpened: action.flag === undefined ? !state.isMenuTabOpened : action.flag
            }
        case ACTION.APP.INITIALIZE:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }
}

export {appReducer}