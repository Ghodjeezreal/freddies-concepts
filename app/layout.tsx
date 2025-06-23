import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
//import ShowServices from '../components/ShowServices' // Use this instead of Services
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeProvider'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata = {
  title: 'Freddies Concepts',
  description: 'Creative studio website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}