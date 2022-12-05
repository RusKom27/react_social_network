import React, {useState} from "react"
import styles from "./MessageInput.module.scss"
import {createRef} from "react";
import {ReactComponent as SendSVG} from "../../../../images/send.svg";
import {connect} from "react-redux";
import {addMessage} from "../../../../redux/actions";

function MessageInput({addMessage, dialog_id}) {
    const [messageInput, setMessageInput] = useState('')
    const text_area = createRef();
    const addMessageHandle = event => {
        event.preventDefault()
        addMessage(dialog_id)
        text_area.current.focus()
    }
    return (
        <form className={styles.input_block}>
            <input onChange={event => setMessageInput(event.target.value)}
                   type="text"
                   ref={text_area}
                   value={messageInput} />
            <button onClick={addMessageHandle}
                   name={"messageInput"}
                    type="submit">Send<SendSVG/></button>
        </form>

    )
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {addMessage})(MessageInput)