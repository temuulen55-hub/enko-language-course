import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import EnkoLogo from './EnkoLogo'

const primaryLinks = [
  { to: '/', label: 'Нүүр' },
  { to: '/about', label: 'Бидний тухай' },
  { to: '/courses', label: 'Сургалтууд' },
]

const moreLinks = [
  { to: '/teachers', label: 'Багш нар' },
  { to: '/testimonials', label: 'Сэтгэгдэл' },
]

const allLinks = [...primaryLinks, ...moreLinks]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMoreOpen(false)
  }, [location])

  const isHome = location.pathname === '/'
  const dark = !scrolled && isHome
  const moreActive = moreLinks.some((l) => l.to === location.pathname)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-white border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <EnkoLogo size={34} light={dark} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {primaryLinks.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? dark
                      ? 'text-white border-b-2 border-white'
                      : 'text-slate-900 border-b-2 border-slate-900'
                    : dark
                    ? 'text-white/70 hover:text-white'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {label}
              </Link>
            )
          })}

          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                moreActive
                  ? dark ? 'text-white border-b-2 border-white' : 'text-slate-900 border-b-2 border-slate-900'
                  : dark ? 'text-white/70 hover:text-white' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Дэлгэрэнгүй
              <ChevronDown size={14} className={`transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-1 w-44 bg-white border border-slate-100 shadow-lg"
                >
                  {moreLinks.map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className={`block px-4 py-3 text-sm transition-colors ${
                        location.pathname === to
                          ? 'text-slate-900 font-medium bg-slate-50'
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact">
            <motion.span
              whileHover={{ opacity: 0.85 }}
              whileTap={{ scale: 0.98 }}
              className={`ml-3 px-5 py-2 text-sm font-semibold transition-colors cursor-pointer inline-block ${
                dark ? 'bg-white text-slate-900 hover:bg-white/90' : 'bg-slate-900 text-white hover:bg-slate-700'
              }`}
            >
              Бүртгүүлэх
            </motion.span>
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-1 transition-colors ${dark ? 'text-white' : 'text-slate-900'}`}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 space-y-1">
              {allLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`block px-0 py-3 text-sm font-medium border-b border-slate-50 transition-colors ${
                    location.pathname === to ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-3">
                <Link
                  to="/contact"
                  className="block w-full text-center py-3 bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-colors"
                >
                  Бүртгүүлэх
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
