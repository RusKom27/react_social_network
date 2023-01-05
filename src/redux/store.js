import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {authReducer, imagesReducer, appReducer, feedReducer, messagesReducer, profileReducer} from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {createLogger} from "redux-logger";

const logger = createLogger()

const reducers = combineReducers({
    messages: messagesReducer,
    app: appReducer,
    auth: authReducer,
    feed: feedReducer,
    profile: profileReducer,
    images: imagesReducer,
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, /*logger*/)))

export {store}