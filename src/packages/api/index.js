import * as message from './rest/message'
import * as user from './rest/user'
import * as post from './rest/post'
import * as image from './rest/image'
import {messageEventStream} from "./eventStream";

export {
    messageEventStream,
    message,
    post,
    image,
    user
}