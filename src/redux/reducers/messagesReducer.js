import {ACTION} from "../../types/actionTypes";

const initialState = {
    dialogs: null
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.MESSAGE.ADD_MESSAGE:
            return {
                ...state,
                dialogs: state.dialogs?.map(dialog => {
                    if (dialog._id === action.payload.dialog_id)
                        return {
                            ...dialog,
                            messages: [
                                ...dialog.messages,
                                action.payload
                            ]
                        }
                    return dialog
                })
            }
        case ACTION.MESSAGE.UPDATE_MESSAGE:
            return {
                ...state,
                dialogs: state.dialogs?.map(dialog => {
                    if (dialog._id === action.payload.dialog_id)
                        return {
                            ...dialog,
                            messages: dialog.messages.map(message => {
                                if (message._id === action.payload._id)
                                    return action.payload
                                return message
                            })
                        }
                    return dialog
                })
            }
        case ACTION.MESSAGE.SET_MESSAGES:
            return {
                ...state,
                dialogs: action.payload
            }
        case ACTION.MESSAGE.UPDATE_DIALOG:
            return {
                ...state,
                dialogs: state.dialogs.map(dialog => {
                    if (dialog._id === action.payload._id)
                        return action.payload
                    return dialog
                })
            }
        case ACTION.MESSAGE.ADD_DIALOG:
            return {
                ...state,
                dialogs: [
                    ...state.dialogs,
                    action.payload
                ]
            }

        default:
            return state
    }
}

export {messagesReducer}