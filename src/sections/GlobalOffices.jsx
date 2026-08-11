import { motion } from 'framer-motion'
import { FaPhoneAlt, FaClock, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'
import { GLOBAL_OFFICES } from '../constants/site'

export default function GlobalOffices() {
  return (
    <section className="w-full bg-[#FFF0F2] py-12 border-b border-cream/20">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-[1px] bg-cream/30 flex-grow max-w-[150px]"></div>
          <div className="flex items-center gap-2 text-cream font-bold text-xs tracking-[0.25em] uppercase">
            <FaGlobe className="animate-spin-slow text-cream/70" />
            <span>Our Global Offices – All Over The World</span>
          </div>
          <div className="h-[1px] bg-cream/30 flex-grow max-w-[150px]"></div>
        </div>

        {/* Grid Layout: Cards on Left, Map on Right */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Branch Cards */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {GLOBAL_OFFICES.map((office) => (
              <div 
                key={office.country} 
                className="bg-white rounded-lg border border-cream/15 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                {/* Header Image */}
                <div className="h-28 overflow-hidden relative">
                  <img 
                    src={office.img} 
                    alt={office.city} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {office.isHeadOffice && (
                    <span className="absolute top-2 right-2 bg-cream text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded shadow-sm">
                      HEAD OFFICE
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-4 flex flex-col justify-between flex-grow text-cream">
                  <div>
                    <h3 className="text-[14px] font-black tracking-[0.1em] uppercase leading-tight">
                      {office.country}
                    </h3>
                    <p className="text-[11px] font-medium text-cream/70 mb-3">
                      {office.city}
                    </p>

                    <div className="space-y-2 text-[10.5px] font-medium text-cream/80 mb-4">
                      <div className="flex items-center gap-2">
                        <FaPhoneAlt size={10} className="text-cream/50 shrink-0" />
                        <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:underline">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock size={10} className="text-cream/50 shrink-0" />
                        <span>{office.time}</span>
                      </div>
                    </div>
                  </div>

                  <a 
                    href={office.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase hover:underline mt-auto pt-2 border-t border-cream/10"
                  >
                    <FaMapMarkerAlt size={10} className="text-cream/70" />
                    <span>Get directions</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-cream/15 shadow-sm text-center h-full min-h-[250px]">
            {/* World Map Illustration */}
            <div className="relative w-full max-w-[280px] aspect-[1.8/1] mb-4">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80" 
                alt="World Map Silhouette" 
                className="w-full h-full object-contain opacity-25 mix-blend-multiply"
              />
              
              {/* Dynamic Map Pins */}
              <div className="absolute top-[52%] left-[67%] w-2 h-2 bg-cream rounded-full animate-ping"></div>
              <div className="absolute top-[52%] left-[67%] w-2 h-2 bg-cream rounded-full"></div> {/* India */}

              <div className="absolute top-[60%] left-[55%] w-1.5 h-1.5 bg-cream rounded-full"></div> {/* Kenya */}
              <div className="absolute top-[75%] left-[58%] w-1.5 h-1.5 bg-cream rounded-full"></div> {/* South Africa */}
              <div className="absolute top-[48%] left-[60%] w-1.5 h-1.5 bg-cream rounded-full"></div> {/* Dubai */}
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[10px] tracking-[0.2em] font-extrabold text-cream/60 uppercase">We Serve</span>
              <span className="h-display text-2xl font-serif text-cream mt-1 uppercase leading-none">All Over</span>
              <span className="h-display text-3xl font-black text-cream uppercase leading-none mt-1">The World</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
