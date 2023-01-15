import {UserAPI} from "../../packages/api";
import {addUser} from "../reducers/users";
import {getImage} from "./image";

export const getUserById = (id) => (dispatch) => {
    return UserAPI.getUserById(id).then(user => {
        dispatch(addUser(user.data))
    })
}

export const getUsersById = (ids) => async (dispatch, getState) => {
    try {
        const users_id = getState().users.users.map(user => user._id)
        for (const id of ids) {
            if (users_id.includes(id)) continue
            const user = await UserAPI.getUserById(id)
            dispatch(getImage(user.data.images.avatar_image.small))
            dispatch(getImage(user.data.images.profile_image.small))
            dispatch(addUser(user.data))
        }
    } catch (err) {

    }
}