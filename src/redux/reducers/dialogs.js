import {createSlice} from "@reduxjs/toolkit";

const dialogsSlice = createSlice({
    name: "dialogs",
    initialState: {
        dialogs: null
    },
    reducers: {
        setDialogs(state, action) {
            state.dialogs = action.payload
        },
        updateDialog(state, action) {
            state.dialogs.forEach((dialog, i) => {
                if (dialog._id === action.payload._id)
                    state.dialogs[i] = action.payload
            })
        },
        addDialog(state, action) {
            state.dialogs.push(action.payload)
        },
        deleteDialog(state, action) {
            state.dialogs = state.dialogs.filter(dialog => action.payload._id !== dialog._id)
        }
    }
})

export default dialogsSlice.reducer
export const {
    setDialogs,
    addDialog,
    updateDialog,
    deleteDialog
} = dialogsSlice.actions