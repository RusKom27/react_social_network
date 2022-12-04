import {combineReducers, legacy_createStore as createStore} from "redux";
import {authReducer, feedReducer, menuReducer, messageReducer, profileReducer} from "./reducers";

const reducers = combineReducers({
    messages: messageReducer,
    profile: profileReducer,
    menu: menuReducer,
    auth: authReducer,
    feed: feedReducer,
})

let store = createStore(reducers)

export {store}