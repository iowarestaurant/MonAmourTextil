'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroImages = [
    "/img/hero1.png",
    "/img/hero2.png",
    "/img/hero3.png"
]

export default function Hero() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
      <Image
        src={heroImages[currentHeroImage]}
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  )
}

