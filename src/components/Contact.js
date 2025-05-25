import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaDiscord } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'thanarit.bonus@gmail.com',
      link: 'mailto:thanarit.bonus@gmail.com'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Thanarit Kanjanametawat',
      link: 'https://www.linkedin.com/in/thanarit-kanjanametawat-1354b7211/'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'ThanaritKanjanametawatAU',
      link: 'https://github.com/ThanaritKanjanametawatAU'
    },
    {
      icon: <SiHuggingface />,
      title: 'HuggingFace',
      value: 'Thanarit',
      link: 'https://huggingface.co/Thanarit'
    },
    {
      icon: <FaDiscord />,
      title: 'Discord',
      value: 'bonusmoney0',
      link: 'https://discord.com/users/bonusmoney0'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Bangkok, Thailand',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          
          <div className="contact-content">
            <motion.div
              className="contact-info-centered"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-text">
                I'm always open to discussing new opportunities, interesting projects, 
                or collaborations in AI and software development.
              </p>
              
              <div className="contact-grid">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;