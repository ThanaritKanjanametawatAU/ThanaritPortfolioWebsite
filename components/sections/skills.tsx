'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaPython, FaJsSquare, FaReact, FaGitAlt, FaDocker, FaAws,
  FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaBrain, FaMicrophone
} from 'react-icons/fa'
import { 
  SiPytorch, SiTensorflow, SiFlutter, SiDart, SiTypescript,
  SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss,
  SiFigma, SiGooglecloud, SiPandas, SiFastapi, SiHuggingface,
  SiRunkeeper, SiNvidia
} from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ReactNode
}

interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: Skill[]
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories: SkillCategory[] = [
    {
      name: 'AI & Machine Learning',
      icon: <FaBrain />,
      skills: [
        { name: 'PyTorch', icon: <SiPytorch /> },
        { name: 'Diffusion Models', icon: <FaBrain /> },
        { name: 'Computer Vision', icon: <FaBrain /> },
        { name: 'Voice Cloning', icon: <FaMicrophone /> },
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'HuggingFace', icon: <SiHuggingface /> },
        { name: 'NLP', icon: <FaBrain /> },
        { name: 'Pandas', icon: <SiPandas /> }
      ]
    },
    {
      name: 'Languages',
      icon: <FaPython />,
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'JavaScript', icon: <FaJsSquare /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Dart', icon: <SiDart /> }
      ]
    },
    {
      name: 'Web & Mobile',
      icon: <FaReact />,
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> }
      ]
    },
    {
      name: 'Tools & Cloud',
      icon: <FaDocker />,
      skills: [
        { name: 'Git', icon: <FaGithub /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'RunPod', icon: <FaAws /> },
        { name: 'Google Cloud', icon: <SiGooglecloud /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'ComfyUI', icon: <SiNvidia /> }
      ]
    }
  ]

  const additionalTechnologies = [
    'Stable Diffusion', 'SDXL', 'ControlNet', 'LLMs', 'Serverless', 
    'Figma', 'SASS', 'Edge Computing', 'MLOps', 'Voice AI', 
    'Generative AI', 'ONNX', 'Claude API', 'Gradio', 'Streamlit'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-gray-400">Technologies I work with daily</p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-purple-400 text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center gap-2 bg-gray-900 rounded-lg px-3 py-2 hover:bg-purple-500/20 transition-colors duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className="text-gray-400">{skill.icon}</span>
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-gray-800 rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Other Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {additionalTechnologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-900 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.03) }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills