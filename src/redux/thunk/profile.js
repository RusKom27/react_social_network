import {PostAPI, UserAPI} from "../../packages/api";
import {CHANNEL, subscribeToChannel} from "../../packages/ably";
import {addPost, deletePost, setInitialLoading, setPosts, setUser, updatePost} from "../actionCreators/profile";

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

export const getProfilePosts = (user_login = "") => (dispatch) => {
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
        }
    })
    dispatch(setInitialLoading(true))
    PostAPI.getPosts(user_login).then(posts => {
        dispatch(setPosts(posts.data))
    })
}

export const createProfilePost = (postText) => () => {
    PostAPI.createPost(postText)
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



