import {ACTION} from "../actionTypes";

let initialState = {
    images: {}
}

export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.IMAGE.ADD_IMAGE:
            state.images[action.image.name] = action.image
            return state
        default:
            return state
    }
}