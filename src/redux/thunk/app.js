import {UserAPI} from "../../packages/api";
import {loginUser} from "../reducers/auth";
import {config} from "../../packages/api/config";
import {subscribeToFeedPostsChannel, subscribeToMessageChannel} from "./socket_subscriptions";
import {getMessages} from "./messages";
import {initialize} from "../reducers/app";
import {subscribeToChannel} from "../../packages/ably";
import {addPost, updatePost} from "../reducers/feed";
import {addDialog, addMessage, updateMessage} from "../reducers/messages";

export const initializeApp = (token) => async (dispatch) => {
    config.token = token
    return await UserAPI.getUser().then(user => {
        subscribeToChannel(user.data._id, (message) => {
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
        // subscribeToMessageChannel(dispatch)
        // subscribeToFeedPostsChannel(dispatch, user.data.login)
        dispatch(initialize())
    })
}
