'use client'
import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 })
  const requestRef = useRef<number>()

  // Lerp functie voor soepele beweging
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor
  }

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  useEffect(() => {
    const animate = () => {
      setCirclePosition(prev => ({
        x: lerp(prev.x, mousePosition.x, 0.15), // 0.15 is de smoothing factor (0-1)
        y: lerp(prev.y, mousePosition.y, 0.15)
      }))
      requestRef.current = requestAnimationFrame(animate)
    }
    
    requestRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [mousePosition])

  return (
    <>
      {/* Grote cirkel - volgt soepel met lerp */}
      <div 
        className="pointer-events-none fixed z-[10000] mix-blend-difference"
        style={{
          left: `${circlePosition.x - 20}px`,
          top: `${circlePosition.y - 20}px`,
          width: '40px',
          height: '40px',
          border: '1px solid #903C0A',
          borderRadius: '50%',
          transition: 'none', // Geen CSS transition meer nodig
        }}
      />
      {/* Kleine dot - volgt direct de muis */}
      <div 
        className="pointer-events-none fixed z-[10001]"
        style={{
          left: `${mousePosition.x - 2}px`,
          top: `${mousePosition.y - 2}px`,
          width: '4px',
          height: '4px',
          background: '#903C0A',
          borderRadius: '50%',
        }}
      />
    </>
  )
}