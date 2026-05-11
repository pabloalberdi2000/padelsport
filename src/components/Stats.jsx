import React from 'react'
import { motion } from 'framer-motion'

const Stats = () => {
  const stats = [
    {
      icon: 'stadium',
      title: '9 Pistas',
      subtitle: 'Pádel de Cristal',
      color: 'border-t-primary',
      iconColor: 'text-primary',
    },
    {
      icon: 'sports_tennis',
      title: '1 Pista',
      subtitle: 'Tenis Quick',
      color: 'border-t-secondary-container',
      iconColor: 'text-primary',
    },
    {
      icon: 'location_on',
      title: 'Granada',
      subtitle: 'Ubicación Central',
      color: 'border-t-primary',
      iconColor: 'text-primary',
    },
    {
      icon: 'coffee',
      title: 'Cafetería',
      subtitle: '& Tienda Oficial',
      color: 'border-t-secondary-container',
      iconColor: 'text-primary',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-xl">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-gutter"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`bg-white border ${stat.color} border-outline-variant p-lg rounded-xl text-center ambient-shadow`}
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <span className={`material-symbols-outlined ${stat.iconColor} text-[40px] mb-xs block`}>
              {stat.icon}
            </span>
            <h3 className="font-display-lg text-title-md text-primary">{stat.title}</h3>
            <p className="font-label-md text-on-surface-variant">{stat.subtitle}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Stats
