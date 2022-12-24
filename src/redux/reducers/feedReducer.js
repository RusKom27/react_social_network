import {ACTION} from "../actionTypes";

const initialState = {
    posts: null,
    isInitialLoading: true,
}

export const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.FEED.SET_INITIAL_LOADING:
            return {
                ...state,
                isInitialLoading: action.isInitialLoading
            }
        case ACTION.FEED.ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.post
                ]
            }
        case ACTION.FEED.SET_POSTS:
            return {
                ...state,
                posts: action.posts,
                isInitialLoading: false,
            }
        case ACTION.FEED.UPDATE_POST:
            return {
                ...state,
                posts: state.posts?.map(post => {
                    if (action.post._id === post._id)
                        return action.post
                    return post
                })
            }
        case ACTION.FEED.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => action.post._id !== post._id)
            }
        default:
            return state
    }
}