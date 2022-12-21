import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {authReducer, imagesReducer, menuReducer, messageReducer, postsReducer, profileReducer} from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
    messages: messageReducer,
    posts: postsReducer,
    menu: menuReducer,
    auth: authReducer,
    profile: profileReducer,
    images: imagesReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

export {store}