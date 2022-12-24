import {ACTION} from "../actionTypes";

const initialState = {
    dialogs: null
}

const messagesReducer = (state = initialState, action) => {
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
        case ACTION.MESSAGE.UPDATE_DIALOG:
            return {
                ...state,
                dialogs: state.dialogs.map(dialog => {
                    if (dialog._id === action.dialog._id)
                        return action.dialog
                    return dialog
                })
            }
        case ACTION.MESSAGE.ADD_DIALOG:
            console.log(action)
            return {
                ...state,
                dialogs: [
                    ...state.dialogs,
                    action.dialog
                ]
            }

        default:
            return state
    }
}

export {messagesReducer}