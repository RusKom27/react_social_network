import {combineReducers, legacy_createStore as createStore} from "redux";
import {messageReducer, profileReducer} from "./reducers";

const reducers = combineReducers({
    messages: messageReducer,
    profile: profileReducer,
})

let store = createStore(reducers)

export {store}