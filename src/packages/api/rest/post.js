import {makeRequest} from "../makeRequest";

export const PostAPI = {
    getAllPosts() {
        return makeRequest({
            url: 'api/post',
            headers: {authorization: false},
            method: 'GET',
        })
    },

    getPosts(user_login) {
        return makeRequest({
            url: `api/post/${user_login}`,
            headers: {authorization: true},
            method: 'GET',
        })
    },

    createPost(text) {
        return makeRequest({
            url: 'api/post',
            headers: {authorization: true},
            method: 'POST',
            data: {
                text
            }
        })
    },

    likePost(post_id) {
        return makeRequest({
            url: `api/post/like/${post_id}`,
            headers: {authorization: true},
            method: 'PUT',
        })
    },

    removePost(post_id) {
        return makeRequest({
            url: `api/post/${post_id}`,
            headers: {authorization: true},
            method: 'DELETE',
        })
    }
}

