import {CHANNEL, subscribeToChannel} from "../../../packages/ably";
import {addPost, deletePost, updatePost} from "../../reducers/feed";

export const subscribeToFeedPostsChannel = (dispatch, user_login) => {
    subscribeToChannel(CHANNEL.POSTS, message => {
        if (!(user_login === "" || message.data.user.login === user_login)) return
        switch (message.name) {
            case 'new_post':
                dispatch(addPost(message.data))
                break
            default:
                console.log(message)
        }
    })
}