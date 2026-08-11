import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { BRIDAL_PACKAGES, BRIDAL_INCLUDES } from '../constants/site'
import SectionEyebrow from '../components/SectionEyebrow'
import TickIcon from '../components/TickIcon'
import ArrowIcon from '../components/ArrowIcon'
import { waLink } from '../utils/links'

export default function Bridal() {
  const [active, setActive] = useState(null)

  const bridalImages = [
    { src: "https://images.pexels.com/photos/29133472/pexels-photo-29133472.jpeg", alt: "Bridal makeup look" },
    { src: "https://images.pexels.com/photos/14089108/pexels-photo-14089108.jpeg", alt: "Bridal jewelry detail" },
    { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=80", alt: "Bridal portrait" }
  ]

  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + bridalImages.length) % bridalImages.length)),
    [bridalImages.length]
  )
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % bridalImages.length)),
    [bridalImages.length]
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, prev, next])

  return (
    <section id="bridal" className="py-24 md:py-36 bg-cream text-ink relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <SectionEyebrow dark>The Bridal Atelier</SectionEyebrow>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="h-display text-5xl md:text-7xl lg:text-[88px] text-ink leading-[0.95]"
            >
              Your Dream<br />
              <span className="italic">Bridal Look</span><br />
              Starts Here.
            </motion.h2>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            custom={2}
            className="lg:col-span-5"
          >
            <p className="text-ink/70 text-[15px] leading-relaxed mb-6">
              A bridal moment is more than makeup — it is a quiet ritual of beauty. Our bridal artists craft each look with precision: skin prep, signature contour, custom palette, and a finish that photographs as beautifully as it feels.
            </p>
            <div className="space-y-3">
              {BRIDAL_PACKAGES.map((p) => (
                <div key={p.name} className="flex items-center justify-between border-b border-ink/15 pb-3">
                  <span className="text-ink/80">{p.name}</span>
                  <span className="h-display text-xl text-ink">{p.price}</span>
                </div>
              ))}
            </div>
            <a href={waLink('Hi, I would like a bridal makeup enquiry.')} target="_blank" rel="noreferrer" className="pill dark mt-8 inline-flex">
              Bridal Enquiry <ArrowIcon />
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-12 gap-4 md:gap-6"
        >
          <motion.button variants={fadeUp} onClick={() => setActive(0)} className="md:col-span-5 img-zoom rounded-2xl overflow-hidden block w-full outline-none focus-visible:ring-2 focus-visible:ring-gold/70 text-left">
            <img src={bridalImages[0].src} alt={bridalImages[0].alt} className="w-full h-[420px] md:h-[600px] object-cover pointer-events-none" />
          </motion.button>
          <motion.div variants={fadeUp} custom={1} className="md:col-span-4 space-y-4 md:space-y-6">
            <button type="button" onClick={() => setActive(1)} className="img-zoom rounded-2xl overflow-hidden block w-full outline-none focus-visible:ring-2 focus-visible:ring-gold/70 text-left">
              <img src={bridalImages[1].src} alt={bridalImages[1].alt} className="w-full h-[200px] md:h-[290px] object-cover pointer-events-none" />
            </button>
            <button type="button" onClick={() => setActive(2)} className="img-zoom rounded-2xl overflow-hidden block w-full outline-none focus-visible:ring-2 focus-visible:ring-gold/70 text-left">
              <img src={bridalImages[2].src} alt={bridalImages[2].alt} className="w-full h-[200px] md:h-[290px] object-cover pointer-events-none" />
            </button>
          </motion.div>
          <motion.div variants={fadeUp} custom={2} className="md:col-span-3">
            <div className="bg-ink text-cream rounded-2xl p-7 h-full flex flex-col justify-between">
              <div>
                <div className="eyebrow text-gold mb-4">Includes</div>
                <ul className="space-y-3 text-[13.5px] text-cream/80">
                  {BRIDAL_INCLUDES.map((it) => (
                    <li key={it} className="flex gap-2"><span className="mt-1"><TickIcon /></span>{it}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <div className="eyebrow text-cream/40">From</div>
                <div className="h-display text-4xl text-gold">₹18,000</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-deep/95 backdrop-blur-sm p-4 md:p-10"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 text-cream/60 hover:text-cream transition"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous"
              className="absolute left-3 md:left-8 text-cream/60 hover:text-cream transition"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <motion.img
              key={active}
              src={bridalImages[active].src}
              alt={bridalImages[active].alt}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next"
              className="absolute right-3 md:right-8 text-cream/60 hover:text-cream transition"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[12px] tracking-wide text-cream/60">
              {active + 1} / {bridalImages.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
