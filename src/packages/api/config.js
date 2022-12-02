
let config = {
    token: 'token',
    user_id: '63837b05aca2b4ac81b8ed1f',
    server_url: 'https://social-network-server-rho.vercel.app/',
    local_server_url: 'http://localhost:3000/'
}

const setToken = (token) => {
    config.token = token
}

export {config, setToken}