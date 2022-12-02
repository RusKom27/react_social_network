import {combineReducers, legacy_createStore as createStore} from "redux";
import {authReducer, menuReducer, messageReducer, profileReducer} from "./reducers";

const reducers = combineReducers({
    messages: messageReducer,
    profile: profileReducer,
    menu: menuReducer,
    auth: authReducer,
})

let store = createStore(reducers)

export {store}