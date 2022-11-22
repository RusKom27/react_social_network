const ACTION = {
    NONE: () =>
        ({type: -1}),

    UPDATE_MESSAGE_INPUT: (message_text='') =>
        ({type: 0, message_text}),

    ADD_MESSAGE: (dialog_id='') =>
        ({type: 1, dialog_id}),

    UPDATE_POST_INPUT: (post_text='') =>
        ({type: 2, post_text}),

    ADD_POST: () =>
        ({type: 3})
}

export {ACTION}