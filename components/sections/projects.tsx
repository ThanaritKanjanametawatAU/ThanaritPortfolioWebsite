'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaPython, FaReact, FaDocker, FaRobot, FaArrowRight } from 'react-icons/fa'
import { SiPytorch, SiTensorflow, SiFlutter, SiNextdotjs, SiMongodb, SiHuggingface, SiFastapi, SiJavascript } from 'react-icons/si'
import Image from 'next/image'

interface Technology {
  icon: React.ReactNode
  name: string
}

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  technologies: Technology[]
  github?: string
  live?: string
  featured?: boolean
  color: string
}

interface Category {
  id: string
  label: string
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [filter, setFilter] = useState<string>('all')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects: Project[] = [
    {
      title: 'Generative AI Showcase',
      description: 'Production AI platform with Image-to-Video, Voice Cloning, Music & Text Generation.',
      image: '/assets/img/work-2.jpg',
      tags: ['AI/ML', 'Full-Stack'],
      technologies: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <FaRobot />, name: 'AI Models' },
        { icon: <SiFastapi />, name: 'FastAPI' }
      ],
      live: 'https://generative-ai-showcase-xi.vercel.app/',
      featured: true,
      color: '#7c3aed'
    },
    {
      title: 'SparkVoice - Voice Cloning',
      description: 'Thai/English voice cloning with just 20 seconds of audio.',
      image: '/assets/img/work-3.jpg',
      tags: ['AI/ML', 'Research'],
      technologies: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <SiPytorch />, name: 'PyTorch' },
        { icon: <FaRobot />, name: 'Voice AI' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/SparkVoice',
      featured: true,
      color: '#a855f7'
    },
    {
      title: 'PCB Defect Generation',
      description: 'Synthetic PCB defect generation using diffusion models.',
      image: '/assets/img/work-4.jpg',
      tags: ['AI/ML', 'Research'],
      technologies: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <SiPytorch />, name: 'PyTorch' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/pcb-defect-generation',
      featured: true,
      color: '#8b5cf6'
    },
    {
      title: 'LLM Detection System',
      description: 'AI text detection deployed on HuggingFace Spaces.',
      image: '/assets/img/work-5.jpg',
      tags: ['AI/ML', 'Web'],
      technologies: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <SiHuggingface />, name: 'HuggingFace' },
        { icon: <SiPytorch />, name: 'PyTorch' }
      ],
      live: 'https://huggingface.co/spaces/Thanarit/GPT-Detection-Demo',
      featured: true,
      color: '#6366f1'
    },
    {
      title: 'ASL Detection App',
      description: 'Real-time American Sign Language detection mobile app using computer vision.',
      image: '/assets/img/work-asl.png',
      tags: ['AI/ML', 'Mobile'],
      technologies: [
        { icon: <SiFlutter />, name: 'Flutter' },
        { icon: <SiTensorflow />, name: 'TensorFlow' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/asl_detection_application',
      featured: true,
      color: '#4f46e5'
    },
    {
      title: 'ComfyUI Implementations',
      description: 'Custom AI image generation nodes with RunPod deployment.',
      image: '/assets/img/sd.png',
      tags: ['AI/ML', 'Cloud'],
      technologies: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <FaDocker />, name: 'Docker' },
        { icon: <SiJavascript />, name: 'JavaScript' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/runpod-worker-comfy',
      color: '#4338ca'
    },
    {
      title: 'Car Analytics Platform',
      description: 'Vehicle data analysis with interactive dashboards.',
      image: '/assets/img/work-car-analytics.png',
      tags: ['Web', 'Full-Stack'],
      technologies: [
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <FaReact />, name: 'React' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/CarAnalytics',
      color: '#3730a3'
    },
    {
      title: 'E-Learning Portal',
      description: 'E-learning platform with course management & tracking.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      tags: ['Web', 'Full-Stack'],
      technologies: [
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiMongodb />, name: 'MongoDB' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/e-learning-portal',
      color: '#312e81'
    },
    {
      title: 'Stable Diffusion from Scratch',
      description: 'Latent diffusion models implementation in PyTorch.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      tags: ['AI/ML', 'Research'],
      technologies: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <SiPytorch />, name: 'PyTorch' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/stable-diffusion-from-scratch',
      color: '#1e1b4b'
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter))

  const categories: Category[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'AI/ML', label: 'AI & ML' },
    { id: 'Web', label: 'Web Apps' },
    { id: 'Mobile', label: 'Mobile' },
    { id: 'Cloud', label: 'Cloud' },
    { id: 'Research', label: 'Research' },
    { id: 'Full-Stack', label: 'Full-Stack' }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400">Exploring the intersection of AI research and practical applications</p>
          </div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map(category => (
              <motion.button
                key={category.id}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category.id 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${filter}-${index}`}
                  className={`bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                    project.featured ? 'ring-2 ring-purple-500/50' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)` }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <FaGithub size={24} />
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition-colors"
                        >
                          <FaExternalLinkAlt size={24} />
                        </a>
                      )}
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        {project.technologies.map((tech, idx) => (
                          <motion.span 
                            key={idx} 
                            className="text-gray-400 hover:text-purple-400 transition-colors" 
                            title={tech.name}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                          >
                            {tech.icon}
                          </motion.span>
                        ))}
                      </div>
                      
                      <motion.div 
                        className="flex items-center gap-2 text-purple-400"
                        initial={{ opacity: 0 }}
                        animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                      >
                        <span className="text-sm">View Project</span>
                        <FaArrowRight size={12} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects