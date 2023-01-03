import {UserAPI} from "../../packages/api";
import {loginUser} from "../actionCreators/auth";
import {CHANNEL, subscribeToChannel} from "../../packages/ably";
import {addDialog, addMessage, updateMessage} from "../actionCreators/messages";
import {config} from "../../packages/api/config";
import {subscribeToFeedPostsChannel, subscribeToMessageChannel} from "./socket_subscriptions";
import {authUserByToken} from "./auth";
import {getMessages} from "./messages";
import {useEffect} from "react";
import {useSelector} from "react-redux";


export const initializeApp = (token) => (dispatch) => {
    config.token = token
    return UserAPI.getUser().then(user => {
        dispatch(loginUser(user.data))
        dispatch(getMessages())
        subscribeToMessageChannel(dispatch)
        subscribeToFeedPostsChannel(dispatch, user.data.login)
    })
}
