import {ACTION} from "../actionTypes";
import {store} from "../store";
import {getUserByToken} from "../../packages/api/rest/user";



let initialState = {
    current_user: {},
    other_user: {},
    token: localStorage.getItem("token"),
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case ACTION.LOGIN_USER:
            localStorage.setItem("token", action.user._id)
            return {
                ...state,
                token: action.user._id,
                current_user: action.user
            }
        case ACTION.SET_USER:
            return {
                ...state,
                other_user: action.user
            }
        case ACTION.LOGOUT_USER:
            localStorage.clear()
            return {
                current_user: null,
                token: null,
            }
        default:
            return state
    }
}

export {authReducer}