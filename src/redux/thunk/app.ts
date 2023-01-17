import {UserAPI} from "../../packages/api";
import {loginUser, logoutUser} from "../reducers/auth";
import {config} from "../../packages/api/config";
import {getMessages} from "./messages";
import {initialize} from "../reducers/app";
import {subscribeToChannel} from "../../packages/ably";
import {addPost, updatePost} from "../reducers/feed";
import {addDialog, addMessage, updateMessage} from "../reducers/messages";
import {AppDispatch} from "../store";
import Ably from "ably/callbacks";

const onCloseConnection = () => UserAPI.closeConnection()

export const initializeApp = (token: string) => async (dispatch: AppDispatch) => {
    config.token = token

    return await UserAPI.getUserById(token).then(user => {
        subscribeToChannel(user.data._id, (message: Ably.Types.Message) => {
            switch (message.name) {
                case 'post_like':
                    dispatch(updatePost(message.data))
                    break
                case 'new_post':
                    dispatch(addPost(message.data))
                    break
                case 'new_message':
                    dispatch(addMessage(message.data))
                    break
                case 'new_dialog':
                    dispatch(addDialog(message.data))
                    break
                case 'check_message':
                    dispatch(updateMessage(message.data))
                    break
            }
        })
        dispatch(loginUser(user.data))
        dispatch(getMessages())
        window.removeEventListener('unload', onCloseConnection)
        window.addEventListener('unload', onCloseConnection)
        dispatch(initialize(""))
    }).catch(reason => {
        dispatch(logoutUser(""))
    })
}
