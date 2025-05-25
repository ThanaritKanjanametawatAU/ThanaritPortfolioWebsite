import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaPython, FaReact, FaDocker, FaRobot, FaArrowRight } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiFlutter, SiNextdotjs, SiMongodb, SiHuggingface, SiFastapi, SiJavascript } from 'react-icons/si';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [filter, setFilter] = useState('all');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const projectRefs = useRef([]);

  const projects = [
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
      image: '/assets/img/work-mgtd.png',
      tags: ['Web', 'Full-Stack'],
      technologies: [
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <FaReact />, name: 'React' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/car-analytics',
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
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'AI/ML', label: 'AI & ML' },
    { id: 'Web', label: 'Web Apps' },
    { id: 'Mobile', label: 'Mobile' },
    { id: 'Cloud', label: 'Cloud' },
    { id: 'Research', label: 'Research' },
    { id: 'Full-Stack', label: 'Full-Stack' }
  ];

  useEffect(() => {
    if (inView && projectRefs.current.length > 0) {
      projectRefs.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            {
              opacity: 0,
              y: 60,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
              }
            }
          );
        }
      });
    }
  }, [inView, filteredProjects]);

  return (
    <section id="projects" className="projects animate-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Exploring the intersection of AI research and practical applications</p>
          </div>
          
          <motion.div 
            className="project-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map(category => (
              <motion.button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
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
              className="projects-grid"
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${filter}-${index}`}
                  ref={el => projectRefs.current[index] = el}
                  className={`project-card ${project.featured ? 'featured' : ''}`}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-image-wrapper">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                      <div 
                        className="project-gradient"
                        style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)` }}
                      />
                    </div>
                    <motion.div 
                      className="project-links"
                      initial={{ opacity: 0, y: 20 }}
                      animate={hoveredIndex === index ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.2 }}
                    >
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaGithub />
                          <span>Code</span>
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link primary"
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </motion.div>
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-footer">
                      <div className="project-technologies">
                        {project.technologies.map((tech, idx) => (
                          <motion.span 
                            key={idx} 
                            className="tech-icon" 
                            title={tech.name}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                          >
                            {tech.icon}
                          </motion.span>
                        ))}
                      </div>
                      
                      <motion.div 
                        className="view-project"
                        initial={{ opacity: 0 }}
                        animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                      >
                        <span>View Project</span>
                        <FaArrowRight />
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
  );
};

export default Projects;