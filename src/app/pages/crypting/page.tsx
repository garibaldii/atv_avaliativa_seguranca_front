"use client"
import { CesarCryptForm } from "@/components/templates/CesarCryptForm"
import Image from "next/image"

const Crypting = () => {



    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full relative">

            <h1>Criptografia de César</h1>
            <Image src={"/cesar.png"} width={200} height={200} alt="Julio Cesar"></Image>
            <CesarCryptForm />
        </div>

    )
}

export default Crypting
