import Header from '../components/Header'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'
import Hero from '../components/Hero'
import FeaturedCollection from '../components/FeaturedCollection'
import ProductSection from '../components/ProductSection'
import AdvertisingBanner from '../components/AdvertisingBanner'
import FeaturesSection from '../components/FeaturesSection'
import CartModal from '../components/CartModal'
import CheckoutModal from '../components/CheckoutModal'
import ProductModal from '../components/ProductModal'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-cream">
      <TopBanner />
      <Header />
      <main>
        <Hero />
        <FeaturedCollection />
        <ProductSection id="velas" title="VELAS" />
        <ProductSection id="aromas" title="AROMAS" />
        <ProductSection id="ceramica" title="CERÁMICA" />
        <AdvertisingBanner />
        <ProductSection id="textiles" title="TEXTILES" />
        <ProductSection id="accesorios" title="ACCESORIOS" />
        <ProductSection id="cubre_sommier" title="CUBRE SOMMIER" />
        <ProductSection id="cortinas_interior" title="CORTINAS DE INTERIOR" />
        <FeaturesSection />
      </main>
      <Footer />
      <CartModal />
      <CheckoutModal />
      <ProductModal />
      <WhatsAppButton />
    </div>
  )
}

