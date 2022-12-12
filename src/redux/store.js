import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {authReducer, menuReducer, messageReducer, postsReducer} from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
    messages: messageReducer,
    posts: postsReducer,
    menu: menuReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

export {store}