import {makeRequest} from "../makeRequest";

const createMessage = ({
    dialog_id,
    text = "",
    image = ""
    }) => {
    return makeRequest({
        url: 'api/message',
        method: 'POST',
        headers: {authorization: true},
        data: {dialog_id, text, image}
    })
}

const getMessages = () => {
    return makeRequest({
        url: 'api/message',
        headers: {authorization: true},
        method: 'GET',
    })
}

export {
    createMessage,
    getMessages
}