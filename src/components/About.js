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
                an AI Researcher specializing in voice synthesis and generative models.
              </p>
              
              <p>
                Currently at Baksters, I lead SparkVoice development - advanced voice cloning for Thai/English.
                My expertise spans diffusion models, computer vision, and production AI systems.
              </p>
              
              <p>
                Active in open-source AI, HuggingFace contributor, and Stable Diffusion enthusiast.
                Focused on making cutting-edge AI accessible and practical.
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