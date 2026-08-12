import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SERVICE_CATEGORIES } from '../constants/site'
import { waLink } from '../utils/links'

const CATEGORY_MAP = {
  // Hair Services
  'Hair Services': 'HAIR',
  'Hair Colours': 'HAIR',
  'Hair Spa': 'HAIR',
  'Straightening': 'HAIR',
  'Head Massage': 'HAIR',
  'Hair Cuts': 'HAIR',
  'Hair Treatment': 'HAIR',
  'Hair Coloring': 'HAIR',
  'Straightening & Smoothening': 'HAIR',
  'Keratin Treatment': 'HAIR',
  'Hair Botox': 'HAIR',
  'Temporary Styling': 'HAIR',
  'Hair Wash & Styling': 'HAIR',
  'Hair Spa Services': 'HAIR',

  // Skin Services
  'Facial Services': 'SKIN',
  'Bleaching': 'SKIN',
  'Facials': 'SKIN',
  'Aroma Facials': 'SKIN',
  'Premium Facials': 'SKIN',
  'Deep Cleaning': 'SKIN',
  'Massage Chair': 'SKIN',

  // Makeup Services
  'Makeup Services': 'MAKEUP',
  'Mehendi Services': 'MAKEUP',

  // Nails Services
  'Manicure': 'NAILS',
  'Pedicure': 'NAILS',

  // Waxing & Threading
  'Honey Wax': 'WAXING',
  'Rica Wax': 'WAXING',
  'Threading': 'WAXING',

  // Packages
  'Packages and Combos': 'PACKAGES'
}

const MAIN_CATALOGUE_CATEGORIES = [
  {
    id: 'HAIR',
    num: 'CAT. 01',
    title: 'Hair',
    subcategories: [
      'Hair Cuts & Styling',
      'Hair Spa & Treatments',
      'Hair Colours & Highlights',
      'Straightening & Smoothening',
      'Keratin & Botox Treatments',
      'Temporary Styling & Wash'
    ],
    audiences: ['ALL', 'WOMEN', 'MEN', 'KIDS']
  },
  {
    id: 'SKIN',
    num: 'CAT. 02',
    title: 'Skin',
    subcategories: [
      'Facials & Aroma Treatments',
      'Deep Cleaning & Bleach',
      'Face Cleanup & Scrub',
      'Face De-Tan (O3+ / Raga)',
      'Massage Chair Relaxation'
    ],
    audiences: ['ALL', 'WOMEN', 'MEN']
  },
  {
    id: 'MAKEUP',
    num: 'SIGNATURE',
    title: 'Makeup',
    subcategories: [
      'HD Bridal Makeup',
      'Premium Party Makeup',
      'Light Makeup & Styling',
      'Saree & Lehenga Draping',
      'Mehendi Services'
    ],
    audiences: ['ALL', 'WOMEN']
  },
  {
    id: 'NAILS',
    num: 'CAT. 04',
    title: 'Nails',
    subcategories: [
      'Manicure Treatments',
      'Pedicure Treatments',
      'Paraffin & Aroma Care',
      'O3+ Antitan Care'
    ],
    audiences: ['ALL', 'WOMEN']
  },
  {
    id: 'WAXING',
    num: 'CAT. 05',
    title: 'Waxing & Threading',
    subcategories: [
      'Eyebrow & Face Threading',
      'Honey Waxing Services',
      'Rica Waxing Services',
      'Underarms & Full Body Care'
    ],
    audiences: ['ALL', 'WOMEN']
  },
  {
    id: 'PACKAGES',
    num: 'CAT. 06',
    title: 'Packages',
    subcategories: [
      'Combo Packages (1-6)',
      'Pick Any 3 Services',
      'Pick Any 5 Services',
      'Value Salon Combos'
    ],
    audiences: ['ALL', 'WOMEN', 'MEN']
  }
]

