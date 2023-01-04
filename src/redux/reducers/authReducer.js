import {ACTION} from "../../types/actionTypes";

let initialState = {
    current_user: null,
    token: localStorage.getItem("token"),
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.AUTH.LOGIN_USER:
            localStorage.setItem("token", action.payload._id)
            return {
                ...state,
                token: action.payload._id,
                current_user: action.payload
            }
        case ACTION.AUTH.SET_CURRENT_USER:
            return {
                ...state,
                current_user: action.payload
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