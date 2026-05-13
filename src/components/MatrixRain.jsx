import { useEffect, useRef } from 'react'

/** Binary-style matrix rain (matches static `scripts.js` look, blue accent). */
export default function MatrixRain() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || !canvas.getContext) return

    const ctx = canvas.getContext('2d')
    let FONT_SIZE = 16
    const CHARS = '01'
    let drops = []
    let rafId = 0
    let cancelled = false
    let resizeTimer

    const mobile = () => window.innerWidth < 768

    function resizeCanvas() {
      const width = window.innerWidth
      const height = window.innerHeight
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      FONT_SIZE = mobile() ? 14 : 16
      const columns = Math.floor(width / FONT_SIZE)
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * height) / FONT_SIZE)
      )
    }

    function drawMatrix() {
      if (cancelled) return
      const width = window.innerWidth
      const height = window.innerHeight
      ctx.fillStyle = 'rgba(0, 0, 0, 0.038)'
      ctx.fillRect(0, 0, width, height)

      ctx.font = `${FONT_SIZE}px monospace`
      ctx.shadowColor = 'rgba(0, 170, 255, 0.35)'
      ctx.shadowBlur = mobile() ? 2 : 3

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * FONT_SIZE
        const y = drops[i] * FONT_SIZE
        const brightness = 0.18 + Math.random() * 0.22
        ctx.fillStyle = `rgba(0, 170, 255, ${brightness})`
        ctx.fillText(char, x, y)

        if (y > height && Math.random() > 0.985) {
          drops[i] = 0
        }
        drops[i] += 0.09 + Math.random() * 0.14
      }

      rafId = requestAnimationFrame(drawMatrix)
    }

    resizeCanvas()
    rafId = requestAnimationFrame(drawMatrix)

    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(resizeCanvas, 200)
    }
    window.addEventListener('resize', onResize)
    const onOrientation = () => setTimeout(resizeCanvas, 300)
    window.addEventListener('orientationchange', onOrientation)

    return () => {
      cancelled = true
      cancelAnimationFrame(rafId)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onOrientation)
    }
  }, [])

  return <canvas ref={ref} className="matrix-canvas" aria-hidden />
}
