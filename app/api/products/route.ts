import { NextResponse } from 'next/server'

export async function GET() {
  // This is a mock product data. In a real application, you would fetch this from a database.
  const products = {
    velas: [
      { id: 1, name: "Vela Aromática Lavanda", price: 2500, image: "/img/vela-lavanda.jpg", category: "velas" },
      { id: 2, name: "Vela Aromática Vainilla", price: 2500, image: "/img/vela-vainilla.jpg", category: "velas" },
      // Add more vela products...
    ],
    aromas: [
      { id: 3, name: "Difusor de Aromas Cítrico", price: 3000, image: "/img/difusor-citrico.jpg", category: "aromas" },
      { id: 4, name: "Spray Ambiental Floral", price: 1800, image: "/img/spray-floral.jpg", category: "aromas" },
      // Add more aroma products...
    ],
    ceramica: [
      { id: 5, name: "Taza de Cerámica Artesanal", price: 1500, image: "/img/taza-ceramica.jpg", category: "ceramica" },
      { id: 6, name: "Plato Decorativo de Cerámica", price: 2200, image: "/img/plato-ceramica.jpg", category: "ceramica" },
      // Add more ceramica products...
    ],
    textiles: [
      { id: 7, name: "Manta Tejida a Mano", price: 4500, image: "/img/manta-tejida.jpg", category: "textiles" },
      { id: 8, name: "Cojín Decorativo", price: 1800, image: "/img/cojin-decorativo.jpg", category: "textiles" },
      // Add more textile products...
    ],
    accesorios: [
      { id: 9, name: "Portavelas de Metal", price: 1200, image: "/img/portavelas-metal.jpg", category: "accesorios" },
      { id: 10, name: "Espejo Decorativo", price: 3500, image: "/img/espejo-decorativo.jpg", category: "accesorios" },
      // Add more accessory products...
    ],
    cubre_sommier: [
      { id: 11, name: "Cubre Sommier Blanco", price: 5500, image: "/img/cubre-sommier-blanco.jpg", category: "cubre_sommier" },
      { id: 12, name: "Cubre Sommier Estampado", price: 6000, image: "/img/cubre-sommier-estampado.jpg", category: "cubre_sommier" },
      // Add more cubre sommier products...
    ],
    cortinas_interior: [
      { id: 13, name: "Cortina Blackout", price: 7000, image: "/img/cortina-blackout.jpg", category: "cortinas_interior" },
      { id: 14, name: "Cortina de Gasa", price: 5500, image: "/img/cortina-gasa.jpg", category: "cortinas_interior" },
      // Add more cortina products...
    ],
  }

  return NextResponse.json(products)
}

