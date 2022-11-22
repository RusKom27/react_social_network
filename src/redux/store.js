import {messageReducer, profileReducer} from "./reducers";

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
        this._state.messages = messageReducer(this._state.messages, action)
        this._state.profile = profileReducer(this._state.profile, action)
        this._callSubscriber(this._state)
    },
}

export {store}
