import {ACTION} from "../actionTypes";


export const loginUser = (user) => ({
    type: ACTION.AUTH.LOGIN_USER,
    user
})

export const setCurrentUser = (user) => ({
    type: ACTION.AUTH.SET_CURRENT_USER,
    user
})

export const logoutUser = () => ({
    type: ACTION.AUTH.LOGOUT_USER
})