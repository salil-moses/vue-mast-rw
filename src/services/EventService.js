import axios from 'axios'

/** Define our single axios instance to be shared across our app */
const apiClient = axios.create({
    baseURL: 'https://611f86809771bf001785c9c9.mockapi.io/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    /** Returning by fn allows us to target only the api endpoints we need  */
    getEvents() {
        return apiClient.get('/events')
    },
    getEvent(id) {
        return apiClient.get('/events/' + id)
    }

}