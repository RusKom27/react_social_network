import {PostAPI, UserAPI} from "../../packages/api";
import {deletePost, setInitialLoading, setPosts, setUser, updatePost} from "../slices/profile";
import {subscribeToProfilePostsChannel} from "./socket_subscriptions";

export const getProfilePosts = (user_login = "") => (dispatch) => {
    subscribeToProfilePostsChannel(dispatch, user_login)
    dispatch(setInitialLoading(true))
    PostAPI.getPosts(user_login).then(posts => {
        dispatch(setPosts(posts.data))
    })
}

export const getUser = (login) => (dispatch) => {
    UserAPI.getUser(login).then(user => {
        dispatch(setUser(user.data))
    })
}

export const subscribeUser = (login) => (dispatch) => {
    UserAPI.subscribeUser(login).then(user => {
        dispatch(setUser(user.data))
    })
}

export const updateUser = (new_user) => (dispatch) => {
    UserAPI.updateUser(new_user).then(user => {
        dispatch(setUser(user.data))
    })
}

export const createProfilePost = (postText, then) => () => {
    PostAPI.createPost(postText).then(post => {
        then(post)
    })
}

export const checkProfilePost = (post_id) => (dispatch) => {
    PostAPI.checkPost(post_id).then(post => {
        dispatch(updatePost(post.data))
    })
}

export const likeProfilePost = (post_id) => (dispatch) => {
    PostAPI.likePost(post_id).then(post => {
        dispatch(updatePost(post.data))
    })
}

export const removeProfilePost = (post_id) => (dispatch) => {
    PostAPI.removePost(post_id).then(post => {
        dispatch(deletePost(post.data))
    }).catch(reason => console.log(reason.message))
}



