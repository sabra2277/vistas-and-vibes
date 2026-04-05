import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display, Lora } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vistas & Vibes — A Curated Adventure on the Oaxaca Coast',
  description:
    'Not a retreat. A curated adventure — elevated, indulgent, and thoughtfully designed for you. Private villa, small group, Oaxaca Coast.',
  openGraph: {
    title: 'Vistas & Vibes',
    description: 'Not a retreat. A curated adventure.',
    url: 'https://vistasandvibes.co',
    siteName: 'Vistas & Vibes',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  )
}
