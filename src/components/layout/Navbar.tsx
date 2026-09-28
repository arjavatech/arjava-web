import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem { label: string; to: string }

const NAV_ITEMS: NavItem[] = [
  { label: 'Home',         to: '/' },
  { label: 'About Us',     to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Our Products', to: '/products' },
  { label: 'Contact Us',   to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-dark-base/80 backdrop-blur-xl border-b border-dark-line shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-dark-base border-b border-dark-line/50',
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0">
            <img
              src="/image/Arjava Logo.png"
              alt="Arjava"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </NavLink>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg block',
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-slate-200',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-teal-400 to-sky-400"
                          transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary text-sm px-5 py-2.5"
              >
                Get a Proposal
              </motion.button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {createPortal(
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              key="sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 z-50 h-full w-72 bg-dark-surface border-l border-dark-line shadow-2xl flex flex-col lg:hidden"
            >
              {/* Sidebar header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-dark-line flex-shrink-0">
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                  <img
                    src="/image/Arjava Logo.png"
                    alt="Arjava"
                    className="h-8 w-auto object-contain brightness-0 invert"
                  />
                </NavLink>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <ul className="flex flex-col gap-1 px-4 py-5 flex-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors',
                          isActive
                            ? 'bg-teal-400/10 text-teal-400 border border-teal-400/20'
                            : 'text-slate-400 hover:text-white hover:bg-white/5',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <div className="px-4 pb-6">
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  <button className="btn-primary w-full justify-center">Get a Proposal</button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body
      )}
    </nav>
  )
}
