
let config = {
    token: 'token',
    server_url: 'https://social-network-server-rho.vercel.app/',
    local_server_url: 'http://localhost:3000/'
}

const setToken = (token) => {
    config.token = token
}

export {config, setToken}