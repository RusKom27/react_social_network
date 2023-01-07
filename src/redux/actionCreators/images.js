import {ACTION} from "../../types";

export const addImage = (image) => ({
    type: ACTION.IMAGE.ADD_IMAGE,
    payload: image
})