import {MessageAPI} from "../../packages/api";
import {CHANNEL, subscribeToChannel} from "../../packages/ably";
import {addDialog, addMessage, setMessages, updateDialog} from "../actionCreators/messages";
import {config} from "../../packages/api/config";

export const getMessages = () => (dispatch) => {
    subscribeToChannel(CHANNEL.MESSAGES, message => {
        const dialog = message.data
        if (!dialog.members_id.includes(config.token)) return
        switch (message.name) {
            case 'new_message':
                dispatch(updateDialog(dialog))
                break
            case 'new_dialog':
                dispatch(addDialog(dialog))
                break
            case 'check_message':
                dispatch(updateDialog(dialog))
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

export const checkMessage = (message_id) => () => {
    MessageAPI.checkMessage(message_id)
}