
type Config = {
    token: string | null;
    server_url: string | undefined;
}

let config: Config = {
    token: localStorage.getItem("token"),
    server_url: process.env.REACT_APP_LOCAL_SERVER_URL,
}

export {config}