export default function FeaturesSection() {
  return (
    <section className="bg-white py-12 mb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <i className="fas fa-truck text-4xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 font-serif">ENVÍO RÁPIDO</h3>
            <p className="text-gray-600">A toda Argentina</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <i className="fas fa-shield-alt text-4xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 font-serif">COMPRA SEGURA</h3>
            <p className="text-gray-600">Garantía 100%</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <i className="fas fa-gift text-4xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 font-serif">PROMOCIONES</h3>
            <p className="text-gray-600">Aprovechá nuestras ofertas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

