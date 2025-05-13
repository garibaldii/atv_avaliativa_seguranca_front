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

export const DecryptingForm = () => {

    const [cryptedMessage, setCryptedMessage] = useState("")
    const [hash, setHash] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {


        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>Descriptografar</CardTitle>
                    <CardDescription>
                        Digite a mensagem criptografada e o hash.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="cryptedMessage">Mensagem</Label>
                        <Input
                            id="cryptedMessage"
                            placeholder="Digite a mensagem criptografada"
                            onChange={(e) => setCryptedMessage(e.target.value)}
                            value={cryptedMessage}
                            required
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
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">
                        Descriptografar
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}