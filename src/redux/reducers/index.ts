import appSlice from "./app"
import authSlice from "./auth"
import feedSlice from "./feed"
import imagesSlice from "./images"
import messagesSlice from "./messages"
import profileSlice from "./profile"
import searchSlice from "./search"
import usersSlice from "./users"

export default {
    app: appSlice,
    auth: authSlice,
    users: usersSlice,
    profile: profileSlice,
    images: imagesSlice,
    feed: feedSlice,
    messages: messagesSlice,
    search: searchSlice,
}