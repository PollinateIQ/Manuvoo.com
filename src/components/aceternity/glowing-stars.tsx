"use client"

import React, { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface GlowingStarsProps {
  count?: number
  className?: string
}

export const GlowingStars = ({ count = 50, className }: GlowingStarsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const stars: HTMLDivElement[] = []

    // Create stars
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div")
      star.className = cn(
        "absolute rounded-full bg-white opacity-60",
        "animate-pulse"
      )
      
      // Random size between 1-4px
      const size = Math.random() * 3 + 1
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      
      // Random position
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 3}s`
      star.style.animationDuration = `${Math.random() * 2 + 2}s`
      
      // Add glow effect based on size
      if (size > 2.5) {
        star.style.boxShadow = `0 0 ${size * 2}px rgba(255, 255, 255, 0.5)`
        star.classList.add("animate-twinkle")
      }
      
      container.appendChild(star)
      stars.push(star)
    }

    // Cleanup
    return () => {
      stars.forEach(star => {
        if (star.parentNode) {
          star.parentNode.removeChild(star)
        }
      })
    }
  }, [count])

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    />
  )
}

// Note: Twinkle animation is defined in tailwind.config.ts 