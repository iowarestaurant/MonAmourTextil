import Image from 'next/image'

export default function FeaturedCollection() {
  return (
    <section className="bg-gradient-to-r from-cream to-ivory py-16 mb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 font-serif">¡NUEVA COLECCIÓN DE TEXTILES!</h2>
            <p className="text-xl text-gray-600">Descubre los nuevos ingresos</p>
          </div>
          <div className="relative">
            <Image
              src="/img/banner.png"
              alt="Colección Destacada"
              width={500}
              height={300}
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

