import {PostCreationForm} from "../../../forms";

import styles from "./PostCreationInput.module.scss"

export const PostCreationInput = () => {
    return (
        <div className={styles.post_creating_form}>
            <PostCreationForm/>
        </div>
    )
}