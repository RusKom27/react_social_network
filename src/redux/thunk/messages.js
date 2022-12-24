import {MessageAPI} from "../../packages/api";
import {CHANNEL, subscribeToChannel} from "../../packages/ably";
import {addDialog, addMessage, setMessages, updateDialog} from "../actionCreators/messages";

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

export const createDialog = (member_id, then) => () => {
    MessageAPI.createDialog(member_id).then(dialog => {
        then(dialog)
    })
}