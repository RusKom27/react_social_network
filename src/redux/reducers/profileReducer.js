import {ACTION} from "../../types/actionTypes";

let initialState = {
    user: null,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.PROFILE.SET_USER:
            return {
                ...state,
                user: action.payload
    }
        case ACTION.PROFILE.SET_INITIAL_LOADING:
            return {
                ...state,
                isInitialLoading: action.payload
            }
        case ACTION.PROFILE.ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.payload
                ]
            }
        case ACTION.PROFILE.SET_POSTS:
            return {
                ...state,
                posts: action.payload,
                isInitialLoading: false,
            }
        case ACTION.PROFILE.UPDATE_POST:
            return {
                ...state,
                posts: state.posts?.map(post => {
                    if (action.payload._id === post._id)
                        return action.payload
                    return post
                })
            }
        case ACTION.PROFILE.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => action.payload._id !== post._id)
            }
        default:
            return state
    }
}