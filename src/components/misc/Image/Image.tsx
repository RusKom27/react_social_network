import React, {memo} from "react";
import {imageApi} from "../../../services";

type PropsType = {
    image_name: string
}

export const Image = memo<PropsType>(({image_name}) => {
    const {data: image, isLoading, isError} = imageApi.useFetchImageQuery(image_name)

    if (isLoading || isError) return <img/>
    return <img src={`data:${image?.contentType};base64,${image?.image}`} alt=""/>
})