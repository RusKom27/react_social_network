import {makeRequest} from "../makeRequest";

export const getAllPosts = () => {
    return makeRequest({
        url: 'api/post',
        headers: {authorization: false},
        method: 'GET',
    })
}

export const getPosts = (user_login) => {
    return makeRequest({
        url: `api/post/${user_login}`,
        headers: {authorization: true},
        method: 'GET',
    })
}

export const createPost = (text) => {
    return makeRequest({
        url: 'api/post',
        headers: {authorization: true},
        method: 'POST',
        data: {
            text
        }
    })
}

export const likePost = (post_id) => {
    return makeRequest({
        url: `api/post/like/${post_id}`,
        headers: {authorization: true},
        method: 'PUT',
    })
}

export const removePost = (post_id) => {
    return makeRequest({
        url: `api/post/${post_id}`,
        headers: {authorization: true},
        method: 'DELETE',
    })
}

