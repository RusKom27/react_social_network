import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export const useImage = (image_name, getImage) => {
    const image = useSelector(state => {
        return state.images.images[image_name]
    })

    useEffect(() => {
        if (!image) {
            getImage(image_name)
        }
    }, [image])

    return {
        ...image,
        src: image?.image ? `data:${image?.contentType};base64,${image?.image}` : null
    }
}