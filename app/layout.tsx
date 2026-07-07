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

const ogImage = {
  url: '/images/og_thumb.jpg',
  width: 500,
  height: 500,
  alt: 'The private beachfront villa and infinity pool on the Oaxaca coast',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://vistasandvibes.com'),
  title: 'Vistas & Vibes — A Curated Adventure on the Oaxaca Coast',
  description:
    'Not a retreat. Your kind of trip — a curated adventure for women, in a private beachfront villa on the Oaxaca coast. Travel solo, never alone.',
  openGraph: {
    title: 'Vistas & Vibes — Your Kind of Trip on the Oaxaca Coast',
    description: 'Not a retreat. A curated adventure.',
    url: 'https://vistasandvibes.com',
    siteName: 'Vistas & Vibes',
    locale: 'en_US',
    type: 'website',
    images: [ogImage],
  },
  twitter: {
    card: 'summary',
    title: 'Vistas & Vibes — Your Kind of Trip on the Oaxaca Coast',
    description: 'Not a retreat. A curated adventure.',
    images: [ogImage],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
