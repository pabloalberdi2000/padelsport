import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Header = ({ onBookingClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Instalaciones', href: '#facilities' },
    { label: 'Escuela', href: '#school' },
    { label: 'Tarifas', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-xs"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="material-symbols-outlined text-primary text-[32px]">sports_tennis</span>
          <span className="font-display-lg text-title-md font-bold text-primary">Ilusión Pádel</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-lg items-center">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className={`font-label-md text-label-md transition-colors ${
                index === 0
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          onClick={onBookingClick}
          className="bg-primary text-on-primary px-sm py-xs rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity hidden md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reservar Pista
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMobileMenu}
          className="md:hidden text-primary"
          whileTap={{ scale: 0.9 }}
        >
          <span className="material-symbols-outlined">menu</span>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-surface border-t border-outline-variant"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-margin-mobile py-md flex flex-col gap-md">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-label-md text-on-surface hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                onBookingClick()
                setMobileMenuOpen(false)
              }}
              className="bg-primary text-on-primary px-sm py-xs rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity w-full"
            >
              Reservar Pista
            </button>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header
