import {UserAPI} from "../../packages/api";
import {loginUser} from "../reducers/auth";
import {config} from "../../packages/api/config";
import {subscribeToFeedPostsChannel, subscribeToMessageChannel} from "./socket_subscriptions";
import {getMessages} from "./messages";
import {initialize} from "../reducers/app";
import {subscribeToChannel} from "../../packages/ably";
import {updatePost} from "../reducers/feed";

export const initializeApp = (token) => async (dispatch) => {
    config.token = token
    return await UserAPI.getUser().then(user => {
        subscribeToChannel(user.data._id, (message) => {
            console.log(message)
            switch (message.name) {
                case 'post_like':
                    console.log("like")
                    dispatch(updatePost(message.data))
                    break
            }
        })
        dispatch(loginUser(user.data))
        dispatch(getMessages())
        subscribeToMessageChannel(dispatch)
        subscribeToFeedPostsChannel(dispatch, user.data.login)
        dispatch(initialize())
    })
}
