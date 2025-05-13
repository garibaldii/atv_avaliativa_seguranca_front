import { api } from "./http";

export const cryptText = async (text: string, shift: number) => {
    const response = await api.post("/encrypt", {text, shift})

    const data = response.data

    return data
}