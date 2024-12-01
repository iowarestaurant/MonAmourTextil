'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export default function ProductModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [scent, setScent] = useState('')

  useEffect(() => {
    const handleProductModal = (event: CustomEvent) => {
      setProduct(event.detail)
      setIsOpen(true)
    }

    window.addEventListener('openProductModal' as any, handleProductModal)

    return () => {
      window.removeEventListener('openProductModal' as any, handleProductModal)
    }
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    setProduct(null)
    setQuantity(1)
    setScent('')
  }

  const addToCart = () => {
    if (product) {
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price * 0.9, // Apply 10% discount
        quantity,
        image: product.image,
        scent: scent || undefined
      }

      // Get existing cart from localStorage
      const existingCart = JSON.parse(localStorage.getItem('cart') || '[]')

      // Check if the item already exists in the cart
      const existingItemIndex = existingCart.findIndex((item: any) => 
        item.id === cartItem.id && item.scent === cartItem.scent
      )

      if (existingItemIndex !== -1) {
        // If the item exists, update its quantity
        existingCart[existingItemIndex].quantity += quantity
      } else {
        // If the item doesn't exist, add it to the cart
        existingCart.push(cartItem)
      }

      // Save the updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(existingCart))

      closeModal()
    }
  }

  if (!isOpen || !product) return null

  const discountedPrice = product.price * 0.9 // Apply 10% discount

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white w-full max-w-4xl rounded-lg shadow-xl overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-primary font-serif">{product.name}</h2>
            <button onClick={closeModal} className="text-gray-600 hover:text-primary">
              <i className="fas fa-times h-6 w-6"></i>
            </button>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="md:w-1/2">
                <Image src={product.image} alt={product.name} width={400} height={400} className="w-full h-auto object-contain rounded-lg shadow-md" />
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-2xl font-bold mb-4">
                    <span className="line-through text-gray-500 mr-2">${product.price.toLocaleString()}</span>
                    <span className="text-primary">${discountedPrice.toLocaleString()}</span>
                  </p>
                  {(product.category === 'velas' || product.category === 'aromas') && (
                    <div className="mb-4">
                      <label htmlFor="scent" className="block text-sm font-medium text-gray-700 mb-2">Aroma</label>
                      <select 
                        id="scent" 
                        value={scent}
                        onChange={(e) => setScent(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      >
                        <option value="">Seleccionar aroma</option>
                        {/* Add scent options here */}
                      </select>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Cantidad:</label>
                    <div className="flex items-center">
                      <button 
                        className="bg-gray-200 px-3 py-1 rounded-l"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <input 
                        id="quantity" 
                        type="number" 
                        className="w-16 text-center border-t border-b"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                        min="1"
                      />
                      <button 
                        className="bg-gray-200 px-3 py-1 rounded-r"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors text-lg font-semibold"
                    onClick={addToCart}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

