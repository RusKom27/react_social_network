import React from "react"
import styles from "./MessageInput.module.scss"
import {createRef} from "react";
import {ACTION} from "../../../../redux/state";

function MessageInput(props) {
    const text_area = createRef();
    const addMessageHandle = event => {
        event.preventDefault()
        props.dispatch({type: ACTION.ADD_MESSAGE, dialog_id: props.id})
        text_area.current.focus()
    }
    return (
        <form className={styles.input_block}>
            <input onChange={event => props.dispatch({type: ACTION.UPDATE_MESSAGE_INPUT, message_text: event.target.value})}
                   type="text"
                   ref={text_area}
                   value={props.messageInputValue} />
            <input onClick={addMessageHandle}
                   name={"messageInput"}
                   type="submit"
                   value={"Send"}/>
        </form>

    )
}

export {MessageInput}