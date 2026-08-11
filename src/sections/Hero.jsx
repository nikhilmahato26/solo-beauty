import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt, FaCheck, FaCalendarAlt, FaStar, FaHeart, FaSmile, FaMagic } from 'react-icons/fa'
import { BUSINESS } from '../constants/site'
import { waLink } from '../utils/links'

export default function Hero() {
  const serviceCategories = [
    { label: 'Bridal Booking', icon: <FaHeart className="text-cream text-sm" /> },
    { label: 'Party Makeup', icon: <FaStar className="text-cream text-sm" /> },
    { label: 'Personal Grooming', icon: <FaMagic className="text-cream text-sm" /> },
    { label: 'All Beauty Services', icon: <FaSmile className="text-cream text-sm" /> },
  ]

  const leftBadges = [
    'Trained & Certified Experts',
    'Hygienic & Safe',
    'Premium Products',
    'On-Time Service',
    '100% Customer Satisfaction',
  ]

  return (
    <section className="relative w-full bg-[#FFF0F2] pt-8 pb-16 border-b border-cream/20">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Branding & Features */}
        <div className="lg:col-span-4 flex flex-col justify-center text-cream">
          <h1 className="font-serif text-[45px] md:text-[60px] font-black tracking-tight leading-[0.95] uppercase">
            BEAUTY.<br />
            CONFIDENCE.<br />
            YOU.
          </h1>
          
          <p className="font-script text-3xl text-cream-soft my-4 leading-none">
            Feel beautiful. Be beautiful.
          </p>

          <p className="text-[14px] font-bold text-cream/80 mb-6 max-w-sm leading-relaxed">
            Premium Beauty & Wellness Services for Women, Men & Kids.
          </p>

          {/* Checklist */}
          <div className="flex flex-wrap gap-x-4 gap-y-3 mb-8 max-w-md">
            {leftBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 bg-white/60 border border-cream/10 px-3 py-1.5 rounded-full shadow-sm">
                <div className="w-4 h-4 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center shrink-0">
                  <FaCheck size={8} className="text-cream" />
                </div>
                <span className="text-[10px] font-extrabold tracking-wide uppercase text-cream/90">{badge}</span>
              </div>
            ))}
          </div>

          {/* Doorstep Badge */}
          <div className="w-fit bg-cream text-white font-black text-[10px] tracking-[0.15em] uppercase px-5 py-3 rounded-full flex items-center justify-center gap-1.5 shadow-md">
            <span>DUBAI-BASED DOORSTEP SERVICES</span>
            <span className="text-[9px]">★</span>
            <span>FIRST TIME IN SIRSA</span>
            <span className="text-[9px]">★</span>
          </div>
        </div>

        {/* Center Column: Model Banner Image & Booking Overlay */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
          <div className="w-full max-w-[340px] aspect-[3/4.2] rounded-[24px] overflow-hidden border border-cream/20 shadow-lg relative bg-white">
            <img 
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80" // Indian Bride Model
              alt="Solo Beauty Model" 
              className="w-full h-full object-cover"
            />
            {/* Soft pink bottom overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cream/20 via-transparent to-transparent"></div>
          </div>

          {/* Floating WhatsApp Booking Card */}
          <div className="absolute bottom-[-24px] bg-white border border-cream/15 rounded-2xl p-4 flex items-center gap-3.5 shadow-lg w-full max-w-[300px]">
            <div className="w-12 h-12 rounded-full bg-whatsapp flex items-center justify-center shrink-0 shadow-md">
              <FaWhatsapp size={26} className="text-white animate-pulse" />
            </div>
            <div className="flex flex-col text-cream leading-tight">
              <span className="text-[9px] tracking-[0.2em] font-extrabold uppercase text-cream/70">BOOKING & INQUIRY</span>
              <a href={waLink(`Hi, I would like to book an appointment with Solo Beauty.`)} target="_blank" rel="noreferrer" className="text-[20px] font-black tracking-wide hover:underline">
                {BUSINESS.phone}
              </a>
              <span className="text-[10px] text-cream/60 font-semibold mt-0.5">We're just a message away!</span>
            </div>
          </div>
        </div>

        {/* Right Column: Appointment Booking Box */}
        <div className="lg:col-span-4 mt-8 lg:mt-0 flex justify-center">
          <div className="w-full max-w-[340px] bg-white border border-cream/15 rounded-[20px] p-6 shadow-md flex flex-col text-cream">
            <div className="text-center border-b border-cream/10 pb-4 mb-5">
              <h3 className="text-lg font-black tracking-wider uppercase">Book Your Appointment</h3>
              <p className="text-[11px] text-cream/60 font-bold mt-1">We're here to pamper you!</p>
            </div>

            {/* Services Icons List */}
            <div className="space-y-3 mb-6">
              {serviceCategories.map((cat) => (
                <div key={cat.label} className="flex items-center justify-between p-3 rounded-lg border border-cream/5 bg-ink/35 hover:bg-ink/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white border border-cream/15 flex items-center justify-center shadow-sm shrink-0">
                      {cat.icon}
                    </div>
                    <span className="text-[11.5px] font-extrabold tracking-wider uppercase text-cream/90">{cat.label}</span>
                  </div>
                  <FaCheck size={9} className="text-cream/50" />
                </div>
              ))}
            </div>

            {/* CTAs */}
            <a 
              href={waLink(`Hi Solo Beauty, I want to book an appointment.`)}
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-whatsapp text-white py-3.5 rounded-lg font-extrabold text-[11px] tracking-[0.18em] uppercase flex items-center justify-center gap-2 hover:bg-opacity-95 transition-all shadow-md"
            >
              <FaWhatsapp size={16} />
              <span>BOOK NOW ON WHATSAPP</span>
            </a>

            <div className="text-center mt-4">
              <span className="text-[10px] text-cream/60 font-bold">or Call us: </span>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="text-[13px] font-extrabold hover:underline">
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
