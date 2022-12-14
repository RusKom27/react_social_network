import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        current_user: null,
        token: localStorage.getItem("token"),
    },
    reducers: {
        loginUser(state, action) {
            localStorage.setItem("token", action.payload._id)
            state.token = action.payload._id
            state.current_user = action.payload
        },
        setCurrentUser(state, action) {
            state.current_user = action.payload
        },
        logoutUser(state, action) {
            localStorage.clear()
            state.token = null
            state.current_user = null
        },
    }
})

export default authSlice.reducer
export const {
    loginUser,
    setCurrentUser,
    logoutUser,
} = authSlice.actions