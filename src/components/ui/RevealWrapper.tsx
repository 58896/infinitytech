'use client'

import { useEffect, useRef, useState } from 'react'

type Direction = 'up' | 'left' | 'right' | 'scale'

interface Props {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  className?: string
}

const classMap: Record<Direction, string> = {
  up:    'reveal',
  left:  'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
}

export default function RevealWrapper({ children, direction = 'up', delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`${classMap[direction]} ${visible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
