import Navbar from './components/Navbar'
import GlobalOffices from './sections/GlobalOffices'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import BookAppointment from './sections/BookAppointment'
import Services from './sections/Services'
import Offers from './sections/Offers'
import About from './sections/About'
import CareerPromise from './sections/CareerPromise'
import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  return (
    <div className="grain min-h-screen flex flex-col justify-between">
      <Navbar />
      <main id="top" className="flex-grow">
        <GlobalOffices />
        <Hero />
        <Marquee />
        <BookAppointment />
        <Services />
        <Offers />
        <About />
        <CareerPromise />
        <Testimonials />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
