import {createSlice} from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: {
        posts: null,
        popular_tags: null,
        actual_topics: null,
        isInitialLoading: true,
    },
    reducers: {
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
        setPopularTags(state, action) {
            state.popular_tags = action.payload
        },
        setActualTopics(state, action) {
            state.actual_topics = action.payload
        },
    }
})

export default feedSlice.reducer
export const {
    setInitialLoading,
    addPost,
    setPosts,
    updatePost,
    deletePost,
    setPopularTags,
    setActualTopics
} = feedSlice.actions