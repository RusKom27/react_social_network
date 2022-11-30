import {ACTION} from "../actionTypes";

const initialState = {
    messageInputValue: '',
    dialogs: [{
        id: 0,
        member: "User2",
        messages: [
            {id: 0, username: "User1", text: "Hi"},
            {id: 1, username: "User1", text: "World"},
            {id: 2, username: "User2", text: "hi"},]
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
        default:
            return state
    }
}

export {messageReducer}