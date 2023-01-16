import {PostAPI} from "../../packages/api";
import {
    deletePost,
    setActualTopics,
    setInitialLoading,
    setPopularTags,
    setPosts,
    updatePost
} from "../reducers/feed";
import {getUsersById} from "./users";

export const getFeedPosts = (user_login = "") => async (dispatch, getState) => {
    try {
        dispatch(setInitialLoading(true))
        const posts = await PostAPI.getPosts(user_login)
        dispatch(setPosts(posts.data))
    } catch (err) {

    }

}

export const likeFeedPost = (post_id) => (dispatch) => {
    PostAPI.likePost(post_id).then(post => {
        dispatch(updatePost(post.data))
    })
}

export const checkFeedPost = (post_id) => () => {
    PostAPI.checkPost(post_id)
}

export const getPopularTags = () => (dispatch) => {
    PostAPI.getPopularTags().then(tags => {
        dispatch(setPopularTags(tags.data))
    })
}

export const getActualTopics = () => (dispatch) => {
    PostAPI.getActualTopics().then(topics => {
        dispatch(setActualTopics(topics.data))
    })
}

export const removeFeedPost = (post_id) => (dispatch) => {
    PostAPI.removePost(post_id).then(post => {
        dispatch(deletePost(post.data))
    }).catch(reason => console.log(reason.message))
}




