import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Cinzel } from 'next/font/google'

import './globals.css'

import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ['latin'] }) 
export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500"]
})

export const metadata: Metadata = {
  title: 'Criptografia de César',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className='bg-custom-lds w-[100vw]'>
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  )
}
