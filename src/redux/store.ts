import {combineReducers, configureStore} from "@reduxjs/toolkit";
import reducers from "./reducers"
import {serviceReducers, serviceMiddlewares} from "./services";

const rootReducer = combineReducers({
    ...reducers,
    ...serviceReducers
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(...serviceMiddlewares)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

