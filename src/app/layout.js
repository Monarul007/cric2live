import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './lib/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js 13 with Redux Toolkit Starter App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <Providers>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </Providers>
  )
}