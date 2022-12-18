import {ACTION} from "../actionTypes";

const initialState = {
    dialogs: null
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.MESSAGE.ADD_MESSAGE:
            return {
                ...state,
                dialogs: state.dialogs?.map(dialog => {
                    if (dialog._id === action.message.dialog_id)
                        return {
                            ...dialog,
                            messages: [
                                ...dialog.messages,
                                action.message
                            ]
                        }
                    return dialog
                })
            }
        case ACTION.MESSAGE.SET_MESSAGES:
            return {
                ...state,
                dialogs: action.messages
            }
        default:
            return state
    }
}

export {messageReducer}