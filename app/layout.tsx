import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mon Amour Textil - Decoración y Textiles de Hogar',
  description: 'Mon Amour Textil ofrece una exquisita selección de textiles y decoración para el hogar. Descubre nuestras velas, aromas, textiles y cerámica de alta calidad.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/logoicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/logoicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#D4C098" />
        <meta name="msapplication-TileColor" content="#D4C098" />
        <meta name="theme-color" content="#D4C098" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://sdk.mercadopago.com/js/v2" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" />
      </body>
    </html>
  )
}

