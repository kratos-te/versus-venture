import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { rubik } from "@/styles/font";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Versus Website',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rubik.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
