import {ACTION} from "../actionTypes";

const initialState = {
    current_scroll_progress: 0,
    dialogs: [],
    messages: []
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_MESSAGE:
            if (!action.message.text && !action.message.image) return state
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.message
                ]
            }
        case ACTION.SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }
        case ACTION.SET_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs.map(dialog => {
                        return {
                            id: dialog._id,
                            members: dialog.members,
                            message: dialog.message
                        }
                    })
            }
        default:
            return state
    }
}

export {messageReducer}