import {ACTION} from "../../types/actionTypes";

export const addImage = (image) => ({
    type: ACTION.IMAGE.ADD_IMAGE,
    payload: image
})