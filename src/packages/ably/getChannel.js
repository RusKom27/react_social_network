import Ably from "ably/callbacks";

const realtime = new Ably.Realtime(process.env.REACT_APP_ABLY_API_KEY);

export const getChannel = (channel_name) => {
    return realtime.channels.get(channel_name)
}