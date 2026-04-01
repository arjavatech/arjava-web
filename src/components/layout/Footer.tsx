import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home',           to: '/' },
  { label: 'About Us',       to: '/about' },
  { label: 'Our Services',   to: '/services' },
  { label: 'Our Products',   to: '/products' },
  { label: 'Contact Us',     to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

const SOCIAL_LINKS = [
  { name: 'Facebook',  href: '#', Icon: Facebook  },
  { name: 'Instagram', href: '#', Icon: Instagram },
  { name: 'Twitter',   href: '#', Icon: Twitter   },
  { name: 'LinkedIn',  href: '#', Icon: Linkedin  },
  { name: 'YouTube',   href: '#', Icon: Youtube   },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const colVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-line">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="container mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >

        {/* Quick Explore */}
        <motion.div variants={colVariants}>
          <h6 className="gradient-text text-xs font-bold uppercase tracking-widest mb-5">
            Quick Explore
          </h6>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="group flex items-center gap-1 text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200"
                >
                  <span className="inline-block w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-teal-400">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Us */}
        <motion.div variants={colVariants}>
          <h6 className="gradient-text text-xs font-bold uppercase tracking-widest mb-5">
            Contact Us
          </h6>

          {/* India */}
          <p className="text-teal-400 text-xs font-semibold uppercase tracking-wide mb-2">
            India Office
          </p>
          <div className="flex items-start gap-2 mb-3">
            <MapPin size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
            <address className="not-italic text-sm text-slate-400 leading-relaxed">
              Arjava India Tech Pvt Ltd,<br />
              19, Ganesh Nagar Main Road,<br />
              Selaiyur, Chennai - 600073.
            </address>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Mail size={14} className="text-teal-400 flex-shrink-0" />
            <a href="mailto:arjavatech@gmail.com" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
              arjavatech@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <Phone size={14} className="text-teal-400 flex-shrink-0" />
            <span className="text-sm text-slate-400">044-35675035</span>
          </div>

          {/* USA */}
          <p className="text-teal-400 text-xs font-semibold uppercase tracking-wide mb-2">
            USA Office
          </p>
          <div className="flex items-start gap-2">
            <MapPin size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
            <address className="not-italic text-sm text-slate-400 leading-relaxed">
              Arjava Technologies,<br />
              2135 204th PL NE,<br />
              Sammamish, WA - 98974, USA.
            </address>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div variants={colVariants}>
          <h6 className="gradient-text text-xs font-bold uppercase tracking-widest mb-5">
            Follow Us
          </h6>
          <div className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map(({ name, href, Icon }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                className="w-10 h-10 rounded-xl border border-dark-line text-slate-400
                           flex items-center justify-center
                           hover:border-teal-400/50 hover:text-teal-400 hover:bg-teal-400/10
                           transition-colors duration-200"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>

          {/* Brand blurb */}
          <div className="mt-8">
            <img
              src="/image/Arjava Logo.png"
              alt="Arjava"
              className="h-8 w-auto object-contain brightness-0 invert mb-3 opacity-60"
            />
            <p className="text-xs text-slate-500 leading-relaxed">
              Full Stack IT Solutions — delivering innovative software and mobile engineering services worldwide.
            </p>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div variants={colVariants}>
          <h6 className="gradient-text text-xs font-bold uppercase tracking-widest mb-5">
            Our Location
          </h6>

          <div className="space-y-3">
            {/* India */}
            <a
              href="https://www.google.com/maps/search/19,+Ganesh+Nagar+Main+Road,+Selaiyur,+Chennai+600073"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-3 rounded-xl border border-dark-line bg-dark-card hover:border-teal-400/40 hover:bg-teal-400/5 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-400/20 transition-colors duration-200">
                <MapPin size={16} className="text-teal-400" />
              </div>
              <div className="min-w-0">
                <p className="text-white text-xs font-semibold mb-0.5">India Office</p>
                <p className="text-slate-500 text-[11px] leading-relaxed">Chennai, Tamil Nadu</p>
                <span className="inline-flex items-center gap-1 text-teal-400/70 text-[10px] font-medium mt-1 group-hover:text-teal-400 transition-colors">
                  View on Maps →
                </span>
              </div>
            </a>

            {/* USA */}
            <a
              href="https://www.google.com/maps/search/2135+204th+PL+NE,+Sammamish,+WA+98974"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-3 rounded-xl border border-dark-line bg-dark-card hover:border-sky-400/40 hover:bg-sky-400/5 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-400/20 transition-colors duration-200">
                <MapPin size={16} className="text-sky-400" />
              </div>
              <div className="min-w-0">
                <p className="text-white text-xs font-semibold mb-0.5">USA Office</p>
                <p className="text-slate-500 text-[11px] leading-relaxed">Sammamish, WA</p>
                <span className="inline-flex items-center gap-1 text-sky-400/70 text-[10px] font-medium mt-1 group-hover:text-sky-400 transition-colors">
                  View on Maps →
                </span>
              </div>
            </a>
          </div>
        </motion.div>

      </motion.div>

      {/* Copyright bar */}
      <div className="border-t border-dark-line py-4">
        <p className="text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Arjava Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
