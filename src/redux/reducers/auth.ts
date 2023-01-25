import {createSlice} from "@reduxjs/toolkit";
import {UserAPI} from "../../packages/api";
import IUser from "../../models/IUser";

interface State {
    current_user: IUser | null,
    token: string | null,
}

const initialState: State = {
    current_user: null,
    token: localStorage.getItem("token"),
}

const authSlice = createSlice({
    name: "auth",
    initialState,
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
            UserAPI.closeConnection()
            UserAPI.logout()
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