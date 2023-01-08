import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {appSlice, authSlice, profileSlice, imagesSlice, feedSlice, messagesSlice} from "./slices"

const rootReducer = combineReducers({
    app: appSlice,
    auth: authSlice,
    profile: profileSlice,
    images: imagesSlice,
    feed: feedSlice,
    messages: messagesSlice
})

export const store = configureStore({
    reducer: rootReducer
})

