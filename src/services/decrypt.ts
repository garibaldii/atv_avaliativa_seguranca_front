import { api } from "./http";

export const decryptMessage = async (encryptedText: string, hash: string) => {
    const response = await api.post("/decrypt", {encryptedText, hash})

    const data = response.data
    
    return data
}
