import axios from 'axios'

const API = () => {
    return axios.create({
        baseURL: `https://newsapi.org/v2/`,
        headers: {
            Authorization: 'Bearer 9d88c84ddd48477fb0780e5404119321'
        }
    })
}
export default API;