import {makeRequest} from "../makeRequest";

export const PostAPI = {
    getPosts(user_login) {
        return makeRequest({
            url: `post/${user_login}`,
            headers: {authorization: false},
            method: 'GET',
        })
    },

    createPost(text) {
        return makeRequest({
            url: 'post',
            headers: {authorization: true},
            method: 'POST',
            data: {
                text
            }
        })
    },

    likePost(post_id) {
        return makeRequest({
            url: `post/like/${post_id}`,
            headers: {authorization: true},
            method: 'PUT',
        })
    },

    checkPost(post_id) {
        return makeRequest({
            url: `check/${post_id}`,
            headers: {authorization: true},
            method: 'PUT',
        })
    },

    removePost(post_id) {
        return makeRequest({
            url: `post/${post_id}`,
            headers: {authorization: true},
            method: 'DELETE',
        })
    },

    getPopularTags() {
        return makeRequest({
            url: `post/popular_tags`,
            headers: {authorization: true},
            method: 'GET',
        })
    },

    getActualTopics() {
        return makeRequest({
            url: `post/actual_topics`,
            headers: {authorization: true},
            method: 'GET',
        })
    }
}

