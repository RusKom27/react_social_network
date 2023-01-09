import {MessageAPI} from "../../packages/api";
import {CHANNEL, subscribeToChannel} from "../../packages/ably";
import {addDialog, addMessage, setMessages, updateMessage} from "../reducers/messages";
import {config} from "../../packages/api/config";

export const getMessages = () => (dispatch) => {
    MessageAPI.getMessages().then(messages => {
        dispatch(setMessages(messages.data))
    })
}

export const createMessage = (dialog_id, messageText, then=()=>{}) => (dispatch) => {
    MessageAPI.createMessage(dialog_id, messageText).then(message => {
        then(message)
    })
}

export const createDialog = (member_id, then=()=>{}) => () => {
    MessageAPI.createDialog(member_id).then(dialog => {
        then(dialog)
    })
}

export const checkMessage = (message_id) => () => {
    MessageAPI.checkMessage(message_id)
}