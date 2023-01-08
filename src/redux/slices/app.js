import {createSlice} from "@reduxjs/toolkit";

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
        addNotification(state, action) {
            state.notifications.push({
                id: Date.now(),
                type: action.payload.type,
                message: action.payload.message
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
    addNotification,
    removeNotification
} = appSlice.actions