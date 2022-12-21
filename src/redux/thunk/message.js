import {MessageAPI} from "../../packages/api/rest/message";
import {addDialog, addMessage, setMessages, updateDialog} from "../actions";
import {CHANNEL, subscribeToChannel} from "../../packages/ably";

export const getMessages = () => (dispatch) => {
    subscribeToChannel(CHANNEL.MESSAGES, message => {
        switch (message.name) {
            case 'new_message':
                dispatch(updateDialog(message.data))
                break
            case 'new_dialog':
                dispatch(addDialog(message.data))
                break
        }
    })

    MessageAPI.getMessages().then(messages => {
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