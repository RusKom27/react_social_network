import React, {memo} from "react";
import {imageApi} from "../../../services";
import default_image_placeholder from "./../../../static/images/image-placeholder1.png"
import avatar_image_placeholder from "./../../../static/images/Profile_avatar_placeholder_large.png"

type PropsType = {
    image_name: string
    type?: "avatar" | undefined
}

export const Image = memo<PropsType>(({type,image_name}) => {
    const {data: image, isLoading, isError} = imageApi.useFetchImageQuery(image_name)

    if (isLoading || isError) return <img
        src={type === "avatar" ? avatar_image_placeholder : default_image_placeholder}
        alt={image_name}
    />
    return <img src={`data:${image?.contentType};base64,${image?.image}`} alt={image_name}/>
})