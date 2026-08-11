import { FaCheck, FaPercent, FaStar } from 'react-icons/fa'
import { UNBEATABLE_OFFERS, WHY_CHOOSE_ITEMS, PACKAGES } from '../constants/site'
import { waLink } from '../utils/links'
import { motion } from 'framer-motion'

export default function Offers() {
  return (
    <section className="py-16 bg-[#FFF0F2] border-b border-cream/20">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-10 text-center">
          <div className="h-[1px] bg-cream/30 flex-grow max-w-[100px] hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <h2 className="text-[10px] tracking-[0.25em] font-extrabold text-cream/60 uppercase">UNBEATABLE OFFERS</h2>
            <p className="text-[12px] font-bold text-cream/80 mt-1 italic">Professional Services Starting At Unbelievable Prices!</p>
          </div>
          <div className="h-[1px] bg-cream/30 flex-grow max-w-[100px] hidden sm:block"></div>
        </div>

        {/* Layout Grid: 4 Promo Cards (8 cols) & Why Choose Us (4 cols) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Unbeatable Offers Cards */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {UNBEATABLE_OFFERS.map((deal) => (
              <div 
                key={deal.title}
                className="bg-white rounded-xl border border-cream/15 overflow-hidden shadow-sm flex flex-row relative h-[155px]"
              >
                {/* Most Loved Badge */}
                {deal.badge && (
                  <span className="absolute top-2 left-2 bg-cream text-white text-[8px] font-black tracking-widest px-2 py-0.5 rounded shadow-sm z-10">
                    {deal.badge}
                  </span>
                )}

                {/* Left Side: Content */}
                <div className="w-[60%] p-4 flex flex-col justify-between text-cream relative">
                  <div>
                    <span className="text-[10px] tracking-wider font-extrabold uppercase text-cream/70">{deal.title}</span>
                    <div className="text-[9px] text-cream/65 font-bold mt-1 uppercase">START WITH</div>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-[26px] font-black leading-none">₹{deal.price}</span>
                      <span className="text-[10px] font-extrabold text-cream/70 uppercase">ONLY</span>
                    </div>
                    {deal.subText && (
                      <div className="text-[9px] font-black text-cream-soft uppercase tracking-wide mt-1">
                        {deal.subText}
                      </div>
                    )}
                    <div className="text-[9.5px] text-cream/50 line-through mt-0.5">WAS ₹{deal.original}</div>
                  </div>

                  {/* Gold/Orange Save Badge */}
                  <div className="bg-[#DF9F28] text-white text-[9px] font-black px-3 py-1 rounded w-fit uppercase tracking-wider flex items-center gap-1 shadow-sm mt-1">
                    <FaPercent size={8} />
                    <span>{deal.discount}</span>
                  </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-[40%] h-full bg-ink/30 relative">
                  <img 
                    src={deal.img} 
                    alt={deal.title} 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay shadow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
                  
                  {/* Book now overlay button */}
                  <a 
                    href={waLink(`Hi Solo Beauty, I want to book the unbeatable offer: ${deal.title} for ₹${deal.price}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-cream/70 opacity-0 hover:opacity-100 transition-opacity text-white text-[10px] font-extrabold tracking-widest uppercase text-center p-2"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Box */}
          <div className="lg:col-span-4 bg-white rounded-xl border border-cream/15 p-6 shadow-sm flex flex-col justify-between text-cream h-full min-h-[330px]">
            <div>
              <div className="text-center border-b border-cream/10 pb-3 mb-5">
                <h3 className="text-[16px] font-black tracking-wider uppercase">Why Choose Us?</h3>
              </div>

              <div className="space-y-3.5">
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cream/15 flex items-center justify-center shrink-0">
                      <FaCheck size={9} className="text-cream" />
                    </div>
                    <span className="text-[12px] font-bold text-cream/90 uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Ribbon */}
            <div className="bg-cream text-white font-black text-[10px] tracking-[0.2em] uppercase py-2.5 rounded text-center w-full shadow-md mt-6">
              BEST QUALITY · BEST PRICE
            </div>
          </div>

        </div>

        {/* Combo Offers & Packages */}
        <div className="mt-20">
          <div className="flex items-center justify-center gap-4 mb-10 text-center">
            <div className="h-[1px] bg-cream/30 flex-grow max-w-[100px] hidden sm:block"></div>
            <div className="flex flex-col items-center">
              <h2 className="text-[12px] tracking-[0.25em] font-extrabold text-cream/60 uppercase">VALUE PACKAGES</h2>
              <p className="text-[14px] font-bold text-cream/80 mt-1 italic">Exclusive Salon Combos</p>
            </div>
            <div className="h-[1px] bg-cream/30 flex-grow max-w-[100px] hidden sm:block"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGES.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-white border border-cream/15 p-6 flex flex-col justify-between shadow-sm rounded-xl hover:shadow-md transition-shadow"
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#DF9F28] text-white font-black text-[9px] tracking-widest uppercase px-4 py-1.5 rounded shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4 border-b border-cream/10 pb-4">
                    <div>
                      <h3 className="text-[16px] font-black tracking-wider text-cream">COMBO {idx + 1}</h3>
                      <p className="text-[10px] text-cream/60 font-bold uppercase mt-1 tracking-wider">Earn {pkg.points} Rewards</p>
                    </div>
                    <div className="text-right">
                      <div className="text-[12px] text-cream/50 line-through">₹{pkg.original}</div>
                      <div className="text-[24px] font-black text-cream leading-none mt-1">₹{pkg.price}</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <FaStar size={10} className="text-[#DF9F28]" />
                        <span className="text-[13px] font-semibold text-cream/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={waLink(`Hi Solo Beauty, I want to book Combo ${idx + 1} for ${pkg.price}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center border-2 border-cream text-cream text-[10px] tracking-[0.2em] font-black uppercase py-2.5 rounded hover:bg-cream hover:text-white transition-colors"
                >
                  SELECT PACKAGE
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
