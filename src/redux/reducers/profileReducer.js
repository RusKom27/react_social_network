import {ACTION} from "../actions";

const initialState = {
    postInputText: '',
    posts: [
        {id: 0, username: "User1", text: "First post text", likes: 13, dislikes: 3},
        {id: 1, username: "User1", text: "Second post text", likes: 3, dislikes: 0},
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.UPDATE_POST_INPUT().type:
            return {...state, postInputText: action.post_text}
        case ACTION.ADD_POST().type:
            if (!state.postInputText) return state
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: state.posts.length - 1,
                        username: "User1",
                        text: state.postInputText,
                        likes: 0,
                        dislikes: 0,
                    }
                ],
                postInputText: ''
            }
        default:
            return state
    }
}

export {profileReducer}