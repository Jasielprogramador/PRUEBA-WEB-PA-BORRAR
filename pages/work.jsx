import React from 'react'
import Hero from '../components/Hero'
import Work from '../components/Work'

const work = () => {
  return (
    <div>
        <Hero heading='My Work' message='This is some of my recent work traveling the world.' />
        <Work />
    </div>
  )
}

export default work