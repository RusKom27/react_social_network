import {useEffect} from "react";

export const useUpdateWithDelay = (userLogin = '', getData, delay) => {
    let isUpdate = true

    const updatePosts = () => {
        if (isUpdate) {
            getData(userLogin)
            setTimeout(updatePosts, delay)
        }
    }

    useEffect(() => {
        updatePosts()
        return () => {isUpdate = false}
    })
}