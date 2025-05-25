import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaDiscord } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-image-wrapper" variants={itemVariants}>
            <img 
              src="/assets/img/CurrentPicture.png" 
              alt="Thanarit Kanjanametawat" 
              className="hero-profile-image"
            />
          </motion.div>
          
          <motion.div className="hero-text" variants={itemVariants}>
            <h3 className="hero-greeting">Hi, I'm</h3>
            <h1 className="hero-name">
              Thanarit <span className="gradient-text">Kanjanametawat</span>
            </h1>
            <h2 className="hero-title">AI Researcher at Baksters</h2>
            <p className="hero-description">
              Passionate about pushing the boundaries of AI and machine learning. 
              Specializing in computer vision, deep learning, and diffusion models. 
              Currently developing cutting-edge AI solutions including voice cloning technology.
            </p>
          </motion.div>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <a href="https://github.com/ThanaritKanjanametawatAU" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/thanarit-kanjanametawat-1354b7211/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://huggingface.co/Thanarit" target="_blank" rel="noopener noreferrer" title="HuggingFace">
              <SiHuggingface />
            </a>
            <a href="https://discord.com/users/bonusmoney0" target="_blank" rel="noopener noreferrer" title="Discord: bonusmoney0">
              <FaDiscord />
            </a>
            <a href="mailto:thanarit.bonus@gmail.com" title="Email">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span>Scroll to explore</span>
          <FaArrowDown className="scroll-icon" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;