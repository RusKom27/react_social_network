import React from "react"
import styles from "./MessageInput.module.scss"
import {createRef} from "react";
import {ReactComponent as SendSVG} from "../../../../images/send.svg";

function MessageInput({addMessage, updateMessageInput, messageInputValue, dialog_id}) {
    const text_area = createRef();
    const addMessageHandle = event => {
        event.preventDefault()
        addMessage(dialog_id)
        text_area.current.focus()
    }
    return (
        <form className={styles.input_block}>
            <input onChange={event => updateMessageInput(event.target.value)}
                   type="text"
                   ref={text_area}
                   value={messageInputValue} />
            <button onClick={addMessageHandle}
                   name={"messageInput"}
                    type="submit">Send<SendSVG/></button>
        </form>

    )
}

export {MessageInput}