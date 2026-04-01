import { useState } from 'react'
import { cn } from '@/lib/utils'

export interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  shortText: string
  expandedContent?: React.ReactNode
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
        'rounded-[20px] overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)]',
        className,
      )}
    >
      {/* Card header — dark navy */}
      <div className="bg-brand flex flex-col items-center py-4">
        <div className="text-white w-[60px] h-[60px] flex items-center justify-center">
          {icon}
        </div>
        <h5 className="text-white font-medium text-xl text-center px-3 pb-2">{title}</h5>
      </div>

      {/* Card body */}
      <div className="p-4 bg-white">
        <p className="text-[#4B4B4B] text-sm leading-relaxed">
          {shortText}
          {expandedContent && !expanded && (
            <>
              {' '}
              <button
                onClick={() => setExpanded(true)}
                className="text-red-500 font-semibold text-sm cursor-pointer hover:underline focus:outline-none"
              >
                Read More...
              </button>
            </>
          )}
        </p>

        {expanded && expandedContent && (
          <div className="mt-2 text-[#4B4B4B] text-sm leading-relaxed">
            {expandedContent}
            <button
              onClick={() => setExpanded(false)}
              className="text-red-500 font-semibold text-sm cursor-pointer hover:underline focus:outline-none mt-1 block"
            >
              Read less
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
