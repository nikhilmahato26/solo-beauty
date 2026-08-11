import { FaStar, FaGoogle } from 'react-icons/fa'
import { GOOGLE_REVIEWS, BUSINESS } from '../constants/site'

export default function Testimonials() {
  return (
    <section className="py-12 bg-[#FFF0F2] border-b border-cream/20">
      <div className="max-w-[1400px] mx-auto px-6 bg-white border border-cream/15 rounded-2xl p-8 shadow-sm">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Google Rating Score */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-cream text-center lg:text-left border-b lg:border-b-0 lg:border-r border-cream/10 pb-6 lg:pb-0 lg:pr-8">
            <div className="flex items-center gap-2 mb-3">
              <img 
                src="/logo.jpeg" 
                alt="SD Logo" 
                className="h-10 w-10 rounded-full object-cover border border-cream/30"
              />
              <span className="text-[12px] font-black tracking-widest uppercase">SOLO BEAUTY</span>
            </div>
            
            <span className="text-[9px] tracking-[0.25em] font-extrabold uppercase text-cream/70">GOOGLE RATING</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-[48px] font-black leading-none">4.9</span>
              <div className="flex text-yellow-500 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={13} className="fill-current" />
                ))}
              </div>
            </div>
            <span className="text-[10px] text-cream/60 font-bold mt-1 uppercase tracking-wider">Based on 230+ Reviews</span>

            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noreferrer"
              className="mt-5 bg-cream text-white font-extrabold text-[9px] tracking-[0.18em] uppercase px-5 py-3 rounded shadow-md hover:bg-cream/90 transition-all text-center"
            >
              VIEW ALL REVIEWS
            </a>
          </div>

          {/* Right Column: 3 Customer Reviews */}
          <div className="lg:col-span-9 grid md:grid-cols-3 gap-5">
            {GOOGLE_REVIEWS.map((rev) => (
              <div 
                key={rev.name}
                className="bg-[#FFF0F2] rounded-xl border border-cream/10 p-4 shadow-sm flex flex-col justify-between relative min-h-[140px] text-cream"
              >
                {/* Google Icon indicator */}
                <div className="absolute top-4 right-4 text-cream/15">
                  <FaGoogle size={14} className="text-[#4285F4]" />
                </div>

                {/* Review Text */}
                <p className="text-[11.5px] font-semibold text-cream/80 italic leading-relaxed mb-4">
                  "{rev.text}"
                </p>

                {/* Reviewer Details */}
                <div className="flex items-center gap-2.5 border-t border-cream/5 pt-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-cream/15 shrink-0 bg-white">
                    <img 
                      src={rev.img} 
                      alt={rev.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[11px] font-black uppercase tracking-wide">{rev.name}</span>
                    <div className="flex text-yellow-500 gap-0.5 mt-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <FaStar key={i} size={8} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
