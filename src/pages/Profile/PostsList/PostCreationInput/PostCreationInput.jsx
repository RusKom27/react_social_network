import {createRef} from "react"
import styles from "./PostCreationInput.module.scss"
import {ACTION} from "../../../../redux/actions";


function PostCreationInput({store}) {
    const text_area = createRef();
    const addPostHandle = event => {
        event.preventDefault()
        store.dispatch(ACTION.ADD_POST())
        text_area.current.focus()
    }

    return (

        <div className={styles.post_creating_form}>
            <hr/>
            <form>
                    <textarea
                        onChange={event => props.dispatch(ACTION.UPDATE_POST_INPUT(event.target.value))}
                        ref={text_area}
                        name={"post_text"}
                        value={props.profile.postInput}
                    />
                <input onClick={addPostHandle} type={"submit"} value={"Send"}/>
            </form>

        </div>

    )
}

export {PostCreationInput}