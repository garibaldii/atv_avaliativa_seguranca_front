import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

//atribui o token jwt de autenticacao a todas as requisicoes via url da api. 
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")

    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
})