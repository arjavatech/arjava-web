import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Our Products', to: '/products' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/p/Arjava-Technologies-100067001514838/', Icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/arjavatech', Icon: Instagram },
  { name: 'Twitter', href: '#', Icon: Twitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/arjavatech', Icon: Linkedin },
]

const OFFICES = [
  {
    label: 'India',
    company: 'Arjava India Tech Pvt Ltd',
    address: '19, Ganesh Nagar Main Road, Selaiyur, Chennai — 600073',
    mapsUrl: 'https://www.google.com/maps/search/19,+Ganesh+Nagar+Main+Road,+Selaiyur,+Chennai+600073',
    color: 'teal' as const,
  },
  {
    label: 'USA',
    company: 'Arjava Technologies',
    address: '2135 204th PL NE, Sammamish, WA — 98974',
    mapsUrl: 'https://www.google.com/maps/search/2135+204th+PL+NE,+Sammamish,+WA+98974',
    color: 'sky' as const,
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const colVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-line">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="container mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10"
      >

        {/* ── Col 1: Brand ─────────────────────────────────────── */}
        <motion.div variants={colVariants} className="flex flex-col gap-5">
          <Link to="/" className="inline-block">
            <img
              src="/image/Arjava Logo.png"
              alt="Arjava Technologies"
              className="h-9 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs sm:max-w-none md:max-w-xs">
            Full Stack IT Solutions — delivering innovative software and mobile
            engineering services for businesses worldwide.
          </p>

          {/* Social icons */}
          <div className="flex flex-wrap gap-2 mt-1">
            {SOCIAL_LINKS.map(({ name, href, Icon }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                className="w-9 h-9 rounded-lg border border-dark-line text-slate-500
                           flex items-center justify-center
                           hover:border-teal-400/50 hover:text-teal-400 hover:bg-teal-400/8
                           transition-colors duration-200"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── Col 2: Quick Links ───────────────────────────────── */}
        <motion.div variants={colVariants} className="sm:col-span-1">
          <h6 className="gradient-text text-xs font-bold uppercase tracking-widest mb-5">
            Quick Links
          </h6>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="group flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-teal-400/40 group-hover:bg-teal-400 transition-colors duration-200 flex-shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Col 3: Contact & Offices ─────────────────────────── */}
        <motion.div variants={colVariants} className="sm:col-span-2 md:col-span-1">
          <h6 className="gradient-text text-xs font-bold uppercase tracking-widest mb-5">
            Contact Us
          </h6>

          {/* Email & Phone */}
          <div className="space-y-2.5 mb-6">
            <a
              href="mailto:arjavatech@gmail.com"
              className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200 group"
            >
              <Mail size={14} className="text-teal-400 flex-shrink-0" />
              arjavatech@gmail.com
            </a>
            <div className="flex items-center gap-2.5 text-sm text-slate-400">
              <Phone size={14} className="text-teal-400 flex-shrink-0" />
              044-35675035
            </div>
          </div>

          {/* Office location cards */}
          <div className="space-y-2.5">
            {OFFICES.map((office) => (
              <a
                key={office.label}
                href={office.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-start gap-3 p-3 rounded-xl border bg-dark-card transition-all duration-200
                  ${office.color === 'teal'
                    ? 'border-dark-line hover:border-teal-400/35 hover:bg-teal-400/5'
                    : 'border-dark-line hover:border-sky-400/35 hover:bg-sky-400/5'
                  }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200
                  ${office.color === 'teal'
                    ? 'bg-teal-400/10 border border-teal-400/20 group-hover:bg-teal-400/20'
                    : 'bg-sky-400/10 border border-sky-400/20 group-hover:bg-sky-400/20'
                  }`}>
                  <MapPin size={14} className={office.color === 'teal' ? 'text-teal-400' : 'text-sky-400'} />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-snug mb-1">
                    {office.label} — {office.company}
                  </p>
                  <p className="text-slate-500 text-[11px] leading-relaxed">{office.address}</p>
                  <span className={`inline-block text-[10px] font-medium mt-1 transition-colors duration-200
                    ${office.color === 'teal'
                      ? 'text-teal-400/60 group-hover:text-teal-400'
                      : 'text-sky-400/60 group-hover:text-sky-400'
                    }`}>
                    View on Maps →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

      </motion.div>

      {/* Copyright bar */}
      <div className="border-t border-dark-line py-4 px-4">
        <p className="text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Arjava Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
