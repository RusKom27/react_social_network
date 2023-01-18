import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {config} from "../packages/api/config";
import {IImage} from "../models";

export const imageApi = createApi({
    reducerPath: "imageAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.server_url}image`,
        prepareHeaders: headers => {
            headers.set('authorization', config.token || "")
            return headers
        }
    }),
    tagTypes: ['Image'],
    endpoints: (build) => ({
        fetchImage: build.query<IImage, string>({
            query: (image_name) => ({
                url: `/${image_name}`,
            }),
            providesTags: (result) => ['Image']
        }),
        // loadImage: build.mutation<{}, FormData>({
        //     query: (imageFormData) => ({
        //         url: `/upload`,
        //         method: 'POST',
        //         body: {
        //             formData: imageFormData
        //         },
        //         headers: {
        //             'Content-Type': "multipart/form-data"
        //         }
        //     }),
        //     invalidatesTags: ['Image']
        // }),
    })
})