export default function Services() {
  const [activeAudience, setActiveAudience] = useState('ALL')
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#women') {
        setActiveAudience('WOMEN')
      } else if (hash === '#men') {
        setActiveAudience('MEN')
      } else if (hash === '#kids') {
        setActiveAudience('KIDS')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Lock body scroll when overlay is active
  useEffect(() => {
    if (selectedCategory) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedCategory])

  const handleAudienceChange = (aud) => {
    setActiveAudience(aud)
  }

  const handleExplore = (aud) => {
    setActiveAudience(aud)
    const el = document.getElementById('popular-services')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleExploreCategory = (catId) => {
    setSelectedCategory(catId)
  }

  const getFilteredCatalogue = (audience, tab) => {
    // 1. Filter by active category tab first
    let categories = SERVICE_CATEGORIES.filter((category) => {
      if (tab === 'ALL') return true
      return CATEGORY_MAP[category.title] === tab
    })

    // 2. Filter items inside those categories by audience
    categories = categories.map(category => {
      let items = [...category.items]
      
      if (audience === 'WOMEN') {
        // Filter out men-specific items from shared categories
        if (category.title === 'Hair Services') {
          items = items.filter(item => !['Shave', 'Beard Trim', 'Beard Shave'].includes(item.name))
        }
        if (category.title === 'Hair Colours') {
          items = items.filter(item => item.name !== 'Beard Colour')
        }
      } else if (audience === 'MEN') {
        // Only show categories relevant to Men
        const menCategories = [
          'Hair Services', 'Hair Colours', 'Hair Spa', 'Straightening', 'Head Massage',
          'Facial Services', 'Massage Chair'
        ]
        if (!menCategories.includes(category.title)) {
          return null
        }
        // Filter out kids/women items from shared categories
        if (category.title === 'Hair Services') {
          items = items.filter(item => !['Kids Cut', 'Kids Change of Style'].includes(item.name))
        }
      } else if (audience === 'KIDS') {
        // Kids only have kids hair cut/cut services
        if (category.title === 'Hair Services') {
          items = items.filter(item => ['Kids Cut', 'Kids Change of Style'].includes(item.name))
        } else if (category.title === 'Hair Cuts') {
          items = items.filter(item => item.name === 'Kids Hair Cut')
        } else {
          return null
        }
      }
      
      if (items.length === 0) return null
      return { ...category, items }
    }).filter(Boolean)

    // 3. Merge if KIDS
    if (audience === 'KIDS') {
      const mergedKidsItems = []
      categories.forEach(cat => {
        mergedKidsItems.push(...cat.items)
      })
      if (mergedKidsItems.length > 0) {
        categories = [{
          cat: 'Special Kids Services',
          title: 'Kids Hair Services',
          items: mergedKidsItems
        }]
      }
    }
    
    return categories
  }

  return (
    <section id="categories" className="py-16 bg-[#FFF0F2]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Gender / Age Categories Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* WOMEN Category Card */}
          <div 
            id="women"
            onClick={() => handleExplore('WOMEN')}
            className="cursor-pointer hover:scale-[1.02] transition-all duration-300 bg-[#E4C2C9] rounded-[20px] overflow-hidden border border-cream/15 p-6 flex flex-row items-center justify-between shadow-sm relative min-h-[190px] text-cream"
          >
            <div className="flex-grow pr-4 z-10 flex flex-col justify-between h-full min-h-[140px]">
              <div>
                <span className="text-[26px] font-black tracking-widest uppercase font-serif">WOMEN</span>
                <p className="text-[12px] font-semibold tracking-wide mt-2 text-cream/80 whitespace-pre-line leading-relaxed">
                  Hair | Skin | Makeup<br />Nails | Waxing & More
                </p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  handleExplore('WOMEN')
                }}
                className="mt-4 bg-white/80 border border-cream text-cream text-[10px] tracking-widest font-black uppercase px-4 py-2.5 rounded hover:bg-cream hover:text-white transition-all text-center w-fit font-sans"
              >
                EXPLORE SERVICES
              </button>
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
          <div 
            id="men"
            onClick={() => handleExplore('MEN')}
            className="cursor-pointer hover:scale-[1.02] transition-all duration-300 bg-[#2D3130] rounded-[20px] overflow-hidden border border-white/5 p-6 flex flex-row items-center justify-between shadow-sm relative min-h-[190px] text-white"
          >
            <div className="flex-grow pr-4 z-10 flex flex-col justify-between h-full min-h-[140px]">
              <div>
                <span className="text-[26px] font-black tracking-widest uppercase font-serif">MEN</span>
                <p className="text-[12px] font-semibold tracking-wide mt-2 text-white/80 whitespace-pre-line leading-relaxed">
                  Hair | Beard | Skin<br />Grooming & More
                </p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  handleExplore('MEN')
                }}
                className="mt-4 bg-white/10 border border-white/40 text-white text-[10px] tracking-widest font-black uppercase px-4 py-2.5 rounded hover:bg-white hover:text-[#2D3130] transition-all text-center w-fit font-sans"
              >
                EXPLORE SERVICES
              </button>
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
          <div 
            id="kids"
            onClick={() => handleExplore('KIDS')}
            className="cursor-pointer hover:scale-[1.02] transition-all duration-300 bg-[#DFD3C3] rounded-[20px] overflow-hidden border border-cream/15 p-6 flex flex-row items-center justify-between shadow-sm relative min-h-[190px] text-cream"
          >
            <div className="flex-grow pr-4 z-10 flex flex-col justify-between h-full min-h-[140px]">
              <div>
                <span className="text-[26px] font-black tracking-widest uppercase font-serif">KIDS</span>
                <p className="text-[12px] font-semibold tracking-wide mt-2 text-cream/80 whitespace-pre-line leading-relaxed">
                  Hair | Grooming<br />Special Kids Services
                </p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  handleExplore('KIDS')
                }}
                className="mt-4 bg-white/80 border border-cream text-cream text-[10px] tracking-widest font-black uppercase px-4 py-2.5 rounded hover:bg-cream hover:text-white transition-all text-center w-fit font-sans"
              >
                EXPLORE SERVICES
              </button>
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

        {/* Service Catalogue Title */}
        <div id="popular-services" className="text-center mb-8">
          <h2 className="text-[11px] tracking-[0.25em] font-extrabold text-cream/60 uppercase">OUR SERVICE CATALOGUE</h2>
          <p className="text-[13px] font-bold text-cream/80 mt-1 italic">Complete Menu of Premium Services</p>
        </div>

        {/* Audience Selector Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          {[
            { id: 'ALL', label: 'ALL SERVICES' },
            { id: 'WOMEN', label: 'WOMEN\'S MENU' },
            { id: 'MEN', label: 'MEN\'S MENU' },
            { id: 'KIDS', label: 'KIDS\' MENU' }
          ].map((aud) => (
            <button
              key={aud.id}
              onClick={() => handleAudienceChange(aud.id)}
              className={`px-5 py-2 rounded-full text-[10px] font-black tracking-widest uppercase border transition-all ${
                activeAudience === aud.id
                  ? 'bg-cream text-white border-cream shadow-sm scale-105'
                  : 'bg-white text-cream border-cream/15 hover:border-cream/40 hover:bg-[#FFF0F2]'
              }`}
            >
              {aud.label}
            </button>
          ))}
        </div>

        {/* Main Catalogue Categories Summary Cards (Client's New Request) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {MAIN_CATALOGUE_CATEGORIES.filter(cat => cat.audiences.includes(activeAudience)).map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleExploreCategory(cat.id)}
              className="bg-white p-6 md:p-8 rounded-2xl border border-cream/15 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer group/card hover:border-cream/35"
            >
              {/* Gold Ring Badge */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className={`w-7 h-7 rounded-full border ${
                  cat.num === 'SIGNATURE' 
                    ? 'border-cream bg-cream/10 flex items-center justify-center' 
                    : 'border-cream/30 flex items-center justify-center'
                }`}>
                  {cat.num === 'SIGNATURE' ? (
                    <div className="w-2.5 h-2.5 rounded-full bg-cream"></div>
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-cream/45"></div>
                  )}
                </div>
                <span className="text-[10px] font-black tracking-widest text-cream/50 uppercase">
                  {cat.num}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-[24px] font-bold text-cream tracking-wide mb-6">
                {cat.title}
              </h3>

              {/* Features List */}
              <ul className="space-y-1">
                {cat.subcategories.map((sub, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center py-2.5 border-b border-cream/5 last:border-0 text-cream/70 group-hover/card:text-cream/90 hover:!text-cream font-bold text-[12.5px] transition-colors group/sub cursor-pointer"
                  >
                    <span>{sub}</span>
                    <span className="text-cream/30 group-hover/sub:text-cream group-hover/sub:translate-x-1.5 transition-all duration-200">
                      →
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Detailed Sub-Catalogue Overlay */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 bg-[#FFF0F2] z-50 overflow-y-auto"
          >
            {/* Detail Page Container */}
            <div className="max-w-[1400px] mx-auto px-6 py-12">
              
              {/* Navigation Bar */}
              <div className="flex items-center justify-between mb-12 pb-6 border-b border-cream/10">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-2 text-cream font-extrabold text-[11px] tracking-[0.2em] uppercase hover:text-cream/70 transition-colors"
                >
                  ← Back to Catalogue
                </button>
                
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black tracking-widest text-cream/40 uppercase">
                    Category: {selectedCategory}
                  </span>
                </div>
              </div>

              {/* Header Title */}
              <div className="text-center mb-16">
                <span className="text-[10px] tracking-[0.3em] font-extrabold text-cream/40 uppercase block mb-2">
                  Solo Beauty sirsa
                </span>
                <h2 className="text-[36px] font-serif font-black text-cream uppercase tracking-wide">
                  {selectedCategory} SERVICES
                </h2>
                <div className="w-16 h-[1px] bg-cream/30 mx-auto mt-4"></div>
              </div>

              {/* Detailed Service Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
                {getFilteredCatalogue(activeAudience, selectedCategory).map((category) => (
                  <div 
                    key={category.title} 
                    className="bg-white p-6 md:p-8 rounded-2xl border border-cream/15 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
                  >
                    {/* Category Sub-Header */}
                    <div className="mb-5 pb-3 border-b border-cream/10 text-cream">
                      <span className="text-[9px] font-black text-cream/40 uppercase tracking-widest block">
                        {category.cat}
                      </span>
                      <h3 className="text-[15px] font-black text-cream uppercase tracking-wider mt-1">
                        {category.title}
                      </h3>
                    </div>

                    {/* Service Items List */}
                    <ul className="space-y-3.5 flex-grow">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex justify-between items-center gap-3 group/item">
                          <div className="flex items-center gap-2 max-w-[70%] text-cream">
                            <span className="text-[13px] font-semibold text-cream/90 group-hover/item:text-cream transition-colors truncate">
                              {item.name}
                            </span>
                            {item.star && <span className="text-[#DF9F28] text-[10px] shrink-0">★</span>}
                          </div>
                          <div className="flex-grow border-b border-dotted border-cream/20 mb-1 opacity-40 group-hover/item:opacity-85 transition-opacity"></div>
                          <div className="flex items-center gap-2.5 shrink-0 text-cream">
                            <span className="text-[13.5px] font-black text-cream">
                              ₹{item.price}
                            </span>
                            <a
                              href={waLink(`Hi Solo Beauty, I want to book: ${item.name} (${category.title}) for ₹${item.price}`)}
                              target="_blank"
                              rel="noreferrer"
                              className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center opacity-40 sm:opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 hover:bg-emerald-500 hover:text-white"
                              title={`Book ${item.name} on WhatsApp`}
                            >
                              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 2.028 14.108.991 11.483.991c-5.443 0-9.87 4.374-9.874 9.802-.001 1.738.486 3.431 1.411 4.937l-.989 3.62 3.734-.967zm12.135-6.758c-.328-.164-1.94-.959-2.242-1.07-.302-.11-.522-.165-.742.164-.22.33-.85.742-1.041.962-.192.22-.384.247-.712.082-.328-.164-1.385-.51-2.637-1.63-1.002-.895-1.68-2.001-1.876-2.33-.197-.33-.021-.508.143-.671.147-.147.328-.384.493-.577.165-.192.22-.33.329-.55.109-.22.055-.412-.027-.577-.082-.164-.742-1.788-1.016-2.448-.268-.64-.537-.55-.742-.56l-.632-.01c-.22 0-.577.082-.88.412-.302.33-1.154 1.128-1.154 2.748 0 1.62 1.182 3.19 1.346 3.41.164.22 2.325 3.55 5.632 4.978.786.34 1.4.542 1.88.697.79.25 1.51.215 2.079.129.635-.096 1.94-.796 2.215-1.564.274-.769.274-1.43.192-1.564-.083-.134-.302-.215-.63-.379z"/>
                              </svg>
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom Back Button */}
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="border-2 border-cream text-cream text-[11px] tracking-[0.22em] font-extrabold uppercase px-8 py-3.5 rounded hover:bg-cream hover:text-white transition-all shadow-sm"
                >
                  Back to Catalogue
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
