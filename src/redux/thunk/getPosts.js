import {PostAPI} from "../../packages/api/rest/post";
import {setFeedPosts} from "../actions";

export const getFeedPosts = () => {
    return (dispatch) => {
        PostAPI.getAllPosts().then(posts => {
            dispatch(setFeedPosts(posts.data))
        })
    }
}


