import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaPython, FaReact, FaDocker, FaRobot } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiFlutter, SiNextdotjs, SiMongodb, SiHuggingface, SiFastapi, SiJavascript } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Generative AI Showcase',
      description: 'Production-ready AI platform featuring 4 demos: Image-to-Video Generation, Voice Cloning, Music Generation, and Text Generation. Built for Baksters.',
      image: '/assets/img/work-comingsoon.png',
      tags: ['AI/ML', 'Web', 'Full-Stack'],
      technologies: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <FaRobot />, name: 'AI Models' },
        { icon: <SiFastapi />, name: 'FastAPI' }
      ],
      live: 'https://generative-ai-showcase-xi.vercel.app/',
      featured: true
    },
    {
      title: 'SparkVoice - Voice Cloning',
      description: 'Advanced voice cloning system supporting Thai and English languages. Clone any voice with just 20 seconds of audio for natural text-to-speech synthesis.',
      image: '/assets/img/work-comingsoon.png',
      tags: ['AI/ML', 'Research'],
      technologies: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <SiPytorch />, name: 'PyTorch' },
        { icon: <FaRobot />, name: 'Voice AI' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/SparkVoice',
      featured: true
    },
    {
      title: 'PCB Defect Generation',
      description: 'Senior project implementing diffusion models to generate synthetic PCB defect images for training defect detection systems.',
      image: '/assets/img/work-comingsoon.png',
      tags: ['AI/ML', 'Research'],
      technologies: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <SiPytorch />, name: 'PyTorch' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/pcb-defect-generation',
      featured: true
    },
    {
      title: 'LLM Detection System',
      description: 'Advanced system for detecting AI-generated text using multiple language models. Deployed on HuggingFace Spaces with real-time inference.',
      image: '/assets/img/work-comingsoon.png',
      tags: ['AI/ML', 'Web'],
      technologies: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <SiHuggingface />, name: 'HuggingFace' },
        { icon: <SiPytorch />, name: 'PyTorch' }
      ],
      live: 'https://huggingface.co/spaces/Thanarit/GPT-Detection-Demo',
      featured: true
    },
    {
      title: 'ASL Detection Application',
      description: 'Real-time American Sign Language detection mobile application using computer vision and deep learning.',
      image: '/assets/img/work-asl.png',
      tags: ['AI/ML', 'Mobile'],
      technologies: [
        { icon: <SiFlutter />, name: 'Flutter' },
        { icon: <SiTensorflow />, name: 'TensorFlow' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/asl_detection_application',
      featured: true
    },
    {
      title: 'ComfyUI Implementations',
      description: 'Multiple ComfyUI custom nodes and workflows for advanced AI image generation, including RunPod serverless deployment.',
      image: '/assets/img/work-comingsoon.png',
      tags: ['AI/ML', 'Cloud'],
      technologies: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <FaDocker />, name: 'Docker' },
        { icon: <SiJavascript />, name: 'JavaScript' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/runpod-worker-comfy'
    },
    {
      title: 'Car Analytics Website',
      description: 'Full-stack web application for vehicle data analysis and visualization with interactive dashboards.',
      image: '/assets/img/work-comingsoon.png',
      tags: ['Web', 'Full-Stack'],
      technologies: [
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <FaReact />, name: 'React' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/car-analytics'
    },
    {
      title: 'E-Learning Portal',
      description: 'Full-stack e-learning platform with course management, user authentication, and progress tracking.',
      image: '/assets/img/work-comingsoon.png',
      tags: ['Web', 'Full-Stack'],
      technologies: [
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiMongodb />, name: 'MongoDB' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/e-learning-portal'
    },
    {
      title: 'Stable Diffusion from Scratch',
      description: 'Implementation of latent diffusion models from scratch using PyTorch for educational purposes.',
      image: '/assets/img/sd.png',
      tags: ['AI/ML', 'Research'],
      technologies: [
        { icon: <FaPython />, name: 'Python' },
        { icon: <SiPytorch />, name: 'PyTorch' }
      ],
      github: 'https://github.com/ThanaritKanjanametawatAU/stable-diffusion-from-scratch'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const categories = ['all', 'AI/ML', 'Web', 'Mobile', 'Cloud', 'Research', 'Full-Stack'];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="project-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-icon" title={tech.name}>
                        {tech.icon}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;