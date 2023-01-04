import {UserAPI} from "../../packages/api";
import {loginUser} from "../actionCreators/auth";
import {config} from "../../packages/api/config";
import {subscribeToFeedPostsChannel, subscribeToMessageChannel} from "./socket_subscriptions";
import {getMessages} from "./messages";
import {initialize} from "../actionCreators/app";

export const initializeApp = (token) => (dispatch) => {
    config.token = token
    return UserAPI.getUser().then(user => {
        dispatch(loginUser(user.data))
        dispatch(getMessages())
        subscribeToMessageChannel(dispatch)
        subscribeToFeedPostsChannel(dispatch, user.data.login)
        dispatch(initialize())
    })
}
