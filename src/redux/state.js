
const ACTION = {
    NONE: -1,
    UPDATE_MESSAGE_INPUT: 0,
    ADD_MESSAGE: 1,
    UPDATE_POST_INPUT: 2,
    ADD_POST: 3
}

let store = {
    _callSubscriber() {
    },

    _state: {
        messages: {
            messageInputValue: '',
            dialogs: [
                {
                    id: 0, member: "User2", messages: [
                        {id: 0, username: "User1", text: "Hi"},
                        {id: 1, username: "User1", text: "World"},
                        {id: 2, username: "User2", text: "hi"},
                    ]
                },
                {
                    id: 1, member: "User3", messages: [
                        {id: 0, username: "User3", text: "Hellow"},
                        {id: 1, username: "User1", text: "ABOBUS"},
                        {id: 2, username: "User3", text: "..."},
                        {id: 3, username: "User1", text: "..."},
                    ]
                },
                {
                    id: 2, member: "User4", messages: [
                        {id: 0, username: "User1", text: "Hi"},
                        {id: 1, username: "User4", text: "Worldus"},
                        {id: 2, username: "User1", text: "ASFDFSADFSAS"},
                    ]
                },
                {
                    id: 3, member: "User5", messages: [
                        {id: 0, username: "User1", text: "Hi"},
                    ]
                },
            ]
        },
        profile: {
            postInput: '',
            posts: [
                {id: 0, username: "User1", text: "First post text", likes: 13, dislikes: 3},
                {id: 1, username: "User1", text: "Second post text", likes: 3, dislikes: 0},
            ],
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        switch (action.type) {
            case ACTION.UPDATE_MESSAGE_INPUT:
                this._state.messages.messageInputValue = action.message_text
                this._callSubscriber(this._state)
                break

            case ACTION.ADD_MESSAGE:
                if (this._state.messages.messageInputValue !== '')
                    this._state.messages.dialogs[action.dialog_id].messages.push({
                        id: this._state.messages.dialogs[action.dialog_id].messages.length,
                        username: "User1",
                        text: this._state.messages.messageInputValue,
                    })
                this._state.messages.messageInputValue = ''
                this._callSubscriber(this._state)
                break

            case ACTION.UPDATE_POST_INPUT:
                this._state.profile.postInput = action.post_text
                this._callSubscriber(this._state)
                break

            case ACTION.ADD_POST:
                this._state.profile.posts.push({
                    id: this._state.profile.posts.length - 1,
                    username: "User1",
                    text: this._state.profile.postInput,
                    likes: 0,
                    dislikes: 0,
                })
                this._state.profile.postInput = ''
                this._callSubscriber(this._state)
                break

        }
    },
}

export {store, ACTION}
