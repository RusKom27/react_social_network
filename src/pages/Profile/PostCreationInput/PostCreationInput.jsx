import {createRef} from "react"
import styles from "./PostCreationInput.module.scss"

function PostCreationInput({addPost, updatePostInput, postInputText}) {
    const text_area = createRef();
    const addPostHandle = event => {
        event.preventDefault()
        addPost()
        text_area.current.focus()
    }

    return (
        <div className={styles.post_creating_form}>
            <form>
                <textarea
                    onChange={event => updatePostInput(event.target.value)}
                    ref={text_area}
                    name={"post_text"}
                    value={postInputText}
                />
                <input onClick={addPostHandle} type={"submit"} value={"Send"}/>
            </form>

        </div>

    )
}

export {PostCreationInput}