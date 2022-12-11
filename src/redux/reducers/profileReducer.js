import {ACTION} from "../actionTypes";

const initialState = {
    posts: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.post
                ]
            }
        case ACTION.SET_POSTS:
            return {
                ...state,
                posts: action.posts

            }
        case ACTION.UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (action.post._id === post.id)
                        post = action.post
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

export {profileReducer}