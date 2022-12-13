import {MessageAPI} from "../../packages/api/rest/message";
import {addMessage, setMessages} from "../actions";

export const getMessages = (dialog_id) => (dispatch) => {
    MessageAPI.getMessages(dialog_id).then(messages => {
        dispatch(setMessages(messages.data))
    })
}

export const createMessage = (dialog_id, messageText) => (dispatch) => {
    MessageAPI.createMessage(dialog_id, messageText).then(message => {
        dispatch(addMessage(message.data))
    })
}