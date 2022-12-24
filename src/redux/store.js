import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {authReducer, imagesReducer, menuReducer, feedReducer, messagesReducer, profileReducer} from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
    messages: messagesReducer,
    menu: menuReducer,
    auth: authReducer,
    feed: feedReducer,
    profile: profileReducer,
    images: imagesReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

export {store}