import {ACTION} from "../../types";

const initialState = {
    posts: null,
    popular_tags: null,
    isInitialLoading: true,
}

export const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.FEED.SET_INITIAL_LOADING:
            return {
                ...state,
                isInitialLoading: action.payload
            }
        case ACTION.FEED.ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.payload
                ]
            }
        case ACTION.FEED.SET_POSTS:
            return {
                ...state,
                posts: action.payload,
                isInitialLoading: false,
            }
        case ACTION.FEED.UPDATE_POST:
            return {
                ...state,
                posts: state.posts?.map(post => {
                    if (action.payload._id === post._id)
                        return action.payload
                    return post
                })
            }
        case ACTION.FEED.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => action.payload._id !== post._id)
            }
        case ACTION.FEED.SET_POPULAR_TAGS:
            return {
                ...state,
                popular_tags: action.payload
            }
        default:
            return state
    }
}