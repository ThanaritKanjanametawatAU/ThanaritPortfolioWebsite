import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'AI Models Deployed' },
    { number: '∞', label: 'Learning Hours' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                I'm <span className="gradient-text">Thanarit Kanjanametawat</span> (Bonus), 
                an AI Researcher passionate about creating intelligent systems that make a difference.
              </p>
              
              <p>
                With a strong foundation in Computer Science from Assumption University of Thailand, 
                I specialize in developing cutting-edge AI solutions, particularly in computer vision 
                and deep learning. My journey in AI began with a fascination for how machines can 
                learn to see and understand the world around us.
              </p>
              
              <p>
                Currently, I'm working at Baksters as a full-time AI Researcher (since April 2025), 
                where I lead the development of SparkVoice - an advanced voice cloning system supporting 
                Thai and English languages. My work spans from implementing state-of-the-art diffusion 
                models to creating production-ready AI applications that solve real-world problems.
              </p>
              
              <p>
                When I'm not training models or writing code, you'll find me exploring the latest 
                AI research papers, contributing to open-source projects on HuggingFace, or sharing 
                my knowledge through blog posts about Stable Diffusion and other AI technologies. 
                I'm particularly interested in pushing the boundaries of generative AI and making 
                these technologies accessible to everyone.
              </p>
            </div>

            <div className="about-image">
              <div className="image-container">
                <img 
                  src="/assets/img/CurrentPicture2-transparent.png" 
                  alt="Thanarit Kanjanametawat"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="stat-number gradient-text">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;