import {MessageList} from "./MessageList";

function MessageListContainer({store, dialog_id}) {
    let state = store.getState()
    const messages = () => {
        if (state.messages)
            return state.messages.dialogs.find(dialog => "" + dialog.id === dialog_id).messages
    }
    return (
        <MessageList messages={messages()}/>
    )
}

export {MessageListContainer}