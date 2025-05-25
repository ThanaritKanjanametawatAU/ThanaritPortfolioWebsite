import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo gradient-text">TK</h3>
            <p className="footer-description">
              AI Researcher & Software Engineer passionate about creating intelligent solutions 
              that make a difference.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Latest Work</h4>
            <ul className="footer-links">
              <li><a href="https://github.com/ThanaritKanjanametawatAU/Senior-Project-I">PCB Defect Generation</a></li>
              <li><a href="https://github.com/ThanaritKanjanametawatAU/asl_detection_application">ASL Detection</a></li>
              <li><a href="https://github.com/ThanaritKanjanametawatAU/SDXL-Web-Demo">SDXL Web Demo</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/ThanaritKanjanametawatAU" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/thanarit-kanjanametawat-1354b7211/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:thanarit.k@example.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Thanarit Kanjanametawat. All rights reserved.
          </p>
          <p className="footer-credit">
            Made with <FaHeart className="heart-icon" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;