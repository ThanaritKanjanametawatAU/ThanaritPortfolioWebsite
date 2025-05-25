import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const controls = useAnimation();
  const titleRef = useRef(null);
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  useEffect(() => {
    // GSAP text animation
    if (titleRef.current) {
      const chars = titleRef.current.innerText.split('');
      titleRef.current.innerHTML = chars.map(char => 
        `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');
      
      gsap.fromTo('.char', 
        {
          opacity: 0,
          y: 50,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.02,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 0.5,
        }
      );
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000] // Cubic bezier for smooth ease
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8 + (i * 0.1),
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section id="hero" className="hero animate-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div className="hero-image-wrapper" variants={imageVariants}>
            <img 
              src="/assets/img/CurrentPicture.png" 
              alt="Thanarit Kanjanametawat" 
              className="hero-profile-image"
            />
            <div className="image-ring"></div>
          </motion.div>
          
          <motion.div className="hero-text" variants={itemVariants}>
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name" ref={titleRef}>
              Thanarit Kanjanametawat
            </h1>
            <h2 className="hero-title">AI Researcher • Machine Learning Engineer</h2>
            <p className="hero-description lead">
              Crafting intelligent solutions at the intersection of research and real-world applications.
              Specializing in computer vision, deep learning, and generative AI.
            </p>
          </motion.div>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="#experience" className="btn btn-primary">
              View Experience
            </a>
            <a href="#projects" className="btn btn-secondary">
              See Projects
            </a>
          </motion.div>

          <motion.div className="hero-social">
            {[
              { icon: FaGithub, href: "https://github.com/ThanaritKanjanametawatAU", title: "GitHub" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/thanarit-kanjanametawat-1354b7211/", title: "LinkedIn" },
              { icon: SiHuggingface, href: "https://huggingface.co/Thanarit", title: "HuggingFace" },
              { icon: FaDiscord, href: "https://discord.com/users/bonusmoney0", title: "Discord" },
              { icon: FaEnvelope, href: "mailto:thanarit.bonus@gmail.com", title: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                title={social.title}
                custom={index}
                variants={socialVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="scroll-indicator">
            <div className="scroll-dot"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;