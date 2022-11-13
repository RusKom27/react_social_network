import React from "react"
import styles from "./MessageInput.module.scss"
import {createRef} from "react";

function MessageInput(props) {
    const text_area = createRef();
    const addMessageHandle = event => {
        event.preventDefault()
        const message_text = text_area.current.value
        props.addMessage(message_text, props.id)
        text_area.current.value = ''
        text_area.current.focus()
    }

    return (
        <div className={styles.input_block}>
            <input ref={text_area} type="text" />
            <input onClick={addMessageHandle} type="submit" value={"Send"}/>
        </div>

    )
}

export {MessageInput}