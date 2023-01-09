import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {appSlice, authSlice, profileSlice, imagesSlice, feedSlice, messagesSlice, searchSlice} from "./reducers"

const rootReducer = combineReducers({
    app: appSlice,
    auth: authSlice,
    profile: profileSlice,
    images: imagesSlice,
    feed: feedSlice,
    messages: messagesSlice,
    search: searchSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

