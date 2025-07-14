import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Providers from './providers'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SB300 PWA',
  description: 'Hello World PWA',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'SB300 PWA',
  },
  icons: [
    { rel: 'icon', url: '/icon-192x192.png' },
    { rel: 'apple-touch-icon', url: '/icon-180x180.png' },
    { rel: 'icon', url: '/icon-512x512.png', sizes: '512x512' },
  ],
}

export const viewport = {
  themeColor: '#4A90E2',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
