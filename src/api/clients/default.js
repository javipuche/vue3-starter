import axios from 'axios'

export default axios.create({
    baseURL: import.meta.env.API_BASE_URL,
    timeout: parseInt(import.meta.env.API_TIMEOUT) || 10000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
