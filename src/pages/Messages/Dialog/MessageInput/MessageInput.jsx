import React from "react"
import styles from "./MessageInput.module.scss"
import {createRef} from "react";

function MessageInput(props) {
    const text_area = createRef();
    const addMessageHandle = event => {
        event.preventDefault()
        props.addMessage(props.id)
        text_area.current.focus()
    }
    return (
        <div className={styles.input_block}>
            <input onChange={event => props.updateMessageInput(event.target.value)}
                   type="text"
                   ref={text_area}
                   value={props.messageInputValue} />
            <input onClick={addMessageHandle} type="submit" value={"Send"}/>
        </div>

    )
}

export {MessageInput}