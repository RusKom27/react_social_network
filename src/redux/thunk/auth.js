import {UserAPI} from "../../packages/api";
import {loginUser, setCurrentUser} from "../actionCreators/auth";
import {addErrorNotification, addInfoNotification} from "../actionCreators/app";


export const authUser = (email, password, then) => (dispatch) => {
    UserAPI.authUser(email, password).then(user => {
        dispatch(loginUser(user.data))
        dispatch(addInfoNotification(`${user.data.name} logged in`))
        then(user)
    }).catch(reason => {
        dispatch(addErrorNotification(reason.response.data.message))
    })
}

export const updateCurrentUser = (user) => (dispatch) => {
    UserAPI.updateUser(user).then(user => {
        dispatch(setCurrentUser(user.data))
    })
}

export const updateUserAvatarImage = (current_user, image_name) => (dispatch) => {
    const user = {
        ...current_user,
        images: {
            ...current_user.images,
            avatar_image: {
                big: image_name,
                small: image_name
            }
        }
    }
    UserAPI.updateUser(user).then(user => {
        dispatch(setCurrentUser(user.data))
    })
}

export const updateUserProfileImage = (current_user, image_name) => (dispatch) => {
    const user = {
        ...current_user,
        images: {
            ...current_user.images,
            profile_image: {
                big: image_name,
                small: image_name
            }
        }
    }

    UserAPI.updateUser(user).then(user => {
        dispatch(setCurrentUser(user.data))
    })
}

export const getUserByToken = () => (dispatch) => {
    UserAPI.getUser().then(user => {
        dispatch(setCurrentUser(user.data))
    })
}

export const authUserByToken = () => (dispatch) => {
    return UserAPI.getUser().then(user => {
        dispatch(loginUser(user.data))
    })
}

export const createUser = (name, login, email, password, then) => (dispatch) => {
    UserAPI.createUser(name, login, email, password).then(user => {
        dispatch(loginUser(user.data))
        then(user)
    }).catch(reason => {
        dispatch(addErrorNotification(reason.response.data.message))
    })
}