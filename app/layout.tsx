import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Grandkojo - The Builder',
  description: 'Personal website of Ernest Kojo Owusu Essien. Backend engineer, AI builder, based in Accra, Ghana.',
  metadataBase: new URL('https://grandkojo.my'),
  openGraph: {
    title: 'Ernest Kojo — Software Engineer & AI Builder',
    description: 'Backend systems, AI engineering, and thoughtful software from Accra, Ghana.',
    url: 'https://grandkojo.my',
    images: [
      {
        url: '/og/grandkojo-og-v1.svg',
        width: 1200,
        height: 630,
        alt: 'Grandkojo — Software & Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ernest Kojo — Software Engineer & AI Builder',
    description: 'Backend systems, AI engineering, and thoughtful software from Accra, Ghana.',
    images: ['/og/grandkojo-og-v1.svg'],
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
