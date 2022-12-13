import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {authReducer, menuReducer, messageReducer, postsReducer, profileReducer} from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
    messages: messageReducer,
    posts: postsReducer,
    menu: menuReducer,
    auth: authReducer,
    profile: profileReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

export {store}