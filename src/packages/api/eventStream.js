import {config} from "./config";

export let messageEventStream = {
    eventSource: new EventSource(`${config.server_url}api/message/connect/${config.token}`),
    connect(onConnect, onMessage) {
        this.eventSource.onopen = function(event) {
            const message = JSON.parse(event.data);
            console.log("Connect")
            onConnect(message)
        }

        this.eventSource.onmessage = function(event) {
            const message = JSON.parse(event.data);
            console.log(message)
            onMessage(message)
        }
    }
}