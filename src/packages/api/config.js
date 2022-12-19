
const SERVER_URL = 'https://social-network-server-rho.vercel.app/'
const LOCAL_SERVER_URL = 'http://localhost:3000/'

let config = {
    token: localStorage.getItem("token"),
    server_url: SERVER_URL,
}

export {config}