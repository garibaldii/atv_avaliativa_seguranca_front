"use client"

import { useState } from "react"

import { useRouter } from "next/navigation"


import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import LoadingIcon from "../../../public/LoadingIcon"
import { login } from "@/services/auth"


export const SignInForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)


        try {
            const result = await login(email, password)

            router.push("/pages/crypting")
            console.log(result)
            return

        } catch (error: any) {
            setError(error.response.data.message) //takes the error from backend error treatment
            setLoading(false)
        }
    }

    return (
        <div className=" flex flex-col items-center justify-center min-h-screen w-full relative">

            <h2 className="text-center text-xl mb-4">Log-in</h2>


            <form
                onSubmit={handleSubmit}
                className=" bg-custom-lds-blur w-1/4 rounded-lg space-y-6 min-h-[0px] flex flex-col justify-center"
            >

                <div className="flex flex-col">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setError("")
                        }}
                        required
                        className={`${error ? 'border-red-500' : 'border-transparent'}`}
                    />
                </div>

                <div className="flex flex-col">
                    <Label htmlFor="password" >Senha</Label>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setError("")
                        }}
                        required
                        className={`${error ? 'border-red-500' : 'border-transparent'}`}
                    />
                </div>

                <Button type="submit" disabled={loading} className="w-full" >
                    {loading ? <LoadingIcon /> : "Login"}
                </Button>

                <p className="text-red-700">{error}</p>


            </form>
        </div>

    )
}

export default SignInForm