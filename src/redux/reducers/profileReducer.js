import {ACTION} from "../actionTypes";

let initialState = {
    user: null,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.PROFILE.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case ACTION.PROFILE.SET_INITIAL_LOADING:
            return {
                ...state,
                isInitialLoading: action.isInitialLoading
            }
        case ACTION.PROFILE.ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.post
                ]
            }
        case ACTION.PROFILE.SET_POSTS:
            return {
                ...state,
                posts: action.posts,
                isInitialLoading: false,
            }
        case ACTION.PROFILE.UPDATE_POST:
            return {
                ...state,
                posts: state.posts?.map(post => {
                    if (action.post._id === post._id)
                        return action.post
                    return post
                })
            }
        case ACTION.PROFILE.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => action.post._id !== post._id)
            }
        default:
            return state
    }
}