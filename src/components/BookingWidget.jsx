import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { openPlaytomicBooking } from '../services/playtomicService'

const BookingWidget = () => {
  const [selectedTime, setSelectedTime] = useState('18:30')

  const timeSlots = [
    { time: '17:00', status: 'Libre', available: true, booked: false },
    { time: '18:30', status: 'Seleccionado', available: true, booked: true },
    { time: '20:00', status: 'Ocupado', available: false, booked: false },
    { time: '21:30', status: 'Libre', available: true, booked: false },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="bg-surface-container-low py-xl">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid md:grid-cols-12 gap-xl items-center">
          {/* Left Content */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display-lg text-headline-lg text-primary mb-md">
              Reserva tu pista al instante
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
              Gestionamos nuestras reservas a través de Playtomic para ofrecerte la mayor comodidad.
              Consulta disponibilidad en tiempo real y asegura tu partido en segundos.
            </p>
            <motion.div
              className="flex items-center gap-sm p-sm bg-white rounded-lg border border-outline-variant mb-md"
              whileHover={{ scale: 1.02 }}
            >
              <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
              <span className="font-label-md text-on-surface">Instalaciones homologadas por la FAP</span>
            </motion.div>
          </motion.div>

          {/* Right Booking Card */}
          <motion.div
            className="md:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-white rounded-xl border border-outline-variant ambient-shadow p-lg overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-lg border-b border-outline-variant pb-md">
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary">calendar_month</span>
                  <span className="font-title-md text-title-md">Hoy, 24 de Mayo</span>
                </div>
                <span className="bg-secondary-container text-on-secondary-container px-xs py-1 rounded font-label-sm text-label-sm">
                  5 Pistas Libres
                </span>
              </div>

              {/* Time Slots */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-sm mb-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {timeSlots.map((slot, index) => (
                  <motion.button
                    key={index}
                    onClick={() => slot.available && setSelectedTime(slot.time)}
                    className={`p-sm rounded-lg border transition-all text-center group ${
                      slot.booked
                        ? 'border-primary bg-primary-fixed'
                        : slot.available
                          ? 'border-outline-variant hover:border-primary hover:bg-surface-container'
                          : 'border-outline-variant bg-surface-container-highest opacity-50 cursor-not-allowed'
                    }`}
                    whileHover={slot.available && !slot.booked ? { scale: 1.05 } : {}}
                    whileTap={slot.available && !slot.booked ? { scale: 0.95 } : {}}
                  >
                    <span className={`block font-label-sm ${slot.booked ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>
                      {slot.time}
                    </span>
                    <span className={`block font-label-md ${slot.booked ? 'text-primary font-bold' : 'text-primary'}`}>
                      {slot.status}
                    </span>
                  </motion.button>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.button
                onClick={openPlaytomicBooking}
                className="w-full bg-primary-container text-on-primary-container py-md rounded-lg font-title-md flex items-center justify-center gap-sm hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="material-symbols-outlined">bolt</span>
                Reservar en Playtomic
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BookingWidget
