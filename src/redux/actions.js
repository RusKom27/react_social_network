const ACTION = {
    NONE: () =>
        ({type: 'NONE'}),

    UPDATE_MESSAGE_INPUT: (message_text='') =>
        ({type: 'UPDATE_MESSAGE_INPUT', message_text}),

    ADD_MESSAGE: (dialog_id='') =>
        ({type: 'ADD_MESSAGE', dialog_id}),

    UPDATE_POST_INPUT: (post_text='') =>
        ({type: 'UPDATE_POST_INPUT', post_text}),

    ADD_POST: () =>
        ({type: 'ADD_POST'})
}

export {ACTION}