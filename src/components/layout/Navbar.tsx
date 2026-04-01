import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  to: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Our Products', to: '/products' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 bg-white"
      style={{ boxShadow: '0px 1px 1px rgba(0,0,0,0.25)' }}
    >
      <div className="flex items-center justify-between px-4 py-2 lg:px-6">
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0">
          <img
            src="/image/Arjava Logo.png"
            alt="Arjava Logo"
            className="h-[60px] w-[185px] object-contain"
          />
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.to} className="px-2 py-2">
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'font-semibold text-[#4B4B4B] opacity-60 hover:text-brand hover:opacity-100 hover:border-b-2 hover:border-brand transition-all pb-1',
                    isActive && 'text-brand opacity-100 border-b-2 border-brand',
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-brand focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block px-2 py-2 font-semibold text-[#4B4B4B] opacity-60 hover:text-brand hover:opacity-100 transition-all',
                      isActive && 'text-brand opacity-100',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
