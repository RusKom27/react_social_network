import {ACTION} from "../actionTypes";

let initialState = {
    current_user: null,
    token: localStorage.getItem("token"),
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.AUTH.LOGIN_USER:
            localStorage.setItem("token", action.user._id)
            return {
                ...state,
                token: action.user._id,
                current_user: action.user
            }
        case ACTION.AUTH.SET_CURRENT_USER:
            return {
                ...state,
                current_user: action.user
            }
        case ACTION.AUTH.LOGOUT_USER:
            localStorage.clear()
            return {
                current_user: null,
                token: null,
            }
        default:
            return state
    }
}