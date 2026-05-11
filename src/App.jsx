import React, { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import BookingWidget from './components/BookingWidget'
import Facilities from './components/Facilities'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import { openPlaytomicBooking } from './services/playtomicService'

function App() {
  const facilitiesRef = useRef(null)

  const handleBookingClick = () => {
    openPlaytomicBooking()
  }

  const handleFacilitiesClick = () => {
    if (facilitiesRef.current) {
      facilitiesRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <PageTransition>
      <div className="bg-surface text-on-surface overflow-x-hidden">
        <Header onBookingClick={handleBookingClick} />
        <main className="pt-0">
          <Hero onBookingClick={handleBookingClick} onFacilitiesClick={handleFacilitiesClick} />
          <Stats />
          <BookingWidget />
          <div ref={facilitiesRef}>
            <Facilities />
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}

export default App
