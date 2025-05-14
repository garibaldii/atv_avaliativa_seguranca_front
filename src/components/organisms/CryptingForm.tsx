"use client"

import { Input } from "@/components/ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"

import { useToast } from "@/hooks/use-toast"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react"
import { cryptText } from "@/services/crypt"
import LoadingIcon from "../../../public/LoadingIcon"

export const CryptingForm = () => {

    const { toast } = useToast()

    const [text, setText] = useState("")
    const [shift, setShift] = useState<number | undefined>(undefined)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {

            setLoading(true)
            const result = await cryptText(text, Number(shift))

            console.log(result)

            toast({
                title: `Mensagem Criptografada: ${result.encryptedText}`,
                description: `Hash: ${result.hash}`,
            })

        } catch (error: any) {
            console.log("deu erro", error)
            setError(error.response.data.message)
            setLoading(false)
        } finally {
            setLoading(false)
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>Criptografar</CardTitle>
                    <CardDescription>
                        Digite uma mensagem e a quantidade de ciclos.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="text">Mensagem</Label>
                        <Input
                            id="text"
                            placeholder="Digite uma mensagem"
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                            required
                            className={`${error ? 'border-red-500' : 'border-transparent'}`}

                        />

                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="shift">Ciclos</Label>
                        <Input
                            id="shift"
                            placeholder="Quantidade de Ciclos"
                            type="number"
                            onChange={(e) => setShift(Number(e.target.value))}
                            value={shift}
                            required
                            onKeyDown={(e) => {
                                if (e.key === "," || e.key === ".") {
                                    e.preventDefault()
                                }
                            }}
                            className={`${error ? 'border-red-500' : 'border-transparent'}`}

                        />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <Button type="submit" className="w-full">
                        {loading ? <LoadingIcon /> : "Criptografar"}
                    </Button>
                    <p className="text-red-700">{error}</p>
                </CardFooter>
            </Card>
        </form>
    )
}
