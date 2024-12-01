import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/img/logo.png" alt="Mon Amour Textil Logo" width={80} height={80} className="mb-4" />
            <p className="text-sm text-gray-200">
              Textiles y decoración para tu hogar. Productos artesanales de alta calidad.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="#velas" className="text-sm text-gray-200 hover:text-white transition-colors">Velas</Link></li>
              <li><Link href="#aromas" className="text-sm text-gray-200 hover:text-white transition-colors">Aromas</Link></li>
              <li><Link href="#textiles" className="text-sm text-gray-200 hover:text-white transition-colors">Textiles</Link></li>
              <li><Link href="#ceramica" className="text-sm text-gray-200 hover:text-white transition-colors">Cerámica</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-200">
                <i className="fas fa-map-marker-alt mr-2 h-4 w-4"></i>
                San Juan 1020, Villa Maria, Córdoba
              </li>
              <li className="flex items-center text-sm text-gray-200">
                <i className="fas fa-phone mr-2 h-4 w-4"></i>
                +54 9 353 478-6106
              </li>
              <li className="flex items-center text-sm text-gray-200">
                <i className="fab fa-whatsapp mr-2 h-4 w-4"></i>
                WhatsApp: +54 9 353 478-6106
              </li>
              <li className="flex items-center text-sm text-gray-200">
                <i className="fas fa-envelope mr-2 h-4 w-4"></i>
                <a href="mailto:info@monamourtextil.com">info@monamourtextil.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Síguenos</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <i className="fab fa-facebook h-6 w-6"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <i className="fab fa-instagram h-6 w-6"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <i className="fab fa-pinterest h-6 w-6"></i>
              </a>
            </div>
            <h4 className="text-sm font-semibold mb-2 font-serif">Suscríbete a nuestro newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Tu email" className="flex-grow px-3 py-2 text-gray-900 rounded-md focus:outline-none" />
              <button type="submit" className="bg-white text-primary px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">Suscribir</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <h3 className="text-lg font-semibold mb-4 font-serif">Políticas</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li><Link href="#" className="text-sm text-gray-200 hover:text-white transition-colors">Políticas de Privacidad y Cookies</Link></li>
            <li><Link href="#" className="text-sm text-gray-200 hover:text-white transition-colors">Términos y Condiciones de Uso</Link></li>
            <li><Link href="#" className="text-sm text-gray-200 hover:text-white transition-colors">Política de Garantía</Link></li>
            <li><Link href="#" className="text-sm text-gray-200 hover:text-white transition-colors">Políticas de Envío</Link></li>
          </ul>
        </div>
        <div className="mt-8 text-center text-sm text-gray-200">
          <p>© 2024 Mon Amour Textil. Todos los derechos reservados.</p>
          <p className="mt-2">Powered by <a href="https://dualitydomain.com" className="hover:text-white transition-colors">Duality Domain</a></p>
        </div>
      </div>
    </footer>
  )
}}

Now, let's create the TopBanner component:

```tsx file="components/TopBanner.tsx"
'use client'

import { useState, useEffect } from 'react'

const bannerMessages = [
    "¡Nueva colección de textiles disponible!",
    "Envíos gratis en compras superiores a $150000",
    "¡Ofertas especiales en velas aromáticas!"
]

export default function TopBanner() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerMessages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-primary p-2 text-center text-white relative">
      <p className="text-sm">
        <span>{bannerMessages[currentBanner]}</span>
        <a href="#" className="underline ml-2">COMPRAR AHORA</a>
      </p>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-2 text-white hover:bg-primary-dark p-1"
      >
        <i className="fas fa-times h-4 w-4"></i>
      </button>
    </div>
  )
}

