import {createSlice} from "@reduxjs/toolkit";
import IUser from "../../models/IUser";

interface State {
    isInitialLoading: boolean,
    users: IUser[],
}

const initialState: State = {
    isInitialLoading: true,
    users: [],
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload
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