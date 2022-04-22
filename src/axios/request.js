import axios from 'axios'

const requestAxios = axios.create({
    baseURL: process.env.VUE_APP_FB_URL
})

export default requestAxios