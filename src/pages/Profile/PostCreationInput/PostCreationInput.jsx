import {createRef, useState} from "react"
import styles from "./PostCreationInput.module.scss"
import {connect} from "react-redux";
import {addPost} from "../../../redux/actions";
import {createPost} from "../../../packages/api/rest/post";

const PostCreationInput = ({addPost}) => {
    const [postInputText, setPostInputText] = useState('')
    const text_area = createRef();
    const addPostHandle = event => {
        event.preventDefault()
        createPost(postInputText).then(post => {
            addPost(post.data)
            setPostInputText('')
        })
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
                <input onClick={addPostHandle} type={"submit"} value={"Send"}/>
            </form>

        </div>

    )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {addPost})(PostCreationInput)