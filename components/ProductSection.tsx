'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductSection({ id, title }: { id: string; title: string }) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data[id] || [])
      })
  }, [id])

  const openProductModal = (productId: number, category: string) => {
    // Implement product modal opening logic
  }

  return (
    <section id={id} className="container mx-auto px-4 py-12">
      <h2 className="mb-8 text-center text-2xl font-bold text-primary font-serif">{title}</h2>
      <div className="product-slider flex overflow-x-auto scrollbar-hide gap-6">
        {products.map(product => {
          const discountedPrice = product.price * 0.9
          return (
            <div key={product.id} className="product-card flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden relative">
              <div className="p-4">
                <div className="relative mb-4 aspect-square">
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold z-10"
                    style={{backgroundColor: '#D4C098', color: '#848071'}}>
                    10% OFF
                  </div>
                  <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" />
                </div>
                <h3 className="text-sm font-medium line-clamp-2 font-serif">{product.name}</h3>
                <p className="mt-2 text-lg font-bold">
                  <span className="line-through text-gray-500">${product.price.toLocaleString()}</span>
                  ${discountedPrice.toLocaleString()}
                </p>
                <button 
                  className="w-full mt-2 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors"
                  onClick={() => openProductModal(product.id, product.category)}
                >
                  Ver detalles
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

