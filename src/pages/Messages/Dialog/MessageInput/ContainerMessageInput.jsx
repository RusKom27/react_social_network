import React from "react"
import {ACTION} from "../../../../redux/actions";
import {MessageInput} from "./MessageInput";

function ContainerMessageInput({store, dialog_id}) {
    const state = store.getState()
    const messageInputValue = state.messages.messageInputValue
    const addMessage = () => {
        store.dispatch(ACTION.ADD_MESSAGE(dialog_id))
    }

    const updateMessageInput = text => {
        store.dispatch(ACTION.UPDATE_MESSAGE_INPUT(text))
    }

    return <MessageInput
        addMessage={addMessage}
        updateMessageInput={updateMessageInput}
        messageInputValue={messageInputValue}
    />
}

export {ContainerMessageInput}