import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaChartLine, FaUsers, FaChalkboardTeacher, FaCrown } from 'react-icons/fa'
import { waLink } from '../utils/links'

const CAREER_PATH_LEVELS = [
  {
    level: '01',
    title: 'Trainee',
    bullets: [
      'Basic Beauty Skills',
      'Hygiene & Grooming Standards',
      'Practical Training'
    ]
  },
  {
    level: '02',
    title: 'Junior Beautician',
    bullets: [
      'Salon Service Execution',
      'Customer Handling',
      'Service Quality Development'
    ]
  },
  {
    level: '03',
    title: 'Professional Beautician – L1',
    bullets: [
      'Advanced Beauty Services',
      'Product Knowledge',
      'Customer Satisfaction & Re-booking'
    ]
  },
  {
    level: '04',
    title: 'Professional Beautician – L2',
    bullets: [
      'Specialized Beauty Skills',
      'Premium Services',
      'Sales & Performance Excellence'
    ]
  },
  {
    level: '05',
    title: 'Senior Beauty Professional',
    bullets: [
      'Team Support & Mentoring',
      'Customer Retention',
      'High-Performance Responsibilities'
    ]
  },
  {
    level: '06',
    title: 'Star Professional / Team Leader',
    bullets: [
      'Team Leadership',
      'Target Management',
      'Training & Performance Monitoring'
    ]
  },
  {
    level: '07',
    title: 'Solo Beauty Trainer',
    bullets: [
      'Beautician Training',
      'Skill Development',
      'New Talent Mentoring'
    ]
  },
  {
    level: '08',
    title: 'Master Trainer / Beauty Coach',
    bullets: [
      'Advanced Professional Training',
      'Trainer Development',
      'Leadership & Academy Growth'
    ]
  }
]

