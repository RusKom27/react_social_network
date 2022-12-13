import {ACTION} from "../actionTypes";

let initialState = {
    user: null,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.USER.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}