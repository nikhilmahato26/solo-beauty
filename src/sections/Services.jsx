import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MAIN_CATEGORIES, POPULAR_OFFERS, SERVICE_CATEGORIES } from '../constants/site'
import { waLink } from '../utils/links'

export default function Services() {
  const [activeTab, setActiveTab] = useState('ALL')
  const [showCatalogue, setShowCatalogue] = useState(false)

  const tabs = ['ALL', 'HAIR', 'SKIN', 'MAKEUP', 'NAILS', 'WAXING', 'PACKAGES']

  // Filter popular offers based on the selected tab
  const filteredOffers = POPULAR_OFFERS.filter((offer) => {
    if (activeTab === 'ALL') return true
    return offer.tag.toUpperCase() === activeTab
  })

  return (
    <section id="categories" className="py-16 bg-[#FFF0F2]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Gender / Age Categories Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* WOMEN Category Card */}
          <div className="bg-[#E4C2C9] rounded-[20px] overflow-hidden border border-cream/15 p-6 flex flex-row items-center justify-between shadow-sm relative min-h-[190px] text-cream">
            <div className="flex-grow pr-4 z-10 flex flex-col justify-between h-full min-h-[140px]">
              <div>
                <span className="text-[26px] font-black tracking-widest uppercase font-serif">WOMEN</span>
                <p className="text-[12px] font-semibold tracking-wide mt-2 text-cream/80 whitespace-pre-line leading-relaxed">
                  Hair | Skin | Makeup<br />Nails | Waxing & More
                </p>
              </div>
              <a 
                href={waLink("Hi, I want to explore services for Women.")}
                target="_blank" 
                rel="noreferrer"
                className="mt-4 bg-white/80 border border-cream text-cream text-[10px] tracking-widest font-black uppercase px-4 py-2.5 rounded hover:bg-cream hover:text-white transition-all text-center w-fit"
              >
                EXPLORE SERVICES
              </a>
            </div>
            <div className="w-[120px] h-[140px] rounded-xl overflow-hidden shrink-0 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=300&q=80" 
                alt="Women Beauty" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* MEN Category Card (Dark Theme) */}
          <div className="bg-[#2D3130] rounded-[20px] overflow-hidden border border-white/5 p-6 flex flex-row items-center justify-between shadow-sm relative min-h-[190px] text-white">
            <div className="flex-grow pr-4 z-10 flex flex-col justify-between h-full min-h-[140px]">
              <div>
                <span className="text-[26px] font-black tracking-widest uppercase font-serif">MEN</span>
                <p className="text-[12px] font-semibold tracking-wide mt-2 text-white/80 whitespace-pre-line leading-relaxed">
                  Hair | Beard | Skin<br />Grooming & More
                </p>
              </div>
              <a 
                href={waLink("Hi, I want to explore services for Men.")}
                target="_blank" 
                rel="noreferrer"
                className="mt-4 bg-white/10 border border-white/40 text-white text-[10px] tracking-widest font-black uppercase px-4 py-2.5 rounded hover:bg-white hover:text-[#2D3130] transition-all text-center w-fit"
              >
                EXPLORE SERVICES
              </a>
            </div>
            <div className="w-[120px] h-[140px] rounded-xl overflow-hidden shrink-0 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=300&q=80" 
                alt="Men Grooming" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* KIDS Category Card */}
          <div className="bg-[#DFD3C3] rounded-[20px] overflow-hidden border border-cream/15 p-6 flex flex-row items-center justify-between shadow-sm relative min-h-[190px] text-cream">
            <div className="flex-grow pr-4 z-10 flex flex-col justify-between h-full min-h-[140px]">
              <div>
                <span className="text-[26px] font-black tracking-widest uppercase font-serif">KIDS</span>
                <p className="text-[12px] font-semibold tracking-wide mt-2 text-cream/80 whitespace-pre-line leading-relaxed">
                  Hair | Grooming<br />Special Kids Services
                </p>
              </div>
              <a 
                href={waLink("Hi, I want to explore services for Kids.")}
                target="_blank" 
                rel="noreferrer"
                className="mt-4 bg-white/80 border border-cream text-cream text-[10px] tracking-widest font-black uppercase px-4 py-2.5 rounded hover:bg-cream hover:text-white transition-all text-center w-fit"
              >
                EXPLORE SERVICES
              </a>
            </div>
            <div className="w-[120px] h-[140px] rounded-xl overflow-hidden shrink-0 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=300&q=80" 
                alt="Kids Haircut" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Popular Services & Offers section */}
        <div id="popular-services" className="text-center mb-10">
          <h2 className="text-[10px] tracking-[0.25em] font-extrabold text-cream/60 uppercase">OUR POPULAR SERVICES & OFFERS</h2>
          <p className="text-[12px] font-bold text-cream/80 mt-1 italic">Premium Services at Special Prices</p>
        </div>

        {/* Filters Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-[10.5px] font-extrabold tracking-widest uppercase rounded-full border transition-all ${
                activeTab === tab
                  ? 'bg-cream text-white border-cream shadow-sm scale-105'
                  : 'bg-white text-cream border-cream/15 hover:border-cream/40 hover:bg-[#FFF0F2]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Offer Grid Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredOffers.map((offer) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={offer.title + offer.sub}
                className="bg-white rounded-xl overflow-hidden border border-cream/15 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
              >
                {/* Offer Image */}
                <div className="h-44 relative bg-ink/30">
                  <img 
                    src={offer.img} 
                    alt={offer.title} 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2.5 right-2.5 bg-cream text-white text-[9px] font-black tracking-wider px-2 py-1 rounded shadow-sm">
                    {offer.discount}
                  </span>
                </div>

                {/* Offer Details */}
                <div className="p-4 flex flex-col justify-between flex-grow text-center text-cream">
                  <div>
                    <h3 className="text-[12.5px] font-black tracking-wider uppercase">
                      {offer.title}
                    </h3>
                    <p className="text-[10px] font-bold text-cream/60 mt-0.5">
                      {offer.sub}
                    </p>
                    
                    <div className="flex items-center justify-center gap-2.5 mt-3 mb-4">
                      <span className="text-[12px] text-cream/50 line-through">₹{offer.original}</span>
                      <span className="text-[18px] font-black text-cream">₹{offer.price}</span>
                    </div>
                  </div>

                  <a 
                    href={waLink(`Hi Solo Beauty, I want to book the popular offer: ${offer.title} ${offer.sub} for ₹${offer.price}`)}
                    target="_blank" 
                    rel="noreferrer"
                    className="block text-center border-t border-cream/10 pt-3 text-[10px] font-black tracking-[0.18em] uppercase hover:text-cream-soft transition-colors mt-auto"
                  >
                    BOOK NOW
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View Catalogue Button */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={() => setShowCatalogue(!showCatalogue)}
            className="border-2 border-cream text-cream text-[11px] tracking-[0.22em] font-extrabold uppercase px-8 py-3.5 rounded hover:bg-cream hover:text-white transition-all shadow-sm"
          >
            {showCatalogue ? 'HIDE CATALOGUE ↑' : 'VIEW FULL CATALOGUE ↓'}
          </button>
        </div>

        {/* Full Catalogue Expansion */}
        <AnimatePresence>
          {showCatalogue && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-16 pb-8">
                <div className="text-center mb-12">
                  <h2 className="text-[12px] tracking-[0.25em] font-extrabold text-cream/60 uppercase">FULL SERVICE MENU</h2>
                  <div className="w-12 h-[1px] bg-cream/30 mx-auto mt-4"></div>
                </div>
                
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                  {SERVICE_CATEGORIES.map((category, idx) => (
                    <div key={idx} className="break-inside-avoid bg-white p-6 rounded-xl border border-cream/15 shadow-sm">
                      <div className="mb-4 pb-3 border-b border-cream/10">
                        <span className="text-[9px] font-bold text-cream/50 uppercase tracking-widest">{category.cat}</span>
                        <h3 className="text-[14px] font-black text-cream uppercase tracking-wide mt-1">{category.title}</h3>
                      </div>
                      
                      <ul className="space-y-3">
                        {category.items.map((item, i) => (
                          <li key={i} className="flex justify-between items-end gap-4 text-[12px] text-cream/90 group">
                            <span className="font-semibold">{item.name} {item.star && <span className="text-[#DF9F28]">★</span>}</span>
                            <div className="flex-grow border-b border-dotted border-cream/30 mb-1 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <span className="font-black text-cream">₹{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
