import {createSlice} from "@reduxjs/toolkit";
import {NOTIFICATION} from "../../types";

const appSlice = createSlice({
    name: "app",
    initialState: {
        notifications: [],
        isMenuTabOpened: true,
        isInitialized: false,
    },
    reducers: {
        initialize(state, action) {
            state.isInitialized = true
        },
        toggleMenuTab(state, action) {
            state.isMenuTabOpened = action.payload === undefined ? !state.isMenuTabOpened : action.payload
        },
        addInfoNotification(state, action) {
            state.notifications.push({
                id: Date.now(),
                type: NOTIFICATION.INFO,
                message: action.payload
            })
        },
        addErrorNotification(state, action) {
            state.notifications.push({
                id: Date.now(),
                type: NOTIFICATION.ERROR,
                message: action.payload
            })
        },
        removeNotification(state, action) {
            state.notifications = state.notifications
                .filter(notification => notification.id !== action.payload)
        },
    }
})

export default appSlice.reducer
export const {
    initialize,
    toggleMenuTab,
    addInfoNotification,
    addErrorNotification,
    removeNotification
} = appSlice.actions