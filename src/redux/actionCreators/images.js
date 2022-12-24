import {ACTION} from "../actionTypes";

export const addImage = (image) => ({
    type: ACTION.IMAGE.ADD_IMAGE,
    image
})