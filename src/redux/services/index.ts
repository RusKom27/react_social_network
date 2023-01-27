import {postApi} from "./postApi";
import {userApi} from "./userApi";
import {imageApi} from "./imageApi";
import {authApi} from "./authApi";
import {searchApi} from "./searchApi";

const serviceReducers = {
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
}

const serviceMiddlewares = [
    authApi.middleware,
    postApi.middleware,
    userApi.middleware,
    imageApi.middleware,
    searchApi.middleware,
]

export {
    serviceReducers,
    serviceMiddlewares,
    authApi,
    postApi,
    userApi,
    imageApi,
    searchApi,
}