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

        {/* Location Map */}
        <motion.div variants={colVariants}>
          <h6 className="gradient-text text-xs font-bold uppercase tracking-widest mb-5">
            Our Location
          </h6>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7479910917946!2d80.14273187428608!3d12.923912115923658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ee2295d5c29%3A0xf83071011e4a93e5!2s19%2C%20Ganesh%20Nagar%20Main%20Rd%2C%20Mahalakshmi%20Nagar%2C%20Tambaram%2C%20Chennai%2C%20Tamil%20Nadu%20600059!5e0!3m2!1sen!2sin!4v1697103920581!5m2!1sen!2sin"
            className="w-full rounded-xl border border-dark-line"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Arjava Office Location"
          />
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
