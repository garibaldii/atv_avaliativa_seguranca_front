"use client"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { CryptingForm } from "../organisms/CryptingForm"
import { DecryptingForm } from "../organisms/DecryptingForm"

export function CesarCryptForm() {

    return (
        <div>
            <Tabs defaultValue="crypting" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="crypting">Criptografar</TabsTrigger>
                    <TabsTrigger value="decrypting">Descriptografar</TabsTrigger>
                </TabsList>

                {/* CRIPTOGRAFAR */}
                <TabsContent value="crypting">
                    <CryptingForm />
                </TabsContent>

                {/* DESCRIPTOGRAFAR */}
                <TabsContent value="decrypting">
                    <DecryptingForm />
                </TabsContent>
            </Tabs>

        </div>
    )
}
