import {PostAPI} from "../../packages/api";
import {CHANNEL, subscribeToChannel} from "../../packages/ably";
import {addPost, deletePost, setInitialLoading, setPosts, updatePost} from "../actionCreators/feed";

export const getFeedPosts = (user_login = "") => (dispatch) => {
    subscribeToChannel(CHANNEL.POSTS, message => {
        if (!(user_login === "" || message.data.user.login === user_login)) return
        switch (message.name) {
            case 'new_post':
                dispatch(addPost(message.data))
                break
            case 'post_like':
                dispatch(updatePost(message.data))
                break
            case 'delete_post':
                dispatch(deletePost(message.data))
                break
            case 'check_post':
                dispatch(updatePost(message.data))
                break
            default:
                console.log(message)
        }
    })
    dispatch(setInitialLoading(true))
    PostAPI.getPosts(user_login).then(posts => {
        dispatch(setPosts(posts.data))
    })
}

export const createFeedPost = (postText) => () => {
    PostAPI.createPost(postText)
}

export const likeFeedPost = (post_id) => (dispatch) => {
    PostAPI.likePost(post_id).then(post => {
        dispatch(updatePost(post.data))
    })
}

export const checkFeedPost = (post_id) => () => {
    PostAPI.checkPost(post_id)
}

export const removeFeedPost = (post_id) => (dispatch) => {
    PostAPI.removePost(post_id).then(post => {
        dispatch(deletePost(post.data))
    }).catch(reason => console.log(reason.message))
}



