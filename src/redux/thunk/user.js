import {UserAPI} from "../../packages/api/rest/user";
import {loginUser, setUser} from "../actions";

export const authUser = (email, password, then) => (dispatch) => {
    UserAPI.authUser(email, password).then(user => {
        dispatch(loginUser(user.data))
        then(user)
    })
}

export const authUserByToken = () => (dispatch) => {
    UserAPI.getUser().then(user => {
        dispatch(loginUser(user.data))
    })
}

export const getUser = (login) => (dispatch) => {
    UserAPI.getUser(login).then(user => {
        dispatch(setUser(user.data))
    })
}

export const createUser = (name, login, email, password, then) => (dispatch) => {
    UserAPI.createUser(name, login, email, password).then(user => {
        dispatch(loginUser(user.data))
        then(user)
    })
}
