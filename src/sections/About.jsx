import { FaCheck, FaPlay, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { WHY_CHOOSE_ABOUT, TEAM_MEMBERS, INSTA_VIDEOS, BUSINESS } from '../constants/site'
import { waLink } from '../utils/links'

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#FFF0F2] border-b border-cream/20">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Column 1: Why Choose Solo Beauty? (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-cream/15 rounded-2xl p-6 shadow-sm flex flex-col justify-between text-cream">
          <div>
            <h3 className="text-[14px] font-black tracking-widest uppercase border-b border-cream/10 pb-3 mb-5">
              Why Choose Solo Beauty?
            </h3>
            
            <div className="space-y-4">
              {WHY_CHOOSE_ABOUT.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-cream/10 border border-cream/25 flex items-center justify-center shrink-0 mt-0.5">
                    <FaCheck size={7} className="text-cream" />
                  </div>
                  <span className="text-[12px] font-bold text-cream/90 uppercase tracking-wide leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <a 
            href={waLink("Hi Solo Beauty, I want to know more about your premium services.")}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-cream text-white font-extrabold text-[10px] tracking-[0.2em] uppercase py-3 rounded text-center shadow-md hover:bg-cream/90 transition-all mt-8"
          >
            KNOW MORE
          </a>
        </div>

        {/* Column 2: Our Professional Team (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-cream/15 rounded-2xl p-6 shadow-sm flex flex-col justify-between text-cream text-center">
          <div>
            <h3 className="text-[14px] font-black tracking-widest uppercase border-b border-cream/10 pb-3 mb-2">
              Our Professional Team
            </h3>
            <span className="text-[10px] text-cream/60 font-bold uppercase tracking-wider block mb-6">
              Experience. Expertise. Excellence.
            </span>

            {/* Team Members Avatar List */}
            <div className="flex items-center justify-center -space-x-4 overflow-hidden mb-8">
              {TEAM_MEMBERS.map((member) => (
                <div 
                  key={member.name} 
                  className="inline-block h-16 w-16 rounded-full ring-4 ring-white overflow-hidden shadow-md relative group shrink-0"
                >
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-cream/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[8px] text-white font-black uppercase tracking-wider">{member.name.split(' ')[0]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a 
            href={waLink("Hi Solo Beauty, I would like to book a consultation with your senior stylist.")}
            target="_blank"
            rel="noreferrer"
            className="w-full border-2 border-cream text-cream font-extrabold text-[10px] tracking-[0.2em] uppercase py-3 rounded text-center hover:bg-cream hover:text-white transition-all shadow-sm"
          >
            MEET OUR TEAM →
          </a>
        </div>

        {/* Column 3: Beauty In Action (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-cream/15 rounded-2xl p-6 shadow-sm flex flex-col justify-between text-cream text-center">
          <div>
            <h3 className="text-[14px] font-black tracking-widest uppercase border-b border-cream/10 pb-3 mb-2">
              Beauty in Action
            </h3>
            <span className="text-[10.5px] text-cream/65 font-bold uppercase leading-relaxed block mb-6">
              Watch our latest transformations & BTS on our social channels.
            </span>

            {/* Video Thumbnails */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {INSTA_VIDEOS.map((vid, idx) => (
                <div key={idx} className="aspect-[3/4.2] rounded-lg overflow-hidden relative shadow-sm bg-ink/30">
                  <img 
                    src={vid.img} 
                    alt="Transformation Video" 
                    className="w-full h-full object-cover"
                  />
                  {vid.hasPlay && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                      <div className="w-7 h-7 rounded-full bg-white/95 flex items-center justify-center shadow-md animate-pulse">
                        <FaPlay size={9} className="text-cream ml-0.5" />
                      </div>
                    </div>
                  )}
                  <a href={BUSINESS.socials.instagram} target="_blank" rel="noreferrer" className="absolute inset-0 bg-cream/10 opacity-0 hover:opacity-100 transition-opacity"></a>
                </div>
              ))}
            </div>

            {/* Social media icons line */}
            <div className="flex items-center justify-center gap-4 text-cream/70 mb-6">
              <a href={BUSINESS.socials.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-cream/15 flex items-center justify-center hover:bg-cream hover:text-white transition-all"><FaInstagram size={14} /></a>
              <a href={BUSINESS.socials.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-cream/15 flex items-center justify-center hover:bg-cream hover:text-white transition-all"><FaFacebookF size={13} /></a>
              <a href={BUSINESS.socials.youtube} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-cream/15 flex items-center justify-center hover:bg-cream hover:text-white transition-all"><FaYoutube size={14} /></a>
              <a href={BUSINESS.socials.whatsapp} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-cream/15 flex items-center justify-center hover:bg-cream hover:text-white transition-all"><FaWhatsapp size={14} /></a>
            </div>
          </div>

          <a 
            href={BUSINESS.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-cream text-white font-extrabold text-[10px] tracking-[0.2em] uppercase py-3 rounded text-center shadow-md hover:bg-cream/90 transition-all mt-auto"
          >
            WATCH MORE VIDEOS
          </a>
        </div>

      </div>
    </section>
  )
}
