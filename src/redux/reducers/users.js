import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        isInitialLoading: true,
        users: [],
    },
    reducers: {
        setUsers(state, action) {
            state.user = action.payload
        },
        addUser(state, action) {
            let userIsNew = true
            state.users.forEach((user, i) => {
                if (action.payload._id === user._id) {
                    state.users[i] = action.payload
                    userIsNew = false
                }
            })
            if (userIsNew) state.users.push(action.payload)
        },
        setInitialLoading(state, action) {
            state.isInitialLoading = action.payload
        },
        updateUser(state, action) {
            state.users.forEach((user, i) => {
                if (action.payload._id === user._id)
                    state.users[i] = action.payload
            })
        },
    }
})

export default usersSlice.reducer
export const {
    setInitialLoading,
    setUsers,
    addUser,
    updateUser
} = usersSlice.actions