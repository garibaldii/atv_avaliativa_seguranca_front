import { api } from "./http";
import Cookies from "js-cookie"


export const login = async (email: string, password: string) => {
    const response = await api.post("/auth/login", { email, password })

    const token = response.data.token

    //coloca o token no localStorage + cookies
    localStorage.setItem("token", token)
    Cookies.set("token", token, { expires: 0.2 })


    console.log(token)

    return response.data
}


export const logout = async () => {
    localStorage.removeItem("token")
    Cookies.remove("token")
}