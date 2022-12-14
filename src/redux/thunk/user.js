import {UserAPI} from "../../packages/api/rest/user";
import {setUser, subscribeUser as subscribeUserAction} from "../actions";

export const getUser = (login) => (dispatch) => {
    UserAPI.getUser(login).then(user => {
        dispatch(setUser(user.data))
    })
}

export const subscribeUser = (login) => (dispatch) => {
    UserAPI.subscribeUser(login).then(user => {
        console.log(user)
        dispatch(subscribeUserAction(user.data))
    })
}
