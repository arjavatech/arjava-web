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
    <section className="relative min-h-[300px] flex items-center overflow-hidden bg-dark-base">
      {/* Animated blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-sky-500/10 rounded-full blur-3xl animate-blob delay-2000" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Gradient edge */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-base via-transparent to-dark-base pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 text-sm text-slate-500 mb-5"
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
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
            className="mt-4 text-slate-400 text-lg max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
