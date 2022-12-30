import {ACTION} from "../actionTypes";

let initialState = {
    images: {}
}

export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.IMAGE.ADD_IMAGE:
            return {
                ...state,
                images: {
                    ...state.images,
                    [action.image.name]: action.image
                }
            }
        default:
            return state
    }
}