import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {config} from "../packages/api/config";
import {IImage} from "../models";

export const imageApi = createApi({
    reducerPath: "imageAPI",
    baseQuery: fetchBaseQuery({baseUrl: `${config.server_url}image`}),
    tagTypes: ['Image'],
    endpoints: (build) => ({
        fetchImage: build.query<IImage, string>({
            query: (image_name) => ({
                url: `/${image_name}`,
            }),
            providesTags: (result) => ['Image']
        }),
        loadImage: build.mutation<IImage, FormData>({
            query: (imageFormData) => ({
                url: `/create`,
                method: 'POST',
                body: {
                    formData: imageFormData
                },
                headers: {
                    'authorization':  config.token || "",
                    'Content-Type': 'multipart/form-data'
                }
            }),
            invalidatesTags: ['Image']
        }),
    })
})