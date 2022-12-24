import {createRef, useState} from "react"
import styles from "./PostCreationInput.module.scss"
import {connect} from "react-redux";
import {Button} from "../../../components";
import {createProfilePost} from "../../../redux/thunk";

const PostCreationInput = ({createProfilePost}) => {
    const [postInputText, setPostInputText] = useState('')
    const text_area = createRef();
    const addPostHandle = event => {
        event.preventDefault()
        createProfilePost(postInputText)
        setPostInputText('')
        text_area.current.focus()
    }

    return (
        <div className={styles.post_creating_form}>
            <form>
                <textarea
                    onChange={event => setPostInputText(event.target.value)}
                    ref={text_area}
                    name={"post_text"}
                    value={postInputText}
                />
                <Button
                    onClick={addPostHandle}
                    style={styles.submit_button}>
                    Send
                </Button>
            </form>
        </div>

    )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {createProfilePost})(PostCreationInput)