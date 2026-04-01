import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  shortText: string
  expandedContent?: React.ReactNode
  className?: string
  featured?: boolean
}

export default function ServiceCard({
  icon,
  title,
  shortText,
  expandedContent,
  className,
  featured = false,
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'card-dark p-6 flex flex-col gap-4 cursor-default',
        featured && 'md:flex-row md:items-start md:gap-6',
        className,
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          'flex-shrink-0 w-12 h-12 rounded-xl bg-teal-400/10 border border-teal-400/20',
          'flex items-center justify-center text-teal-400',
          featured && 'w-14 h-14 rounded-2xl',
        )}
      >
        {icon}
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {/* Title */}
        <h5
          className={cn(
            'font-semibold text-white',
            featured ? 'text-xl' : 'text-lg',
          )}
        >
          {title}
        </h5>

        {/* Text */}
        <p className="text-slate-400 text-sm leading-relaxed">
          {shortText}
          {expandedContent && !expanded && '…'}
        </p>

        {/* Expanded */}
        {expanded && expandedContent && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-slate-400 text-sm leading-relaxed"
          >
            {expandedContent}
          </motion.div>
        )}

        {/* Toggle */}
        {expandedContent && (
          <button
            onClick={() => setExpanded((p) => !p)}
            className="inline-flex items-center gap-1 text-teal-400 text-sm font-medium hover:text-teal-300 transition-colors w-fit mt-1"
          >
            {expanded ? (
              <><ChevronUp size={14} /> Show less</>
            ) : (
              <><ChevronDown size={14} /> Read more</>
            )}
          </button>
        )}
      </div>
    </motion.div>
  )
}
