import {ACTION} from "../../types/actionTypes";

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
                    [action.payload.name]: action.payload
                }
            }
        default:
            return state
    }
}