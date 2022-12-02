import {makeRequest} from "../makeRequest";

const createMessage = ({
    sender_id = "63839b940f668cd883a69dd6",
    receiver_id = "63837b05aca2b4ac81b8ed1f",
    text = "",
    image = ""
    }) => {
    return makeRequest({
        url: 'api/message',
        method: 'POST',
        headers: {authorization: true},
        data: {sender_id, receiver_id, text, image}
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