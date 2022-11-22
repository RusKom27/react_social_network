import React from "react"
import styles from "./MessageInput.module.scss"
import {createRef} from "react";
import {ACTION} from "../../../../redux/actions";

function MessageInput(props) {
    const text_area = createRef();
    const addMessageHandle = event => {
        event.preventDefault()
        props.dispatch(ACTION.ADD_MESSAGE(props.id))
        text_area.current.focus()
    }
    return (
        <form className={styles.input_block}>
            <input onChange={event => props.dispatch(ACTION.UPDATE_MESSAGE_INPUT(event.target.value))}
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