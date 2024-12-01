'use client'

import { useState, useEffect } from 'react'

export default function AdvertisingBanner() {
  const [message, setMessage] = useState('')
  const [backgroundImage, setBackgroundImage] = useState('')

  useEffect(() => {
    const updateBanner = () => {
      const currentHour = new Date().getHours()
      if (currentHour >= 6 && currentHour < 12) {
        setMessage("¡Oferta matutina! 10% de descuento en todas las velas aromáticas")
        setBackgroundImage("url('/img/mañana.png')")
      } else if (currentHour >= 12 && currentHour < 18) {
        setMessage("¡Especial de la tarde! Compra un textil y lleva el segundo a mitad de precio")
        setBackgroundImage("url('/img/tarde.png')")
      } else {
        setMessage("¡Oferta nocturna! Envío gratis en compras superiores a $150000")
        setBackgroundImage("url('/img/noche.png')")
      }
    }

    updateBanner()
    const interval = setInterval(updateBanner, 3600000) // Update every hour

    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      id="advertisingBanner" 
      className="p-8 text-center relative" 
      style={{backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <p id="advertisingMessage" className="text-3xl font-bold mb-4 relative z-10 text-white font-serif">
        {message}
      </p>
    </div>
  )
}

