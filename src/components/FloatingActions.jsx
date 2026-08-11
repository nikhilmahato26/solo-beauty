import { FaWhatsapp } from 'react-icons/fa'
import { waLink } from '../utils/links'

export default function FloatingActions() {
  const whatsappUrl = waLink('Hi Solo Beauty, I want to book an appointment.')

  return (
    <>
      {/* Sticky Vertical WhatsApp Banner on the Right Edge */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed right-0 top-[45%] -translate-y-1/2 z-50 bg-[#9B1D44] text-white py-5 px-2.5 rounded-l-2xl flex flex-col items-center gap-3 shadow-lg hover:bg-opacity-95 transition-all border-l border-y border-white/10 group cursor-pointer"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <span className="text-[10px] font-black tracking-[0.25em] uppercase text-white/90 group-hover:text-white transition-colors">
          WHATSAPP
        </span>
        <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm shrink-0">
          <FaWhatsapp size={16} />
        </div>
      </a>

      {/* Floating Circular WhatsApp Bubble in the Bottom Right Corner */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  )
}
