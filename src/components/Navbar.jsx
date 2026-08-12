import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { NAV_LINKS, BUSINESS } from '../constants/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-ink border-b border-cream/20 z-50">
      {/* Top Banner */}
      <div className="w-full bg-[#FFF0F2] border-b border-cream/10 px-6 py-2 hidden md:block">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between text-[11px] font-semibold text-cream tracking-wide">
          <span>Welcome to Solo Beauty Sirsa - Where Beauty Meets Perfection</span>
          <div className="flex items-center gap-3">
            <span>Follow Us :</span>
            <a href={BUSINESS.socials.whatsapp} target="_blank" rel="noreferrer" className="hover:opacity-80"><FaWhatsapp size={13} /></a>
            <a href={BUSINESS.socials.instagram} target="_blank" rel="noreferrer" className="hover:opacity-80"><FaInstagram size={13} /></a>
            <a href={BUSINESS.socials.facebook} target="_blank" rel="noreferrer" className="hover:opacity-80"><FaFacebookF size={12} /></a>
            <a href={BUSINESS.socials.youtube} target="_blank" rel="noreferrer" className="hover:opacity-80"><FaYoutube size={13} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#top" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.jpeg" 
              alt="SD Logo" 
              className="h-20 w-20 rounded-full object-cover border border-cream/30"
              onError={(e) => {
                // fallback if image not found or loaded
                e.target.style.display = 'none'
              }}
            />
            <div className="flex flex-col text-cream font-bold leading-none">
              <span className="text-xl tracking-wider font-serif">SOLO BEAUTY</span>
              <span className="text-[10px] tracking-[0.25em] text-center border-t border-b border-cream/30 py-0.5 my-0.5">— SIRSA,BHATINDA —</span>
              <span className="text-[9px] tracking-[0.15em] font-normal">PROFESSIONAL HOME SERVICES</span>
            </div>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[12px] font-bold text-cream tracking-wider">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="hover:text-cream-soft transition-colors py-1 border-b-2 border-transparent hover:border-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Info Section */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-3 text-cream">
            <div className="p-2.5 rounded-full border border-cream/20 bg-ink">
              <FaPhoneAlt size={14} className="text-cream" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] tracking-wider text-cream/70 font-semibold uppercase">Booking & Inquiry</span>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="text-[18px] font-extrabold tracking-wide hover:underline text-cream leading-tight">
                {BUSINESS.phone}
              </a>
            </div>
          </div>

          <a 
            href="#book" 
            className="bg-cream text-white font-bold text-[11px] tracking-widest uppercase px-5 py-3 rounded hover:bg-cream/90 transition-all shadow-md"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Menu"
          className="lg:hidden text-cream"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-cream/15">
          <nav className="flex flex-col px-6 py-6 gap-4 text-cream font-bold text-[13px] tracking-wider">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setOpen(false)} 
                className="hover:text-cream-soft transition-colors border-b border-cream/5 pb-2"
              >
                {link.label}
              </a>
            ))}
            
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-3 text-cream">
                <FaPhoneAlt size={14} className="shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-wider text-cream/70 font-bold uppercase">Booking & Enquiries</span>
                  <a href={`tel:${BUSINESS.phoneRaw}`} className="text-[16px] font-extrabold tracking-wide hover:underline text-cream leading-tight">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
              <a 
                href="#book" 
                onClick={() => setOpen(false)} 
                className="bg-cream text-white text-center font-bold text-[12px] tracking-widest uppercase py-3 rounded shadow-md"
              >
                Book Appointment
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
