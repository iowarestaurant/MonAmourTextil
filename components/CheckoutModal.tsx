'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  scent?: string;
}

export default function CheckoutModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])
  const [shippingCost, setShippingCost] = useState(0)
  const [postalCode, setPostalCode] = useState('')
  const [shippingOptions, setShippingOptions] = useState<any>({})
  const [selectedShipping, setSelectedShipping] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  const calculateShipping = async (postalCode: string) => {
    // Simulating API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const options = {
          correoArgentinoDomicilio: {
            name: "Correo Argentino Envío a domicilio clásico",
            price: 9742,
            estimatedDelivery: '3 a 6 días hábiles (luego de ser despachado)',
            logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/correo-argentino-shipment-icon-Lk0cW7gu5xXw5o1TDUht0qHCPguHn4.png'
          },
          correoArgentinoSucursal: {
            name: "Correo Argentino Envío a sucursal",
            price: 6135,
            estimatedDelivery: '3 a 6 días hábiles (luego de ser despachado)',
            logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/correo-argentino-shipment-icon-Lk0cW7gu5xXw5o1TDUht0qHCPguHn4.png'
          },
          andreaniEstandar: {
            name: "Andreani Estandar Envío a domicilio",
            price: 10457.39,
            estimatedDelivery: '3-4 días hábiles (luego de ser despachado)',
            logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga-3IKzLYo9d0C1H0FACUsSAZkuDgCuAi.svg'
          },
          retiroLocal: {
            name: "Retiro en local",
            price: 0,
            estimatedDelivery: 'Inmediato',
            logo: 'path/to/local-icon.png',
            description: 'Tienda Mon Amour - Rivera Indarte 160, centro. Córdoba - Atención de lunes a viernes de 9 a 19 hs y sábados de 9 a 14 hs.'
          }
        }
        resolve(options)
      }, 1000)
    })
  }

  const handleShippingSearch = async () => {
    if (postalCode.length === 4) {
      const options = await calculateShipping(postalCode)
      setShippingOptions(options)
    } else {
      alert('Por favor, ingrese un código postal válido.')
    }
  }

  const handleShippingSelect = (method: string) => {
    setSelectedShipping(method)
    const option = shippingOptions[method]
    if (option) {
      const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
      setShippingCost(calculateShippingCost(option.price, itemCount))
    }
  }

  const calculateShippingCost = (baseShippingCost: number, itemCount: number, incrementPercentage = 28) => {
    if (itemCount <= 1) {
      return baseShippingCost
    } else {
      const additionalCost = baseShippingCost * (incrementPercentage / 100) * (itemCount - 1)
      return baseShippingCost + additionalCost
    }
  }

  const getTotalPrice = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return subtotal + shippingCost
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(price)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    // Implement form submission logic here
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full bg-primary text-white py-3 px-4 rounded-lg mt-6 hover:bg-primary-dark transition-colors text-lg font-semibold"
      >
        Proceder al pago
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white w-full max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold text-primary font-serif">Finalizar Compra</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-primary">
                  <i className="fas fa-times h-6 w-6"></i>
                </button>
              </div>
              <div className="p-6">
                <Image src="/img/logo.png" alt="Mon Amour Textil Logo" width={80} height={80} className="mx-auto mb-6" />
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Contacto */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                    </div>

                    {/* Opciones de envío */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-700 mb-2 font-serif">Opciones de envío</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Código postal</label>
                        <input 
                          type="text" 
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" 
                        />
                      </div>
                      <button 
                        type="button" 
                        onClick={handleShippingSearch}
                        className="mt-2 bg-secondary text-white py-2 px-4 rounded hover:bg-secondary-dark transition-colors"
                      >
                        Buscar opciones de envío
                      </button>
                      {Object.keys(shippingOptions).length > 0 && (
                        <div className="mt-2">
                          <label className="block text-sm font-medium text-gray-700">Método de envío</label>
                          <select 
                            value={selectedShipping}
                            onChange={(e) => handleShippingSelect(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                          >
                            <option value="">Seleccionar...</option>
                            {Object.entries(shippingOptions).map(([key, option]: [string, any]) => (
                              <option key={key} value={key}>
                                {option.name} - {formatPrice(option.price)} ({option.estimatedDelivery})
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>

                    {/* Datos del destinatario */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-700 mb-2 font-serif">Datos del destinatario</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Nombre</label>
                          <input type="text" name="nombre" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Apellido</label>
                          <input type="text" name="apellido" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                        </div>
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700">DNI</label>
                        <input type="text" name="dni" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                        <input type="tel" name="telefono" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                      </div>
                    </div>

                    {/* Domicilio del destinatario */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-700 mb-2 font-serif">Domicilio del destinatario</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Calle</label>
                        <input type="text" name="calle" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700">Número</label>
                        <input type="text" name="numero" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700">Piso (opcional)</label>
                        <input type="text" name="piso" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700">Dpto (opcional)</label>
                        <input type="text" name="dpto" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700">Ciudad</label>
                        <input type="text" name="ciudad" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700">Provincia</label>
                        <input type="text" name="provincia" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Método de pago */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Método de pago</label>
                    <select 
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      name="pago" 
                      required 
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="transferencia">Transferencia (10% de descuento)</option>
                      <option value="mercadopago">MercadoPago</option>
                    </select>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <p className="text-xl font-bold">Total: {formatPrice(getTotalPrice())}</p>
                    <p className="text-lg text-gray-600">Costo de envío: {formatPrice(shippingCost)}</p>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors text-lg font-semibold"
                  >
                    Finalizar compra
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

