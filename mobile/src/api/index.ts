import axios from "axios";
const BASE_URL = 'http://www.omdbapi.com/'
export const KEY_API = 'd95a64b'

export const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
})