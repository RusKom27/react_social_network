import {ACTION} from "../actionTypes";
import {createUser} from "../../packages/api/rest/user";

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
                    name: action.user.login,
                    login: action.user.login,
                    email: action.user.email
                }
            }
        case ACTION.REGISTER_USER:
            createUser(action.name, action.login, action.email, action.password).then(user => {
                localStorage.setItem("token", user.data._id)
                return {
                    ...state,
                    token: user.data._id,
                    current_user: {
                        ...state.current_user,
                        login: user.data.login,
                        email: user.data.email
                    }
                }
            })
            return state
        case ACTION.LOGOUT_USER:
            localStorage.clear()
            return {
                ...state,
                token: null,
            }
        default:
            return state
    }
}

export {authReducer}