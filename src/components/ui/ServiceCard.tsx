import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  shortText: string
  expandedContent?: React.ReactNode
  featured?: boolean
  className?: string
}

export default function ServiceCard({
  icon,
  title,
  shortText,
  expandedContent,
  className,
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={cn(
        'group relative flex flex-col rounded-2xl border border-dark-line bg-dark-card overflow-hidden transition-all duration-300',
        'hover:border-teal-400/30 hover:shadow-xl hover:shadow-teal-400/5',
        className,
      )}
    >
      {/* Top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-teal-400/0 via-teal-400/60 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col gap-4 sm:gap-5 p-4 sm:p-6 flex-1">

        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center text-teal-400 shrink-0 transition-colors duration-300 group-hover:bg-teal-400/15">
          {icon}
        </div>

        {/* Title */}
        <h5 className="text-base sm:text-lg font-semibold text-white leading-snug">{title}</h5>

        {/* Divider */}
        <div className="h-px w-full bg-dark-line" />

        {/* Short description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1">{shortText}</p>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {expanded && expandedContent && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-1 text-slate-400 text-sm leading-relaxed border-t border-dark-line">
                {expandedContent}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer row — always rendered for uniform height */}
        <div className="flex items-center justify-between pt-1 mt-auto">
          {expandedContent ? (
            <button
              onClick={() => setExpanded(p => !p)}
              className="inline-flex items-center gap-1.5 text-teal-400 text-xs font-semibold hover:text-teal-300 transition-colors"
            >
              {expanded ? 'Show less' : 'Read more'}
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="inline-flex"
              >
                <ChevronDown size={14} />
              </motion.span>
            </button>
          ) : (
            /* Invisible placeholder keeps footer height identical */
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold opacity-0 pointer-events-none select-none">
              Read more <ChevronDown size={14} />
            </span>
          )}

          {/* Subtle arrow badge */}
          <div className="w-7 h-7 rounded-full border border-dark-line flex items-center justify-center text-slate-600 group-hover:border-teal-400/30 group-hover:text-teal-400 transition-colors duration-300">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

      </div>
    </div>
  )
}
