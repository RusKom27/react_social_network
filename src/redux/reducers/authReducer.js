import {ACTION} from "../actionTypes";

const initialState = {
    token: "user_token",
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.SET_TOKEN:
            return {
                ...state, token: action.token
            }
        default:
            return state
    }
}

export {authReducer}