import {MessageAPI} from "../../packages/api/rest/message";
import {addMessage, setMessages} from "../actions";

export const getMessages = () => (dispatch) => {
    MessageAPI.getMessages().then(messages => {
        console.log(messages.data)
        dispatch(setMessages(messages.data))
    })
}

export const createMessage = (dialog_id, messageText) => (dispatch) => {
    MessageAPI.createMessage(dialog_id, messageText).then(message => {
        dispatch(addMessage(message.data))
    })
}

export const createDialog = (member_id, then) => (dispatch) => {
    MessageAPI.createDialog(member_id).then(dialog => {
        then(dialog)
    })
}