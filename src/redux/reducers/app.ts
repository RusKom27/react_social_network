import {createSlice} from "@reduxjs/toolkit";
import {NOTIFICATION} from "../../types";

interface Notification {
    id: string
    type: string
    message: string
}

interface State {
    notifications: Notification[]
    isMenuTabOpened: boolean
    isInitialized: boolean
}

const initialState: State = {
    notifications: [],
    isMenuTabOpened: true,
    isInitialized: false,
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        initialize(state, action) {
            state.isInitialized = true
        },
        toggleMenuTab(state, action) {
            state.isMenuTabOpened = action.payload === undefined ? !state.isMenuTabOpened : action.payload
        },
        addInfoNotification(state, action) {
            state.notifications.push({
                id: Date.now().toString(),
                type: NOTIFICATION.INFO,
                message: action.payload
            })
        },
        addErrorNotification(state, action) {
            state.notifications.push({
                id: Date.now().toString(),
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