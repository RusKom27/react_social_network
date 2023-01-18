import {UserAPI} from "../../packages/api";
import {loginUser, setCurrentUser} from "../reducers/auth";
import {addInfoNotification, addErrorNotification} from "../reducers/app";
import {AppDispatch} from "../store";
import IUser from "../../models/IUser";


export const authUser = (email: string, password: string, then: (user: any) => void) => (dispatch: AppDispatch) => {
    UserAPI.authUser(email, password).then(user => {
        dispatch(loginUser(user.data))
        then(user)
    }).catch(reason => {
        dispatch(addErrorNotification(reason.response.data.message))
    })
}

export const updateCurrentUser = (user: any, then: (user: any) => void) => (dispatch: AppDispatch) => {
    UserAPI.updateUser(user).then(user => {
        dispatch(setCurrentUser(user.data))
        dispatch(addInfoNotification("Account was changed!"))
        then(user)
    })
}

export const updateUserAvatarImage = (current_user: IUser, image_name: string) => (dispatch: AppDispatch) => {
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

export const updateUserProfileImage = (current_user: IUser, image_name: string) => (dispatch: AppDispatch) => {
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

export const getUserByToken = () => (dispatch: AppDispatch) => {
    UserAPI.getUser().then(user => {
        dispatch(setCurrentUser(user.data))
    })
}

export const createUser = (
    name: string,
    login: string,
    email: string,
    password: string,
    then: (user: any) => void
) => (dispatch: AppDispatch) => {
    UserAPI.createUser(name, login, email, password).then(user => {
        dispatch(addInfoNotification("Account was created!"))
        dispatch(loginUser(user.data))
        then(user)
    }).catch(reason => {
        dispatch(addErrorNotification(reason.response.data.message))
    })
}