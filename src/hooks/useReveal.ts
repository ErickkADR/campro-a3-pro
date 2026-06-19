import { useEffect, useRef, type RefObject } from 'react'

export function useReveal(): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    container.querySelectorAll('.reveal, .reveal-scale').forEach((el) =>
      observer.observe(el),
    )

    return () => observer.disconnect()
  }, [])

  return ref
}
