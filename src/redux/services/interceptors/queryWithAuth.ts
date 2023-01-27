import {BaseQueryFn, FetchArgs, FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {removeToken, setToken} from "../../reducers/auth";
import {baseQuery} from "./baseQuery";

export const queryWithAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
    > = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)

        const refreshResultData = refreshResult.data as {access_token: string, refresh_token: string, user_id: string}
        if (refreshResultData) {
            api.dispatch(setToken(refreshResultData.access_token))
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(removeToken())
        }
    }
    return result
}