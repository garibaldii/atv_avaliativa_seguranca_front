import { CesarCryptForm } from "@/components/templates/CesarCryptForm"
import Image from "next/image"

import { cinzel } from "@/app/layout"

const Crypting = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full relative">
            <Image src={"/cesar.png"} width={200} height={200} alt="Julio Cesar" />
            <h1 className={`text-2xl font-medium ${cinzel.className}`}>Criptografia de César</h1>
            <CesarCryptForm />
        </div>
    )
}

export default Crypting
