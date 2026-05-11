import React from 'react'
import { motion } from 'framer-motion'
import { useHomePageContent } from '../hooks/useContentful'

const Hero = ({ onBookingClick, onFacilitiesClick }) => {
  const { content } = useHomePageContent()

  const heroImage = '/ilusionsports.jpeg'

  return (
    <section className="relative h-[600px] flex items-center overflow-hidden mt-16">
      <div className="absolute inset-0 z-0">
        <img
          alt="Padel Court"
          className="w-full h-full object-cover"
          src={heroImage}
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-white">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display-lg text-display-lg mb-md leading-tight">
            {content?.heroTitle || 'Siente la pasión del pádel en Granada'}
          </h1>
          <p className="font-body-lg text-body-lg mb-lg opacity-90">
            {content?.heroSubtitle ||
              'Disfruta de nuestras instalaciones de primer nivel. Deporte, comunidad y el mejor ambiente en el corazón de la ciudad.'}
          </p>

          <motion.div
            className="flex flex-wrap gap-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={onBookingClick}
              className="bg-secondary-container text-on-secondary-container px-lg py-sm rounded-lg font-title-md text-title-md hover:scale-105 transition-transform"
            >
              Reservar Ahora
            </button>
            <button
              onClick={onFacilitiesClick}
              className="border-2 border-white text-white px-lg py-sm rounded-lg font-title-md text-title-md hover:bg-white/10 transition-colors"
            >
              Ver Instalaciones
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
