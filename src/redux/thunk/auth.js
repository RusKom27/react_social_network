import {UserAPI} from "../../packages/api";
import {loginUser, setCurrentUser} from "../reducers/auth";
import {addInfoNotification, addErrorNotification} from "../reducers/app";


export const authUser = (email, password, then) => async (dispatch) => {
    await UserAPI.authUser(email, password).then(user => {
        dispatch(loginUser(user.data))
        then(user)
    }).catch(reason => {
        dispatch(addErrorNotification(reason.response.data.message))
    })
}

export const updateCurrentUser = (user) => async (dispatch) => {
    UserAPI.updateUser(user).then(user => {
        dispatch(setCurrentUser(user.data))
        dispatch(addInfoNotification("Account was changed!"))
    })
}

export const updateUserAvatarImage = (current_user, image_name) => async (dispatch) => {
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
        dispatch(addInfoNotification("Avatar image was changed!"))
        dispatch(setCurrentUser(user.data))
    })
}

export const updateUserProfileImage = (current_user, image_name) => async (dispatch) => {
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
        dispatch(addInfoNotification("Profile image was changed!"))
        dispatch(setCurrentUser(user.data))
    })
}

export const getUserByToken = () => async (dispatch) => {
    UserAPI.getUser().then(user => {
        dispatch(setCurrentUser(user.data))
    })
}

export const authUserByToken = () => async (dispatch) => {
    return UserAPI.getUser().then(user => {
        dispatch(loginUser(user.data))
    })
}

export const createUser = (name, login, email, password, then) => async (dispatch) => {
    UserAPI.createUser(name, login, email, password).then(user => {
        dispatch(addInfoNotification("Account was created!"))
        dispatch(loginUser(user.data))
        then(user)
    }).catch(reason => {
        dispatch(addErrorNotification(reason.response.data.message))
    })
}