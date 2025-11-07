import React, { useEffect, useRef } from 'react'

const StarField = () => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const starsRef = useRef([])
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    const ctx = canvas.getContext('2d')
    
    const resizeCanvas = () => {
      if (container) {
        const rect = container.getBoundingClientRect()
        canvas.width = rect.width
        canvas.height = rect.height
      }
    }
    
    class Star {
      constructor() {
        this.reset()
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
      }
      
      reset() {
        this.originalX = Math.random() * canvas.width
        this.originalY = Math.random() * canvas.height
        this.x = this.originalX
        this.y = this.originalY
        this.vx = (Math.random() - 0.5) * 0.2 // Velocidade horizontal
        this.vy = (Math.random() - 0.5) * 0.2 // Velocidade vertical
        this.size = Math.random() * 3 + 1 // Tamanho entre 1 e 4
        this.opacity = Math.random() * 0.9 + 0.3 // Opacidade entre 0.3 e 1.2
        this.twinkleSpeed = Math.random() * 0.02 + 0.005 // Velocidade do brilho
        this.angle = 0
      }
      
      update() {
        this.x += this.vx
        this.y += this.vy
        
        this.angle += this.twinkleSpeed
        const twinkle = Math.sin(this.angle) * 0.3 + 0.7
        this.currentOpacity = this.opacity * twinkle

        const mouse = mouseRef.current
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
    
        if (distance < 200) {
          const force = (200 - distance) / 200 
          const attraction = 0.002 * force
          
          this.vx += dx * attraction
          this.vy += dy * attraction
          
        
          const maxSpeed = 2
          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy)
          if (speed > maxSpeed) {
            this.vx = (this.vx / speed) * maxSpeed
            this.vy = (this.vy / speed) * maxSpeed
          }
        } else {
        
          const returnForce = 0.001
          this.vx += (this.originalX - this.x) * returnForce
          this.vy += (this.originalY - this.y) * returnForce
          
        
          this.vx *= 0.99
          this.vy *= 0.99
        }
        
       
        if (this.x < 0) {
          this.x = canvas.width
          this.originalX = canvas.width
        }
        if (this.x > canvas.width) {
          this.x = 0
          this.originalX = 0
        }
        if (this.y < 0) {
          this.y = canvas.height
          this.originalY = canvas.height
        }
        if (this.y > canvas.height) {
          this.y = 0
          this.originalY = 0
        }
      }
      
      draw() {
        ctx.save()
        
        ctx.globalAlpha = this.currentOpacity
        ctx.fillStyle = '#e2e8f0'
        ctx.shadowBlur = this.size * 3
        ctx.shadowColor = '#3b82f6' 
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.restore()
      }
    }
    

    const createStars = () => {
      starsRef.current = []
     
      const starCount = Math.min(Math.floor((canvas.width * canvas.height) / 6000), 200)
      
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push(new Star())
      }
    }
    

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      starsRef.current.forEach(star => {
        star.update()
        star.draw()
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    const handleMouseMove = (event) => {
      if (container) {
        const rect = container.getBoundingClientRect()
        mouseRef.current = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        }
      }
    }
    
    const handleResize = () => {
      resizeCanvas()
      createStars()
    }
    
    resizeCanvas()
    createStars()
    animate()
    
    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Permite cliques passarem através do canvas
        zIndex: 1, // Fica atrás do conteúdo
        background: 'transparent'
      }}
    />
  )
}

export default StarField