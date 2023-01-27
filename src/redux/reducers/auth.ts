import {createSlice} from "@reduxjs/toolkit";

interface State {
    token: string | null,
}

const initialState: State = {
    token: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken(state, action) {
            if (action.payload.access_token) {
                localStorage.setItem("token", `Bearer ${action.payload.access_token}`)
                state.token = action.payload.access_token
            }
        },
        removeToken(state) {
            // UserAPI.closeConnection()
            localStorage.clear()
            console.log(localStorage)
            state.token = null
        },
    }
})

export default authSlice.reducer
export const {
    setToken,
    removeToken
} = authSlice.actions