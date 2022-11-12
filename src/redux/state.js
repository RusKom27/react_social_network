
const addPost = (post_message) => {
    state.profile.posts.push({
        id: state.profile.posts.length - 1,
        username: "User1",
        text: post_message,
        likes: 0,
        dislikes: 0,
    })
    console.log(state.profile.posts)
}

export let state = {
    dialogs: [
        {id: 0, username: "User1", messages: ["Hi", "hello", "world"]},
        {id: 1, username: "User2", messages: ["World", "hi"]},
    ],
    profile: {
        posts: [
            {id: 0, username: "User1", text: "First post text", likes: 13, dislikes: 3},
            {id: 1, username: "User1", text: "Second post text", likes: 3, dislikes: 0},
        ],
        addPost: addPost
    }
}
