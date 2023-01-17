import {createSlice} from "@reduxjs/toolkit";
import IPost from "../../models/IPost";
import IUser from "../../models/IUser";

interface State {
    isInitialLoading: boolean
    user: IUser[]
    posts: IPost[]
}

const initialState: State = {
    isInitialLoading: true,
    user: [],
    posts: [],
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
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