import {UserAPI} from "../../packages/api";
import {loginUser, setCurrentUser} from "../actions";

export const authUser = (email, password, then) => (dispatch) => {
    UserAPI.authUser(email, password).then(user => {
        dispatch(loginUser(user.data))
        then(user)
    })
}

export const updateCurrentUser = (props) => (dispatch) => {
    UserAPI.updateUser(props).then(user => {
        console.log(user.data)
        dispatch(setCurrentUser(user.data))
    })
}

export const getUserByToken = () => (dispatch) => {
    UserAPI.getUser().then(user => {
        dispatch(setCurrentUser(user.data))
    })
}

export const authUserByToken = () => (dispatch) => {
    UserAPI.getUser().then(user => {
        dispatch(loginUser(user.data))
    })
}

export const createUser = (name, login, email, password, then) => (dispatch) => {
    UserAPI.createUser(name, login, email, password).then(user => {
        dispatch(loginUser(user.data))
        then(user)
    })
}