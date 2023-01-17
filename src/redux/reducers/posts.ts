import {createSlice} from "@reduxjs/toolkit";
import IPost from "../../models/IPost";

interface State {
    isInitialLoading: true,
    posts: IPost[],
}

const initialState: State = {
    isInitialLoading: true,
    posts: [],
}


const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setInitialLoading(state, action) {
            state.isInitialLoading = action.payload
        },
        addPost(state, action) {
            let postIsNew = true
            state.posts.forEach((post, i) => {
                if (action.payload._id === post._id) {
                    state.posts[i] = action.payload
                    postIsNew = false
                }
            })
            if (postIsNew) state.posts.push(action.payload)
        },
        setPosts(state, action) {
            state.posts = action.payload
        },
        updatePost(state, action) {
            state.posts.forEach((post, i) => {
                if (action.payload._id === post._id)
                    state.posts[i] = action.payload
            })
        },
        deletePost(state, action) {
            state.posts = state.posts.filter(post => action.payload._id !== post._id)
        },
    }
})

export default postsSlice.reducer
export const {
    setInitialLoading,
    setPosts,
    addPost,
    updatePost,
    deletePost
} = postsSlice.actions