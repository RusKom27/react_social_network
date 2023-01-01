import {connect} from "react-redux";

import {createMessage} from "../../../../redux/thunk";
import {MessageCreationForm} from "../../../../forms/MessageCreationForm";

import styles from "./MessageInput.module.scss"

function MessageInput({createMessage, dialog_id}) {

    return (
        <div className={styles.input_section}>
            <MessageCreationForm createMessage={createMessage} dialog_id={dialog_id}/>
        </div>
    )
}

const mapStateToProps = () => ({
})

export default connect(mapStateToProps, {createMessage})(MessageInput)