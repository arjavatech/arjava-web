import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  const words = title.split(' ')
  const lastWord = words.pop()
  const rest = words.join(' ')

  return (
    <section className="relative min-h-[220px] sm:min-h-[280px] md:min-h-[300px] flex items-center overflow-hidden bg-dark-base">
      {/* Animated blobs */}
      <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-teal-500/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-1/3 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 bg-sky-500/10 rounded-full blur-3xl animate-blob delay-2000" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Gradient edge */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-base via-transparent to-dark-base pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 mb-4 sm:mb-5"
        >
          <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-slate-400">{breadcrumb ?? title}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          {rest && <span>{rest} </span>}
          <span className="gradient-text">{lastWord}</span>
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-3 sm:mt-4 text-slate-400 text-base sm:text-lg max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
