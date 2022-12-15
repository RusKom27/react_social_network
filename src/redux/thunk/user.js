import {UserAPI} from "../../packages/api/rest/user";
import {setUser, subscribeUser as subscribeUserAction} from "../actions";

export const getUser = (login) => (dispatch) => {
    UserAPI.getUser(login).then(user => {
        dispatch(setUser(user.data))
    })
}

export const subscribeUser = (login) => (dispatch) => {
    UserAPI.subscribeUser(login).then(user => {
        dispatch(subscribeUserAction(user.data))
    })
}

export const updateUser = (user) => (dispatch) => {
    UserAPI.updateUser(user).then(user => {
        dispatch(setUser(user.data))
    })
}
