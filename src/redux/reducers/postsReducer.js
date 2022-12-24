import {ACTION} from "../actionTypes";

const initialState = {
    posts: null,
    isInitialLoading: true,
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.POST.SET_INITIAL_LOADING:
            return {
                ...state,
                isInitialLoading: action.isInitialLoading
            }
        case ACTION.POST.ADD_POST:

            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.post
                ]
            }
        case ACTION.POST.SET_POSTS:
            return {
                ...state,
                posts: action.posts,
                isInitialLoading: false,
            }
        case ACTION.POST.UPDATE_POST:
            return {
                ...state,
                posts: state.posts?.map(post => {
                    if (action.post._id === post._id)
                        return action.post
                    return post
                })
            }
        case ACTION.POST.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => action.post._id !== post._id)
            }
        default:
            return state
    }
}