import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {appSlice, authSlice, profileSlice, imagesSlice,
    feedSlice, messagesSlice, searchSlice, usersSlice} from "./reducers"
import {postApi} from "../services";

const rootReducer = combineReducers({
    app: appSlice,
    auth: authSlice,
    users: usersSlice,
    profile: profileSlice,
    images: imagesSlice,
    feed: feedSlice,
    messages: messagesSlice,
    search: searchSlice,
    [postApi.reducerPath]: postApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            postApi.middleware
        )

})

