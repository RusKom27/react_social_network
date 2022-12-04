import {ACTION} from "../actionTypes";

const initialState = {
    posts: [
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: action.post._id,
                        user: action.post.user,
                        text: action.post.text,
                        likes: action.post.likes,
                    }
                ]
            }
        case ACTION.SET_POSTS:
            return {
                ...state,
                posts: action.posts.map(post => {
                    return {
                        id: post._id,
                        user: post.user,
                        text: post.text,
                        likes: post.likes
                    }
                })
            }
        case ACTION.UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (action.post._id === post.id)
                        post = {
                            id: action.post._id,
                            user: action.post.user,
                            text: action.post.text,
                            likes: action.post.likes
                        }
                    return post
                })

            }
        default:
            return state
    }
}

export {profileReducer}