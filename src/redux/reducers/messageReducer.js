import {ACTION} from "../actionTypes";

const initialState = {
    dialogs: [{
        id: 0,
        members: [],
        messages: []
    }]
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.UPDATE_MESSAGE_INPUT:
            return {
                ...state, messageInputValue: action.message_text
            }

        case ACTION.ADD_MESSAGE:
            if (!state.messageInputValue) return state
            return {
                ...state,
                dialogs: state.dialogs.map(dialog => {
                    if (dialog.id.toString() !== action.dialog_id) return dialog

                    return {
                        ...dialog,
                        messages: [
                            ...dialog.messages,
                            {
                                id: state.dialogs[action.dialog_id].messages.length,
                                username: "User1",
                                text: state.messageInputValue,
                            }
                        ]}
                }),
                messageInputValue: ''
            }
        case ACTION.SET_MESSAGES:
            console.log(action)
            return {
                dialogs: [
                    ...action.dialogs.map(dialog => {
                        return {
                            id: dialog._id,
                            members: dialog.members,
                            messages: dialog.messages
                        }
                    })
                ]
            }
        default:
            return state
    }
}

export {messageReducer}