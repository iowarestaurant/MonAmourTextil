'use client'

import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const openWhatsApp = () => {
    window.open('https://wa.me/5493534786106', '_blank')
  }

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button 
        onClick={openWhatsApp}
        className="bg-[#25D366] hover:bg-[#20BA56] text-white rounded-full p-4 shadow-lg transition-colors"
      >
        <i className="fab fa-whatsapp h-6 w-6 whatsapp-logo"></i>
      </button>
      {showNotification && (
        <div className="absolute bottom-full right-0 mb-2 bg-primary p-4 rounded-lg shadow-lg w-64">
          <p className="text-sm font-medium mb-2 text-white">¿Necesitas ayuda? ¡Contáctanos por WhatsApp!</p>
          <button 
            onClick={() => setShowNotification(false)}
            className="text-sm text-white hover:text-gray-200 transition-colors"
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  )
}

