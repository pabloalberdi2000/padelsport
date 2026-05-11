import React from 'react'
import { motion } from 'framer-motion'

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      title: 'Pistas de Pádel',
      subtitle: '9 pistas de última generación con iluminación LED.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdNh6f3Fz_GP2DFh2lz_D_XP8gSZ7diZgC4j7kukPBHLIkhjq1MeGBU8WZWb3aypmHxy-R411JOcJ7BkPfrDFmwVxyLPj-Lnim6KvnMr-lcz26cbm0FP9ltvuCjSe0-nYPW4nQtunFIEh0zumafhwqlIy2miGrAbGvVzpZNuDtIrbKOqnqJrikJL95fD6VNJLaJ7mqZEhnEGAqNskdOcq2RqN9AZLiLTBvXffvwf9LoPdkFSHQMsNV7wrRzPVPMZSNzcxqm4930j6F',
    },
    {
      id: 2,
      title: 'Escuela de Pádel',
      subtitle: 'Clases para todos los niveles con monitores titulados.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA6YgCsdUbu48-Qzw8SF3S-7JVtt1-Uo2p-eZ6ARxeTX_z7D4QthpRje6M8YSUd2Yb9pDWOdlaITpZBq5ZUIzIbDjru803sdIvWUc6i9BibooU_L0bab8PHyMCaKB_g7J0wXNF5zVzVisvariWzwjKmSndPEjBcetXCdUXfuSzGFN2wSm_zg8oJfNj73skczcekoNLGjKAwar7WRyfdK8XDS12_zHWxMCcnSW_Z_omZNhcGlzfFhBg0W1WryrektgJ2m3oZ2sFcRVFm',
    },
    {
      id: 3,
      title: 'Pista de Tenis',
      subtitle: 'Complementamos nuestra oferta con tenis de calidad.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC-revj0qhDTzsrAHLrWvrTnf1bzIFt-VdS9EbBt9u65QDgQaHkxlLstRFkr-VuMUP3QPzDEkYbDLoLSlmEPc65U8EHlVaSFnSwlR4LqZcp74MJpEEWBCyzrAwhHtd7XNdpAUdQo3EnutT85E-QhUoreUy_4rlGKj32lE7FAPXOGHGcQT4MrSZGOUT33y4ZdPFBuW1g-4GxwchsoRgZS0x0yjEcA1FJFyTHlGoGT6nQz-I5eOZ-CpHLZ7FYkVu4tt6Uor-dlvBV39zs',
    },
    {
      id: 4,
      title: 'Café & Lounge',
      subtitle: 'El cuarto set se vive mejor en nuestro bar terraza.',
      image: '/padelbar.jpg',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="facilities" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-xl">
      <motion.h2
        className="font-display-lg text-headline-lg text-center mb-xl text-primary"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        Nuestras Instalaciones
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {facilities.map((facility) => (
          <motion.div
            key={facility.id}
            className="group relative h-80 rounded-xl overflow-hidden ambient-shadow"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <motion.img
              alt={facility.title}
              className="w-full h-full object-cover"
              src={facility.image}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-lg">
              <motion.div
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <h3 className="font-title-md text-title-md mb-1">{facility.title}</h3>
                <p className="font-body-md text-label-md opacity-80">{facility.subtitle}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Facilities
