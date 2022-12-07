import React, {useState} from "react"
import styles from "./MessageInput.module.scss"
import {createRef} from "react";
import {ReactComponent as SendSVG} from "../../../../images/send.svg";
import {connect} from "react-redux";
import {addMessage} from "../../../../redux/actions";
import {createMessage} from "../../../../packages/api/rest/message";
import {Button} from "../../../../components";

function MessageInput({addMessage, dialog_id}) {
    const [messageInput, setMessageInput] = useState('')
    const text_area = createRef();
    const addMessageHandle = event => {
        event.preventDefault()
        createMessage(dialog_id, messageInput).then(message => {
            addMessage(message.data)
        })
        setMessageInput("")
        text_area.current.focus()
    }
    return (
        <form className={styles.input_block}>
            <input onChange={event => setMessageInput(event.target.value)}
                   type="text"
                   ref={text_area}
                   value={messageInput} />
            <Button onClick={addMessageHandle} style={styles.send_button}>
                Send
                <SendSVG/>
            </Button>
        </form>

    )
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {addMessage})(MessageInput)