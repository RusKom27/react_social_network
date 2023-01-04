import {ACTION} from "../../types/actionTypes";


export const loginUser = (user) => ({
    type: ACTION.AUTH.LOGIN_USER,
    payload: user
})

export const setCurrentUser = (user) => ({
    type: ACTION.AUTH.SET_CURRENT_USER,
    payload: user
})

export const logoutUser = () => ({
    type: ACTION.AUTH.LOGOUT_USER
})