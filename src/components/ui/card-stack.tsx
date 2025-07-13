"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

let interval: any

type Card = {
  id: number
  image: string
}

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[]
  offset?: number
  scaleFactor?: number
}) => {
  const CARD_OFFSET = offset || 20
  const SCALE_FACTOR = scaleFactor || 0.05
  const [cards, setCards] = useState<Card[]>(items)

  useEffect(() => {
    startFlipping()

    return () => clearInterval(interval)
  }, [])

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]
        newArray.unshift(newArray.pop()!)
        return newArray
      })
    }, 3000)
  }

  return (
    <div className="relative h-80 w-[600px] md:h-96 md:w-[700px]">
      {cards.map((card, index) => {
        const blur = index * 3

        return (
          <motion.div
            key={card.id}
            className="absolute w-full h-full rounded-3xl overflow-hidden"
            style={{
              transformOrigin: "center center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
              rotateX: index * 1.5,
              rotateY: index * 0.5,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            {/* Glass card container */}
            <div
              className="relative w-full h-full rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10"
              style={{
                backdropFilter: `blur(${15 + blur}px)`,
                boxShadow: `
                  0 ${12 + index * 6}px ${40 + index * 10}px rgba(0, 0, 0, 0.4),
                  0 ${6 + index * 3}px ${20 + index * 5}px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1),
                  inset 0 -1px 0 rgba(255, 255, 255, 0.05)
                `,
              }}
            >
              {/* Main image */}
              <div className="relative w-full h-full">
                <Image 
                  src={card.image || "/placeholder.svg"}
                  alt={`Card ${card.id}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority={index === 0}
                  className="object-cover" 
                />

                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />

                {/* Additional depth overlay for cards behind */}
                {index > 0 && <div className="absolute inset-0 bg-black/20" style={{ opacity: index * 0.1 }} />}
              </div>

              {/* Glass shine effects */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top shine */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                {/* Left shine */}
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/40 via-transparent to-transparent" />
                {/* Corner highlight */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-br-full" />
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}