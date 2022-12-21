import Ably from "ably/callbacks";

const realtime = new Ably.Realtime(process.env.REACT_APP_ABLY_API_KEY);

export const subscribeToChannel = (channel_name, listener) => {
    const channel = realtime.channels.get(channel_name)
    channel.unsubscribe()
    channel.subscribe(listener)
}