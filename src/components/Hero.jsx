import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='realtive w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap 5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Welcome to <span className='text-red-500'>Model Cars Collector</span>
            </h1>
            <p className={`${styles.heroSubText} text-white`}>
              The best place to find your favorite model cars
            </p>
          </div>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero