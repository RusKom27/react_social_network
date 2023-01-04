import {ACTION} from "../../types";

const initialState = {
    notifications: [],
    isMenuTabOpened: true,
    isInitialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.APP.TOGGLE_MENU_TAB:
            return {
                ...state, isMenuTabOpened: action.payload === undefined ? !state.isMenuTabOpened : action.payload
            }
        case ACTION.APP.INITIALIZE:
            return {
                ...state,
                isInitialized: true
            }
        case ACTION.APP.ADD_NOTIFICATION:
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    action.payload
                ]
            }
        case ACTION.APP.REMOVE_NOTIFICATION:
            return {
                ...state,
                notifications: state.notifications.filter(notification => notification.id !== action.payload)
            }
        default:
            return state
    }
}

export {appReducer}