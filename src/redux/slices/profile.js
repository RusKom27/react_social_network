import {createSlice} from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        user: null,
        posts: null,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setInitialLoading(state, action) {
            state.isInitialLoading = action.payload
        },
        addPost(state, action) {
            state.posts.push(action.payload)
        },
        setPosts(state, action) {
            state.posts = action.payload
            state.isInitialLoading = false
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

export default profileSlice.reducer
export const {
    setUser,
    setInitialLoading,
    setPosts,
    addPost,
    updatePost,
    deletePost
} = profileSlice.actions