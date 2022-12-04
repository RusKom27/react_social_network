import {ACTION} from "../actionTypes";

const initialState = {
    current_user: {
        name: 'Name_placeholder',
        login: 'login_placeholder',
        email: 'Email_placeholder',
    },
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
                current_user: {
                    ...state.current_user,
                    name: action.user.name,
                    login: action.user.login,
                    email: action.user.email
                }
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