export default function CareerPromise() {
  const [showPathOverlay, setShowPathOverlay] = useState(false)

  // Listen for hash changes to trigger Careers overlay sub-page
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#careers' || window.location.hash === '#career-path') {
        setShowPathOverlay(true)
      }
    }

    // Check hash on mount
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const closeOverlay = () => {
    setShowPathOverlay(false)
    if (window.location.hash === '#careers' || window.location.hash === '#career-path') {
      window.history.pushState("", document.title, window.location.pathname + window.location.search)
    }
  }

  const steps = [
    { icon: <FaGraduationCap />, label: 'Learn', desc: 'Acquire premium skills and techniques' },
    { icon: <FaBriefcase />, label: 'Perform', desc: 'Deliver exceptional services to clients' },
    { icon: <FaChartLine />, label: 'Grow', desc: 'Advance your career and earning potential' },
    { icon: <FaUsers />, label: 'Lead', desc: 'Inspire and guide team members' },
    { icon: <FaChalkboardTeacher />, label: 'Train', desc: 'Mentor others in the Solo Beauty style' },
    { icon: <FaCrown />, label: 'Become a Master', desc: 'Become a recognized master of your craft' }
  ]

  // Lock body scroll when overlay is active
  useEffect(() => {
    if (showPathOverlay) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showPathOverlay])

  return (
    <section className="py-20 bg-[#FFF0F2] text-cream relative overflow-hidden border-b border-cream/20">
      {/* Decorative background blur shapes */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-cream/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cream/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] font-black text-cream/60 uppercase block mb-3">
            Join Our Team
          </span>
          <h2 className="text-[32px] md:text-[40px] font-serif font-bold text-cream tracking-wide uppercase">
            Career Promise
          </h2>
          <div className="w-16 h-[2px] bg-cream/30 mx-auto mt-4"></div>
        </div>

        {/* Pathway Timeline Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4 mb-20 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-cream/15 rounded-2xl p-5 flex flex-col items-center text-center relative group hover:border-cream/35 transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              {/* Connector line (desktop only) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-[40px] left-[65%] right-[-35%] h-[1px] bg-gradient-to-r from-cream/20 to-transparent z-0"></div>
              )}

              {/* Step number */}
              <span className="absolute top-3 right-3 text-[9px] font-black text-cream/20 tracking-wider">
                0{idx + 1}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-cream text-white flex items-center justify-center text-lg mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Label */}
              <h3 className="text-[14px] font-black tracking-wider uppercase mb-2 text-cream">
                {step.label}
              </h3>

              {/* Description */}
              <p className="text-[11px] text-cream/70 leading-normal font-semibold">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-cream/15 rounded-3xl p-8 md:p-12 text-center max-w-[850px] mx-auto shadow-sm relative"
        >
          {/* Large Quote Icon Background */}
          <span className="absolute top-4 left-6 text-[80px] font-serif text-cream/5 leading-none pointer-events-none select-none">
            “
          </span>

          <p className="text-lg md:text-2xl font-serif italic text-cream leading-relaxed mb-8">
            “Your Skills Build Your Career.<br className="hidden sm:inline" />
            Your Performance Builds Your Future with Solo Beauty.”
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <a
              href={waLink("Hi Solo Beauty, I am interested in career opportunities and want to know more about the Career Promise program.")}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-cream hover:bg-cream/90 text-white font-bold text-[11px] tracking-widest uppercase px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105"
            >
              Join Our Team
            </a>

            <button
              onClick={() => setShowPathOverlay(true)}
              className="inline-block border-2 border-cream text-cream font-bold text-[11px] tracking-widest uppercase px-8 py-3 rounded-full transition-all hover:bg-cream hover:text-white hover:scale-105"
            >
              View Career Growth Path
            </button>
          </div>
        </motion.div>

      </div>

      {/* Career Growth Path Full-Screen Overlay */}
      <AnimatePresence>
        {showPathOverlay && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 bg-[#FFF0F2] z-50 overflow-y-auto text-cream"
          >
            <div className="max-w-[1400px] mx-auto px-6 py-12">
              
              {/* Top Navigation */}
              <div className="flex items-center justify-between mb-12 pb-6 border-b border-cream/10">
                <button
                  onClick={closeOverlay}
                  className="flex items-center gap-2 text-cream font-extrabold text-[11px] tracking-[0.2em] uppercase hover:text-cream/70 transition-colors"
                >
                  ← Back to Careers
                </button>
                <span className="text-[10px] font-black tracking-widest text-[#DF9F28] uppercase">
                  Solo Beauty Academy
                </span>
              </div>

              {/* Title Header */}
              <div className="text-center mb-16">
                <span className="text-[10px] tracking-[0.3em] font-black text-cream/50 uppercase block mb-3">
                  🌸 Solo Beauty — Professional Career Path
                </span>
                <h2 className="text-[36px] font-serif font-black text-cream uppercase tracking-wide">
                  Career Growth Path
                </h2>
                <div className="w-16 h-[2px] bg-cream/30 mx-auto mt-4"></div>
              </div>

              {/* Levels Grid (8 Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
                {CAREER_PATH_LEVELS.map((lvl) => (
                  <div
                    key={lvl.level}
                    className="bg-white border border-cream/15 p-6 rounded-2xl flex flex-col justify-between hover:border-cream/35 transition-colors duration-300 shadow-sm group"
                  >
                    <div>
                      {/* Level Tag */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black tracking-wider text-[#DF9F28] uppercase">
                          Level {lvl.level}
                        </span>
                        <div className="w-2.5 h-2.5 rounded-full bg-cream/10 group-hover:bg-cream transition-colors duration-300"></div>
                      </div>

                      {/* Level Title */}
                      <h3 className="text-[16px] font-bold text-cream mb-4 uppercase tracking-wide">
                        {lvl.title}
                      </h3>

                      {/* Bullets List */}
                      <ul className="space-y-2">
                        {lvl.bullets.map((bullet, i) => (
                          <li key={i} className="text-[12px] text-cream/80 flex items-start gap-2 leading-relaxed font-medium">
                            <span className="text-[#DF9F28] shrink-0">→</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Career Promise Block */}
              <div className="bg-white border border-cream/15 rounded-3xl p-8 max-w-[850px] mx-auto text-center mb-12 shadow-sm">
                <h4 className="text-[11px] tracking-[0.3em] font-black text-cream/50 uppercase mb-4">
                  Our Promise to You
                </h4>
                
                {/* Learn -> Perform ... Path */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-[12px] font-black tracking-widest text-cream uppercase mb-6 bg-[#FFF0F2] py-3.5 px-6 rounded-xl w-fit mx-auto border border-cream/10">
                  <span>Learn</span>
                  <span className="text-[#DF9F28]">→</span>
                  <span>Perform</span>
                  <span className="text-[#DF9F28]">→</span>
                  <span>Grow</span>
                  <span className="text-[#DF9F28]">→</span>
                  <span>Lead</span>
                  <span className="text-[#DF9F28]">→</span>
                  <span>Train</span>
                  <span className="text-[#DF9F28]">→</span>
                  <span>Become a Master</span>
                </div>

                <p className="text-base font-serif italic text-cream leading-relaxed mb-6">
                  “Your Skills Build Your Career.<br />
                  Your Performance Builds Your Future with Solo Beauty.”
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={waLink("Hi Solo Beauty, I am interested in joining as a Trainee/Beautician and want to apply for the Career Growth Path.")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-cream hover:bg-cream/90 text-white font-bold text-[11px] tracking-widest uppercase px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105"
                  >
                    Apply Now
                  </a>
                  
                  <button
                    onClick={closeOverlay}
                    className="inline-block border-2 border-cream text-cream font-bold text-[11px] tracking-widest uppercase px-8 py-3 rounded-full transition-all hover:bg-cream hover:text-white hover:scale-105"
                  >
                    Close Path
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
