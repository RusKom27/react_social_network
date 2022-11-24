import {ACTION} from "../actions";

const initialState = {
    messageInputValue: '',
    dialogs: [{
        id: 0,
        member: "User2",
        messages: [
            {id: 0, username: "User1", text: "Hi"},
            {id: 1, username: "User1", text: "World"},
            {id: 2, username: "User2", text: "hi"},]
    }, {
        id: 1,
        member: "User3",
        messages: [
            {id: 0, username: "User3", text: "Hellow"},
            {id: 1, username: "User1", text: "ABOBUS"},
            {id: 2, username: "User3", text: "..."},
            {id: 3, username: "User1", text: "..."},]
    }, {
        id: 2,
        member: "User4",
        messages: [
            {id: 0, username: "User1", text: "Hi"},
            {id: 1, username: "User4", text: "Worldus"},
            {id: 2, username: "User1", text: "ASFDFSADFSAS"},]
    }, {
        id: 3, member: "User5", messages: [
            {id: 0, username: "User1", text: "Hi"},]
    },]
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.UPDATE_MESSAGE_INPUT().type:
            return {
                ...state, messageInputValue: action.message_text
            }
        case ACTION.ADD_MESSAGE().type:
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