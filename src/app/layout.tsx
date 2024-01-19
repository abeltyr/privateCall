import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/theme'
import { RoomProvider } from '@/context/room'
import { UserProvider } from '@/context/user'
import { OfferProvider } from '@/context/offer'
import { AnswerProvider } from '@/context/answer'
import { StreamProvider } from '@/context/stream'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
        >
          <UserProvider>
            <RoomProvider>
              <OfferProvider>
                <AnswerProvider>
                  <StreamProvider>
                    {children}
                  </StreamProvider>
                </AnswerProvider>
              </OfferProvider>
            </RoomProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
