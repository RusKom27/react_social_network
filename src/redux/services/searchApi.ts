import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {config} from "../../packages/api/config";
import {ISearchResult} from "../../models";

export const searchApi = createApi({
    reducerPath: "searchAPI",
    baseQuery: fetchBaseQuery({baseUrl: `${config.server_url}search`}),
    tagTypes: ['Results'],
    endpoints: (build) => ({
        fetchSearchByUserInput: build.query<ISearchResult, string>({
            query: (user_input) => ({
                url: `/?user_input=${user_input.trim()}`,
            }),
            providesTags: (result) => ['Results']
        }),
    })
})