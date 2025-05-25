import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaCalendar } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      type: 'work',
      title: 'AI Researcher (Full-time)',
      company: 'Baksters',
      period: 'April 2025 - Present',
      description: 'Leading the development of SparkVoice - an advanced voice cloning system supporting Thai and English languages. Spearheading AI research initiatives in generative models and production deployment.',
      highlights: [
        'Developing SparkVoice: Thai/English voice cloning with 20-second samples',
        'Building Generative AI Showcase with 4 production-ready demos',
        'Leading research in diffusion models and voice synthesis technologies'
      ]
    },
    {
      type: 'work',
      title: 'AI Researcher (Part-time)',
      company: 'Baksters',
      period: 'October 2023 - March 2025',
      description: 'Contributed to AI research projects while completing my degree. Developed multiple AI systems from proof-of-concept to production deployment.',
      highlights: [
        'Developed LLM Detection System deployed on HuggingFace Spaces',
        'Implemented PCB Defect Generation using Diffusion Models',
        'Built ComfyUI custom nodes for RunPod serverless deployment'
      ]
    },
    {
      type: 'education',
      title: 'Teaching Assistant',
      company: 'Assumption University of Thailand',
      period: 'October 2022 - March 2023',
      description: 'Assisted professors in computer science courses, helping students understand programming concepts and AI fundamentals.',
      highlights: [
        'Taught programming labs and assisted with assignments',
        'Mentored students in their AI/ML projects',
        'Created educational materials for complex topics'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'Assumption University of Thailand',
      period: '2021 - 2025',
      description: 'Specialized in AI and Machine Learning with a focus on computer vision and deep learning applications. Graduated with expertise in generative AI.',
      highlights: [
        'Senior Project: PCB Defect Generation using Diffusion Models',
        'Built ASL Detection Mobile Application with Flutter',
        'Relevant Coursework: Deep Learning, Computer Vision, NLP'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience & Education</h2>
          
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${exp.type}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="timeline-icon">
                  {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                </div>
                
                <div className="timeline-content">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <div className="timeline-period">
                    <FaCalendar /> {exp.period}
                  </div>
                  <p className="timeline-description">{exp.description}</p>
                  
                  <ul className="timeline-highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;