'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Stat {
  number: string
  label: string
}

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats: Stat[] = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'AI Models Deployed' },
    { number: '∞', label: 'Learning Hours' }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg">
                I&apos;m <span className="text-purple-400 font-semibold">Thanarit Kanjanametawat</span> (Bonus), 
                an AI Researcher specializing in voice synthesis and generative models.
              </p>
              
              <p className="text-gray-300">
                Currently at Baksters, I lead SparkVoice development - advanced voice cloning for Thai/English.
                My expertise spans diffusion models, computer vision, and production AI systems.
              </p>
              
              <p className="text-gray-300">
                Active in open-source AI, HuggingFace contributor, and Stable Diffusion enthusiast.
                Focused on making cutting-edge AI accessible and practical.
              </p>
            </div>

            <div className="relative group">
              <div className="relative w-full max-w-md mx-auto">
                <Image 
                  src="/assets/img/CurrentPicture2-transparent.png" 
                  alt="Thanarit Kanjanametawat"
                  width={400}
                  height={400}
                  className="rounded-lg relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About