import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube, FaEnvelope, FaPhoneAlt, FaRegClock, FaHeart } from 'react-icons/fa'
import { BUSINESS, NAV_LINKS } from '../constants/site'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FFF0F2] text-cream pt-12 pb-8 border-t border-cream/20">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Main Footer Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-cream/10 text-[12px] font-bold">
          
          {/* Logo & Social Links */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.jpeg" 
                alt="SD Logo" 
                className="h-14 w-14 rounded-full object-cover border border-cream/30"
              />
              <div className="flex flex-col font-serif leading-none">
                <span className="text-[13px] font-black uppercase tracking-wider">SOLO BEAUTY</span>
                <span className="text-[8px] tracking-[0.2em] font-sans border-t border-cream/25 mt-0.5 pt-0.5 uppercase">SIRSA</span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3.5 text-cream/70 mt-2">
              <a href={BUSINESS.socials.whatsapp} target="_blank" rel="noreferrer" className="hover:text-cream transition-colors"><FaWhatsapp size={15} /></a>
              <a href={BUSINESS.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-cream transition-colors"><FaInstagram size={15} /></a>
              <a href={BUSINESS.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-cream transition-colors"><FaFacebookF size={13} /></a>
              <a href={BUSINESS.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-cream transition-colors"><FaYoutube size={15} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] font-extrabold uppercase text-cream/60 mb-4">QUICK LINKS</h4>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-bold">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="hover:text-cream-soft hover:underline transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#careers" 
                className="hover:text-cream-soft hover:underline transition-all"
              >
                CAREERS
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] font-extrabold uppercase text-cream/60 mb-4">CONTACT US</h4>
            <div className="space-y-2.5 text-[11px]">
              <div className="flex items-center gap-2">
                <FaPhoneAlt size={10} className="text-cream/55" />
                <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:underline">{BUSINESS.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope size={10} className="text-cream/55" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:underline">{BUSINESS.email}</a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-[10px] tracking-[0.2em] font-extrabold uppercase text-cream/60 mb-4">OPENING HOURS</h4>
            <div className="flex items-start gap-2 text-[11px]">
              <FaRegClock size={11} className="text-cream/55 mt-0.5 shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold">Monday to Sunday</span>
                <span className="text-cream/85 font-semibold mt-0.5">{BUSINESS.openHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-[10px] font-semibold text-cream/60 tracking-wider uppercase">
          <span>© 2026 {BUSINESS.name} Sirsa. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span>Designed by</span>
            <img 
              src="/adsindia-logo.png" 
              alt="AdsIndia 24x7" 
              className="h-9 w-auto object-contain mix-blend-multiply" 
            />
          </div>
        </div>

      </div>
    </footer>
  )
}
