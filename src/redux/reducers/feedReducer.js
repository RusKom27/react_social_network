import {ACTION} from "../actionTypes";

const initialState = {
    posts: [],
}

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.SET_FEED_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case ACTION.UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (action.post._id === post.id)
                        post = {...action.post}
                    return post
                })
            }
        case ACTION.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => {
                    if (action.post_id !== post.id) return post
                })
            }
        default:
            return state
    }
}

export {feedReducer}