import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const timelineRef = useRef(null);
  const itemsRef = useRef([]);

  const experiences = [
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
  ];

  useEffect(() => {
    if (inView && itemsRef.current.length > 0) {
      // Animate timeline line
      gsap.fromTo('.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
          }
        }
      );

      // Animate each timeline item
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item,
            {
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              delay: index * 0.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
              }
            }
          );

          // Animate dots
          const dot = item.querySelector('.timeline-dot');
          if (dot) {
            gsap.fromTo(dot,
              { scale: 0 },
              {
                scale: 1,
                duration: 0.5,
                delay: index * 0.2 + 0.3,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                  trigger: item,
                  start: 'top 85%',
                }
              }
            );
          }
        }
      });
    }
  }, [inView]);

  return (
    <section id="experience" className="experience animate-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2 className="section-title">Experience & Education</h2>
            <p className="section-subtitle">My professional journey and academic background</p>
          </div>
          
          <div className="timeline" ref={timelineRef}>
            <div className="timeline-line"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={el => itemsRef.current[index] = el}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div 
                  className="timeline-dot"
                  style={{ backgroundColor: exp.color }}
                >
                  <div className="dot-inner">
                    {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                  </div>
                </div>
                
                <motion.div 
                  className="timeline-content card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="content-header">
                    <div className="header-top">
                      <h3 className="timeline-title">
                        {exp.title}
                        {exp.subtitle && <span className="subtitle"> • {exp.subtitle}</span>}
                      </h3>
                      {exp.current && <span className="badge-current">Current</span>}
                    </div>
                    <h4 className="timeline-company">{exp.company}</h4>
                    <div className="timeline-meta">
                      <span className="meta-item">
                        <FaCalendar /> {exp.period}
                      </span>
                      <span className="meta-item">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  <p className="timeline-description">{exp.description}</p>
                  
                  <ul className="timeline-highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;