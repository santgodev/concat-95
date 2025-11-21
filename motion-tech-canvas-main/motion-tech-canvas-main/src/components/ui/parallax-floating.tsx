"use client"

import React, { ReactNode, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface FloatingProps {
  children: ReactNode
  sensitivity?: number
  className?: string
}

interface FloatingElementProps {
  children: ReactNode
  depth?: number
  className?: string
}

export function Floating({ children, sensitivity = 1, className = "" }: FloatingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const normalizedX = (x - centerX) / centerX
    const normalizedY = (y - centerY) / centerY

    mouseX.current = normalizedX * sensitivity
    mouseY.current = normalizedY * sensitivity
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.current = 0
    mouseY.current = 0
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            mouseX: mouseX.current,
            mouseY: mouseY.current,
            isHovered,
          } as any)
        }
        return child
      })}
    </motion.div>
  )
}

export function FloatingElement({
  children,
  depth = 1,
  className = "",
  mouseX = 0,
  mouseY = 0,
  isHovered = false,
}: FloatingElementProps & {
  mouseX?: number
  mouseY?: number
  isHovered?: boolean
}) {
  const x = isHovered ? mouseX * depth * 20 : 0
  const y = isHovered ? mouseY * depth * 20 : 0
  const rotateX = isHovered ? mouseY * depth * 5 : 0
  const rotateY = isHovered ? mouseX * depth * 5 : 0

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transition: isHovered ? undefined : { duration: 0.5, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  )
} 