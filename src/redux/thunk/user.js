import {UserAPI} from "../../packages/api";
import {setUser} from "../actions";

export const getUser = (login) => (dispatch) => {
    UserAPI.getUser(login).then(user => {
        dispatch(setUser(user.data))
    })
}

export const subscribeUser = (login) => (dispatch) => {
    UserAPI.subscribeUser(login).then(user => {
        dispatch(setUser(user.data))
    })
}

export const updateUser = (new_user) => (dispatch) => {
    UserAPI.updateUser(new_user).then(user => {
        dispatch(setUser(user.data))
    })
}
