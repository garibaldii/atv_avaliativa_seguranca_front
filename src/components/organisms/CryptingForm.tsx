"use client"

import { Input } from "@/components/ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"

import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@radix-ui/react-toast"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react"

export const CryptingForm = () => {

    const { toast } = useToast()

    const [message, setMessage] = useState("")
    const [steps, setSteps] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Mensagem:", message)
        console.log("Ciclos:", steps)

        toast({
            title: `Mensagem Criptografada:`,
            description: `Hash:`,
            action: (
                <ToastAction
                    altText="Copiar Hash"
                    onClick={() => navigator.clipboard.writeText(steps)}
                >
                    Copiar
                </ToastAction>
            )
        })

        try {
            // lógica de criptografia aqui
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>Criptografia de César</CardTitle>
                    <CardDescription>
                        Digite uma mensagem e a quantidade de ciclos.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="message">Mensagem</Label>
                        <Input
                            id="message"
                            placeholder="Digite uma mensagem"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="steps">Ciclos</Label>
                        <Input
                            id="steps"
                            placeholder="Quantidade de Ciclos"
                            type="number"
                            min="1"
                            onChange={(e) => setSteps(e.target.value)}
                            value={steps}
                            required
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">
                        Criptografar
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
