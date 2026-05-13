import React from 'react'
import MatrixRain from './MatrixRain.jsx'

const AnimatedBackground = () => {
  return (
    <div className="animated-bg" aria-hidden="true">
      <MatrixRain />
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />
    </div>
  )
}

export default AnimatedBackground

