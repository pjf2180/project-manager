import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  a,
  b,
  createDialog
}: {
  children: React.ReactNode,
  a: React.ReactNode,
  b: React.ReactNode,
  createDialog: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {a}
        {b}
        {/* {createDialog} */}
        </body>
    </html>
  )
}
