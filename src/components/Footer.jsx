import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Instalaciones', href: '#facilities' },
    { label: 'Escuela de Pádel', href: '#school' },
    { label: 'Tarifas y Bonos', href: '#pricing' },
    { label: 'Normativa', href: '#policies' },
  ]

  const contactInfo = [
    { icon: 'call', label: '+34 958 00 00 00' },
    { icon: 'mail', label: 'info@ilusionpadel.es' },
    { icon: 'location_on', label: 'Granada, España' },
  ]

  const socialLinks = [
    { icon: 'language', href: '#' },
    { icon: 'camera', href: '#' },
    { icon: 'mail', href: '#' },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <footer className="bg-inverse-surface text-secondary-container py-xl">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter mb-xl">
        {/* Brand Section */}
        <motion.div
          className="col-span-1 md:col-span-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center gap-xs mb-md">
            <span className="material-symbols-outlined text-secondary text-[32px]">sports_tennis</span>
            <span className="font-display-lg text-title-md font-bold text-secondary-container">
              Ilusión Pádel
            </span>
          </div>
          <p className="font-body-md text-surface-variant mb-md">
            Tu club de pádel de referencia en Granada. Pasión, deporte y comunidad.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h4 className="font-title-md text-white mb-md">Enlaces Rápidos</h4>
          <ul className="space-y-sm">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="font-body-md text-surface-variant hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h4 className="font-title-md text-white mb-md">Contacto</h4>
          <ul className="space-y-sm">
            {contactInfo.map((info, index) => (
              <li key={index} className="flex items-center gap-xs text-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]">{info.icon}</span>
                <span className="font-body-md">{info.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h4 className="font-title-md text-white mb-md">Síguenos</h4>
          <div className="flex gap-md">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-surface-variant hover:text-secondary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="material-symbols-outlined text-[32px]">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-lg border-t border-outline text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p className="font-body-md text-surface-variant">
          © {currentYear} Ilusión Pádel Sport Granada. Todos los derechos reservados.
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer
