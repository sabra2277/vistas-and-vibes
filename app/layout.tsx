import type { Metadata } from 'next'
import { Jost, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vistas & Vibes — A Curated Adventure on the Oaxaca Coast',
  description:
    'Not a retreat. A curated adventure — elevated, indulgent, and thoughtfully designed for you.',
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
    <html lang="en" className={`${jost.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
