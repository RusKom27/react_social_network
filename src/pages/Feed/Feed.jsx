import styles from "./Feed.module.scss"
import {PostsList} from "../../components";
import {connect} from "react-redux";
import {getAllPosts} from "../../packages/api/rest/post";
import {setFeedPosts} from "../../redux/actions";


function Feed({setFeedPosts}) {
    const updatePosts = () => {
        if (window.location.href.split("/").at(-1) !== "") return
        getAllPosts().then(posts => {
            setFeedPosts(posts.data)
        })
        setTimeout(updatePosts, 1000)
    }
    updatePosts()

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

export default connect(mapStateToProps, {setFeedPosts})(Feed)
