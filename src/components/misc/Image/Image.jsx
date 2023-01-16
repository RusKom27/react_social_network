import {memo} from "react";
import {useSelector} from "react-redux";
import {useQuery} from "@tanstack/react-query";
import {ImageAPI, UserAPI} from "../../../packages/api";

export const Image = memo(({image_name}) => {
    const { isLoading, error, data: image } = useQuery({
        queryKey: ['images', image_name],
        queryFn: () =>
            ImageAPI.getImage(image_name).then(
                (res) => res.data,
            ),
    })

    if (isLoading) return <img/>
    return <img src={`data:${image?.contentType};base64,${image?.image}`} alt=""/>
})