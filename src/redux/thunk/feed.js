import {PostAPI} from "../../packages/api";
import {deletePost, setInitialLoading, setPosts, updatePost} from "../actionCreators/feed";

export const getFeedPosts = (user_login = "") => (dispatch) => {
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



