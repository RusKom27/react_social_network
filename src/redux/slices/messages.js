import {createSlice} from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: "messages",
    initialState: {
        dialogs: null
    },
    reducers: {
        addMessage(state, action) {
            state.dialogs.forEach(dialog => {
                if (dialog._id === action.payload.dialog_id)
                    dialog.messages.push(action.payload)
            })
        },
        updateMessage(state, action) {
            state.dialogs.forEach(dialog => {
                if (dialog._id === action.payload.dialog_id)
                    dialog.messages.forEach((message, i) => {
                        if (message._id === action.payload._id)
                            dialog.messages[i] = action.payload
                    })
            })
        },
        setMessages(state, action) {
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
        }
    }
})

export default messagesSlice.reducer
export const {addMessage, updateMessage, setMessages, addDialog, updateDialog} = messagesSlice.actions