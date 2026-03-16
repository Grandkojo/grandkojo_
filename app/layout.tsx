import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Grandkojo - The Builder',
  description: '',
  metadataBase: new URL('https://grandkojo.my'),
  icons: {
    icon: '/icons/gk-favicon.svg',
    shortcut: '/icons/gk-favicon.svg',
    apple: '/icons/gk-favicon.svg',
  },
  openGraph: {
    title: 'Grandkojo - The Builder',
    description: '',
    url: 'https://grandkojo.my',
    images: [
      {
        url: '/og-preview.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Grandkojo — Software & Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grandkojo - The Builder',
    description: '',
    images: ['/og-preview.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
