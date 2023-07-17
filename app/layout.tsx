import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/providers/modal-provider'
import { ToastProvider } from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'ADMIN DASHBOARD',
  description: 'ADMIN DASHBOARD',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <ClerkProvider>


    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider enableSystem defaultTheme='system' attribute='class'>
        <ToastProvider />
        <ModalProvider />
        {children}
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>

  )
}
