'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600 hover:text-primary lg:hidden"
        >
          <i className={`fas fa-bars h-5 w-5 menu-icon ${isMobileMenuOpen ? 'open' : ''}`}></i>
        </button>

        <nav className="hidden lg:flex space-x-6">
          <Link href="#velas" className="text-sm font-medium hover:text-primary">VELAS</Link>
          <Link href="#aromas" className="text-sm font-medium hover:text-primary">AROMAS</Link>
          <div className="relative group">
            <Link href="#textiles" className="text-sm font-medium hover:text-primary flex items-center">
              TEXTILES
              <i className="fas fa-chevron-down ml-1 text-xs"></i>
            </Link>
            <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-2">
              <Link href="#cortinas-bano" className="block px-4 py-2 text-sm hover:bg-secondary">Cortinas de baño</Link>
              <Link href="#cortinas-interior" className="block px-4 py-2 text-sm hover:bg-secondary">Cortinas de interior</Link>
              <Link href="#cubre-sommier" className="block px-4 py-2 text-sm hover:bg-secondary">Cubre sommier</Link>
              <Link href="#accesorios" className="block px-4 py-2 text-sm hover:bg-secondary">Accesorios</Link>
            </div>
          </div>
          <Link href="#ceramica" className="text-sm font-medium hover:text-primary">CERÁMICA</Link>
        </nav>

        <Link href="/" className="flex items-center justify-center flex-grow lg:flex-grow-0">
          <Image src="/img/logo.png" alt="Mon Amour Textil" width={96} height={96} />
        </Link>

        <div className="flex items-center space-x-4">
          <button id="cartButton" className="text-gray-600 hover:text-primary relative">
            <i className="fas fa-shopping-cart h-5 w-5"></i>
            <span id="cartItemCount" className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-xs text-white hidden"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <nav className="bg-white p-4 space-y-4">
            <Link href="/" className="block nav-link">Inicio</Link>
            <div className="accordion">
              <div className="accordion-header flex justify-between items-center cursor-pointer">
                <span className="nav-link">Tienda</span>
                <i className="fas fa-chevron-down accordion-icon transition-transform duration-300"></i>
              </div>
              <div className="accordion-content hidden mt-2 ml-4">
                <Link href="#velas" className="block py-2 hover:text-primary">Velas</Link>
                <Link href="#aromas" className="block py-2 hover:text-primary">Aromas</Link>
                <div className="accordion">
                  <div className="accordion-header flex justify-between items-center cursor-pointer py-2">
                    <span className="nav-link">Textiles</span>
                    <i className="fas fa-chevron-down accordion-icon transition-transform duration-300"></i>
                  </div>
                  <div className="accordion-content hidden mt-2 ml-4">
                    <Link href="#cortinas-bano" className="block py-2 hover:text-primary">Cortinas de baño</Link>
                    <Link href="#cortinas-interior" className="block py-2 hover:text-primary">Cortinas de interior</Link>
                    <Link href="#cubre-sommier" className="block py-2 hover:text-primary">Cubre sommier</Link>
                    <Link href="#accesorios" className="block py-2 hover:text-primary">Accesorios</Link>
                  </div>
                </div>
                <Link href="#ceramica" className="block py-2 hover:text-primary">Cerámica</Link>
              </div>
            </div>
            <Link href="/nosotros" className="block nav-link">Nosotros</Link>
            <Link href="/cambios-devoluciones" className="block nav-link">Cambios y devoluciones</Link>
            <Link href="/contacto" className="block nav-link">Contacto</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

