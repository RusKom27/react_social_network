import Ably from "ably/callbacks";

const realtime = new Ably.Realtime(process.env.REACT_APP_ABLY_API_KEY || "");

export const subscribeToChannel = (channel_name: string, listener: (message: Ably.Types.Message) => void) => {
    const channel = realtime.channels.get(channel_name)
    channel.unsubscribe()
    channel.subscribe(listener)
}