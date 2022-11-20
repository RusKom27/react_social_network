let renderEntireTree = () => {}

const subscribe = (observer) => {
    renderEntireTree = observer
}

const addPost = (post_message) => {
    state.profile.posts.push({
        id: state.profile.posts.length - 1,
        username: "User1",
        text: post_message,
        likes: 0,
        dislikes: 0,
    })
    renderEntireTree(state)
}
const addMessage = (dialog_id) => {
    state.dialogs.messages[dialog_id].messages.push({
        id: state.dialogs.messages[dialog_id].messages.length,
        username: "User1",
        text: state.dialogs.messageInputValue,
    })
    state.dialogs.messageInputValue = ''
    renderEntireTree(state)
}
const updateMessageInput = (message_text) => {
    state.dialogs.messageInputValue = message_text
    renderEntireTree(state)
}

let state = {
    dialogs: {
        messageInputValue: '',
        addMessage: addMessage,
        updateMessageInput: updateMessageInput,
        messages: [
            {
                id: 0, messages: [
                    {id: 0, username: "User1", text: "Hi"},
                    {id: 1, username: "User1", text: "World"},
                    {id: 2, username: "User2", text: "hi"},
                ]
            },
            {
                id: 1, messages: [
                    {id: 0, username: "User3", text: "Hellow"},
                    {id: 1, username: "User1", text: "ABOBUS"},
                    {id: 2, username: "User3", text: "..."},
                    {id: 3, username: "User1", text: "..."},
                ]
            },
            {
                id: 2, messages: [
                    {id: 0, username: "User1", text: "Hi"},
                    {id: 1, username: "User4", text: "Worldus"},
                    {id: 2, username: "User1", text: "ASFDFSADFSAS"},
                ]
            },
            {
                id: 3, messages: [
                    {id: 0, username: "User1", text: "Hi"},
                ]
            },
        ]
    },
    profile: {
        addPost: addPost,
        posts: [
            {id: 0, username: "User1", text: "First post text", likes: 13, dislikes: 3},
            {id: 1, username: "User1", text: "Second post text", likes: 3, dislikes: 0},
        ],
    }
}

export {state, subscribe}
