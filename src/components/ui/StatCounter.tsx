import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatCounterProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

export default function StatCounter({
  value,
  label,
  suffix = '+',
  prefix = '',
}: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1800
    const stepTime = 16
    const steps = Math.ceil(duration / stepTime)
    const increment = value / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="text-3xl md:text-4xl font-bold gradient-text">
        {prefix}{count}{suffix}
      </span>
      <span className="text-slate-400 text-xs md:text-sm text-center leading-tight">{label}</span>
    </div>
  )
}
