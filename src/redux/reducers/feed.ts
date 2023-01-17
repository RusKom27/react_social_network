import {createSlice} from "@reduxjs/toolkit";
import IPost from "../../models/IPost";

interface State {
    posts: IPost[],
    popular_tags: string[],
    actual_topics: string[],
    isInitialLoading: boolean,
}

const initialState: State = {
    posts: [],
    popular_tags: [],
    actual_topics: [],
    isInitialLoading: true,
}

const feedSlice = createSlice({
    name: "feed",
    initialState,
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