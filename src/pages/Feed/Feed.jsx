import styles from "./Feed.module.scss"
import {PostsList} from "../../components";
import {connect} from "react-redux";
import {getFeedPosts} from "../../redux/thunk/getPosts";
import {useEffect} from "react";


function Feed({getFeedPosts}) {
    let isUpdate = true
    const updatePosts = () => {
        if (isUpdate) {
            getFeedPosts()
            setTimeout(updatePosts, 1000)
        }
    }
    useEffect(() => {
        updatePosts()
        return () => {isUpdate = false}
    })

    return (
        <div className={styles.container}>
            <PostsListContainer/>
        </div>
    )
}

const PostsListContainer = connect(
    state => ({posts: state.feed.posts})
)(PostsList)

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {getFeedPosts})(Feed)
