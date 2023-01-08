import {UserAPI} from "../../packages/api";
import {loginUser} from "../slices/auth";
import {config} from "../../packages/api/config";
import {subscribeToFeedPostsChannel, subscribeToMessageChannel} from "./socket_subscriptions";
import {getMessages} from "./messages";
import {initialize} from "../slices/app";

export const initializeApp = (token) => async (dispatch) => {
    config.token = token
    return await UserAPI.getUser().then(user => {
        dispatch(loginUser(user.data))
        dispatch(getMessages())
        subscribeToMessageChannel(dispatch)
        subscribeToFeedPostsChannel(dispatch, user.data.login)
        dispatch(initialize())
    })
}
