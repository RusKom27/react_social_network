import React from "react"
import styles from "./MessageInput.module.scss"
import {createRef} from "react";

function MessageInput({addMessage, updateMessageInput, messageInputValue}) {
    const text_area = createRef();
    const addMessageHandle = event => {
        event.preventDefault()
        addMessage()
        text_area.current.focus()
    }
    return (
        <form className={styles.input_block}>
            <input onChange={event => updateMessageInput(event.target.value)}
                   type="text"
                   ref={text_area}
                   value={messageInputValue} />
            <input onClick={addMessageHandle}
                   name={"messageInput"}
                   type="submit"
                   value={"Send"}/>
        </form>

    )
}

export {MessageInput}