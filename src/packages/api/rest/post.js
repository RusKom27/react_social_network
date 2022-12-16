import {makeRequest} from "../makeRequest";

export const PostAPI = {
    getPosts(user_login = '') {
        return makeRequest({
            url: `api/post/${user_login}`,
            headers: {authorization: false},
            method: 'GET',
        })
    },

    checkNewPosts() {
        return makeRequest({
            url: `api/post/check_updates`,
            headers: {authorization: false},
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

