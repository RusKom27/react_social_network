import {PostAPI} from "../../packages/api/rest/post";
import {addPost, deletePost, setPosts, updatePost} from "../actions";

export const getPosts = (user_login = "") => (dispatch) => {
    PostAPI.getPosts(user_login).then(posts => {
        dispatch(setPosts(posts.data))
    })
}

export const createPost = (postText) => (dispatch) => {
    PostAPI.createPost(postText).then(post => {
        dispatch(addPost(post.data))
    })
}

export const likePost = (post_id) => (dispatch) => {
    PostAPI.likePost(post_id).then(post => {
        dispatch(updatePost(post.data))
    })
}

export const removePost = (post_id) => (dispatch) => {
    PostAPI.removePost(post_id).then(post => {
        dispatch(deletePost(post.data._id))
    }).catch(reason => console.log(reason.message))
}



