import {PostAPI} from "../../packages/api/rest/post";
import {addPost, deletePost, setPosts, updatePost} from "../actions";
import {CHANNEL, subscribeToChannel} from "../../packages/ably";

export const getPosts = (user_login = "") => (dispatch) => {
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
    PostAPI.getPosts(user_login).then(posts => {
        dispatch(setPosts(posts.data))
    })
}

export const createPost = (postText) => (dispatch) => {
    PostAPI.createPost(postText).then(post => {})
}

export const likePost = (post_id) => (dispatch) => {
    PostAPI.likePost(post_id).then(post => {
        dispatch(updatePost(post.data))
    })
}

export const removePost = (post_id) => (dispatch) => {
    PostAPI.removePost(post_id).then(post => {
        dispatch(deletePost(post.data))
    }).catch(reason => console.log(reason.message))
}



