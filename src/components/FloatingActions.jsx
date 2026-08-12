import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa'
import { waLink } from '../utils/links'
import { BUSINESS } from '../constants/site'

export default function FloatingActions() {
  const whatsappUrl = waLink('Hi Solo Beauty, I want to book an appointment.')

  return (
    <>
      {/* Sticky Vertical WhatsApp Banner on the Right Edge */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed right-0 top-[40%] -translate-y-1/2 z-50 bg-[#9B1D44] text-white py-5 px-2.5 rounded-l-2xl flex flex-col items-center gap-3 shadow-lg hover:bg-opacity-95 transition-all border-l border-y border-white/10 group cursor-pointer"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <span className="text-[10px] font-black tracking-[0.25em] uppercase text-white/90 group-hover:text-white transition-colors">
          WHATSAPP
        </span>
        <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm shrink-0">
          <FaWhatsapp size={16} />
        </div>
      </a>

      {/* Floating Circular Buttons Stack in the Bottom Right Corner */}
      <div className="fixed bottom-10 right-6 z-40 flex flex-col gap-3.5 items-center">
        {/* YouTube Float */}
        <a
          href={BUSINESS.socials.youtube}
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="YouTube"
        >
          <FaYoutube size={20} />
        </a>

        {/* Instagram Float */}
        <a
          href={BUSINESS.socials.instagram}
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </a>

        {/* WhatsApp Float (Slightly larger, at the bottom) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp Chat"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </>
  )
}
