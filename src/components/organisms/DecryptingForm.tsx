"use client"

import { Input } from "@/components/ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react"
import { decryptMessage } from "@/services/decrypt"
import { toast } from "@/hooks/use-toast"
import LoadingIcon from "../../../public/LoadingIcon"

export const DecryptingForm = () => {

    const [encryptedText, setEncryptedText] = useState("")
    const [hash, setHash] = useState("")

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setLoading(true)
            const result = await decryptMessage(encryptedText, hash)
            console.log(result)

            toast({
                title: `Mensagem Revelada 🤫⚠️`,
                description: result.decryptedText,
            })

        } catch (error: any) {
            console.log("deu erro", error)
            setError(error.response.data.error)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>Descriptografar</CardTitle>
                    <CardDescription>
                        Digite a mensagem criptografada e seu hash correspondente.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="cryptedMessage">Mensagem</Label>
                        <Input
                            id="cryptedMessage"
                            placeholder="Digite a mensagem criptografada"
                            onChange={(e) => setEncryptedText(e.target.value)}
                            value={encryptedText}
                            required
                            className={`${error ? 'border-red-500' : 'border-transparent'}`}

                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="hash">Hash</Label>
                        <Input
                            id="hash"
                            placeholder="Hash correspondente"
                            onChange={(e) => setHash(e.target.value)}
                            value={hash}
                            required
                            className={`${error ? 'border-red-500' : 'border-transparent'}`}

                        />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <Button type="submit" className="w-full">
                        {loading ? <LoadingIcon /> : "Descriptografar"}
                    </Button>
                    <p className="text-red-700">{error}</p>
                </CardFooter>


            </Card>
        </form>
    )
}