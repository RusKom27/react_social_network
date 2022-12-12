import styles from "./Feed.module.scss"
import {PostsList} from "../../components";
import {connect} from "react-redux";
import {getPosts} from "../../redux/thunk/post";
import {useEffect} from "react";

function Feed({getPosts}) {
    let isUpdatePosts = true
    const updatePosts = () => {
        if (isUpdatePosts) {
            getPosts()
            setTimeout(updatePosts, 1000)
        }
    }
    useEffect(() => {
        updatePosts()
        return () => {isUpdatePosts = false}
    })

    return (
        <div className={styles.container}>
            <PostsList/>
        </div>
    )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {getPosts})(Feed)
