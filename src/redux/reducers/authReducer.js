import {ACTION} from "../actionTypes";

let initialState = {
    current_user: null,
    token: localStorage.getItem("token"),
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.USER.LOGIN_USER:
            localStorage.setItem("token", action.user._id)
            return {
                ...state,
                token: action.user._id,
                current_user: action.user
            }
        case ACTION.USER.LOGOUT_USER:
            localStorage.clear()
            return {
                current_user: null,
                token: null,
            }
        default:
            return state
    }
}