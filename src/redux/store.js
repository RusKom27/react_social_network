import {combineReducers, legacy_createStore as createStore} from "redux";
import {menuReducer, messageReducer, profileReducer} from "./reducers";

const reducers = combineReducers({
    messages: messageReducer,
    profile: profileReducer,
    menu: menuReducer
})

let store = createStore(reducers)

export {store}