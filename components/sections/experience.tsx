'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

interface ExperienceItem {
  type: 'work' | 'education'
  title: string
  subtitle?: string
  company: string
  location: string
  period: string
  current?: boolean
  description: string
  highlights: string[]
  color: string
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences: ExperienceItem[] = [
    {
      type: 'work',
      title: 'AI Researcher',
      subtitle: 'Full-time',
      company: 'Baksters',
      location: 'Bangkok, Thailand',
      period: 'April 2025 - Present',
      current: true,
      description: 'Leading AI research initiatives in voice synthesis and generative models.',
      highlights: [
        'Developing SparkVoice: Advanced voice cloning for Thai/English',
        'Building production-ready AI demos and systems',
        'Leading research in diffusion models and voice synthesis'
      ],
      color: '#0066ff'
    },
    {
      type: 'work',
      title: 'AI Researcher',
      subtitle: 'Part-time',
      company: 'Baksters',
      location: 'Bangkok, Thailand',
      period: 'Oct 2023 - Mar 2025',
      description: 'Contributed to AI research while completing degree.',
      highlights: [
        'Developed LLM Detection System on HuggingFace',
        'Implemented PCB Defect Generation using Diffusion Models',
        'Built ComfyUI nodes for serverless deployment'
      ],
      color: '#0052cc'
    },
    {
      type: 'education',
      title: 'Teaching Assistant',
      company: 'Assumption University',
      location: 'Bangkok, Thailand',
      period: 'Oct 2022 - Mar 2023',
      description: 'Assisted in computer science courses and AI fundamentals.',
      highlights: [
        'Taught programming labs and mentored students',
        'Created educational materials for AI/ML topics'
      ],
      color: '#00a651'
    },
    {
      type: 'education',
      title: 'B.Sc. Computer Science',
      company: 'Assumption University',
      location: 'Bangkok, Thailand',
      period: '2021 - 2025',
      description: 'Specialized in AI and Machine Learning.',
      highlights: [
        'Senior Project: PCB Defect Generation',
        'Built ASL Detection Mobile App',
        'Focus: Deep Learning, Computer Vision, NLP'
      ],
      color: '#00875a'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Experience & Education</h2>
            <p className="text-gray-400">My professional journey and academic background</p>
          </div>
          
          <motion.div
            className="relative max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-700"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center justify-between mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
                    style={{ backgroundColor: exp.color }}
                  >
                    {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                  </div>
                </div>
                
                {/* Content card */}
                <motion.div 
                  className="w-5/12 bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                        {exp.subtitle && <span className="text-gray-400 font-normal"> • {exp.subtitle}</span>}
                      </h3>
                      {exp.current && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Current</span>
                      )}
                    </div>
                    <h4 className="text-lg text-purple-400 mb-2">{exp.company}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaCalendar /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start">
                        <span className="text-purple-400 mr-2">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience