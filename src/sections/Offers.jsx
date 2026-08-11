import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { waLink } from '../utils/links'

const PACKAGES = [
  {
    original: '₹299',
    price: '₹299',
    points: '6',
    items: ['Hair Cut', 'Beard Trim', 'Hair Wash', 'Face Wash'],
    popular: false,
  },
  {
    original: '₹399',
    price: '₹399',
    points: '8',
    items: ['Hair Cut', 'Beard Trim', 'Hair Wash', 'Massage Chair (15 Min)'],
    popular: true,
  },
  {
    original: '₹329',
    price: '₹329',
    points: '8',
    items: ['Hair Cut', 'Beard Trim', 'Hair Wash', 'Head Massage (15 Min)'],
    popular: false,
  },
  {
    original: '₹649',
    price: '₹649',
    points: '10',
    items: ['Hair Cut', 'Beard Trim', 'Hair Colour', 'De-Tan'],
    popular: false,
  },
  {
    original: '₹799',
    price: '₹799',
    points: '12',
    items: ['Hair Cut', 'Beard Trim', 'Dandruff Hair Spa'],
    popular: false,
  },
  {
    original: '₹999',
    price: '₹999',
    points: '18',
    items: ['Hair Cut', 'Beard Trim', 'Golden Facial'],
    popular: true,
  },
]

export default function Offers() {
  return (
    <section id="offers" className="py-24 md:py-36 bg-[#8c2646] text-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        <div className="text-center mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-12 h-px bg-white/40" />
            <span className="text-white/80 text-lg">✦</span>
            <span className="w-12 h-px bg-white/40" />
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="relative bg-white p-8 md:p-10 flex flex-col justify-between shadow-lg rounded-xl"
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8c2646] text-white font-bold text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
                  Popular
                </div>
              )}

              <div className="text-center mb-10">
                <div className="text-[10px] tracking-[0.2em] text-[#8c2646]/60 uppercase mb-2">Package</div>
                <div className="text-[12px] text-[#8c2646]/50 line-through mb-1">{pkg.original}</div>
                <div className="h-display text-5xl md:text-[64px] text-[#8c2646] mb-3">{pkg.price}</div>
                <div className="text-[12px] text-[#8c2646]/80 font-medium">Earn {pkg.points} reward points</div>
              </div>

              <ul className="mb-12 space-y-4">
                {pkg.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] text-[#8c2646] font-medium">
                    <span className="text-[#8c2646]/50 text-[10px]">●</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-3">
                <a
                  href={waLink(`Hi, I want to book the ${pkg.price} combo: ${pkg.items.join(', ')}`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`block text-center w-full py-4 rounded-lg text-[11px] font-bold tracking-widest uppercase transition-colors ${
                    pkg.popular
                      ? 'bg-[#8c2646] text-white hover:bg-[#721e38]'
                      : 'bg-transparent border border-[#8c2646] text-[#8c2646] hover:bg-[#8c2646]/5'
                  }`}
                >
                  Book This Combo
                </a>
                <a
                  href={waLink(`Hi, I want to pay advance for the ${pkg.price} combo.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center w-full py-4 rounded-lg text-[11px] font-bold tracking-widest uppercase bg-transparent border border-[#8c2646]/30 text-[#8c2646]/80 hover:text-[#8c2646] hover:bg-[#8c2646]/5 transition-colors"
                >
                  Pay Advance
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 text-center text-[12px] text-white/60 max-w-2xl mx-auto"
        >
          Discounted prices and rewards are valid only with advance payment. Actual pricing may vary based on hair length and service complexity.
        </motion.div>

      </div>
    </section>
  )
}
