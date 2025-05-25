import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaPython, FaJsSquare, FaReact, FaGitAlt, FaDocker, FaAws,
  FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaBrain, FaMicrophone
} from 'react-icons/fa';
import { 
  SiPytorch, SiTensorflow, SiFlutter, SiDart, SiTypescript,
  SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss,
  SiFigma, SiGooglecloud, SiPandas, SiFastapi, SiHuggingface,
  SiRunkeeper, SiNvidia
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      name: 'AI & Machine Learning',
      icon: <FaBrain />,
      skills: [
        { name: 'PyTorch', icon: <SiPytorch /> },
        { name: 'Diffusion Models', icon: <FaBrain /> },
        { name: 'Computer Vision', icon: <FaBrain /> },
        { name: 'Voice Cloning', icon: <FaMicrophone /> },
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'HuggingFace', icon: <SiHuggingface /> },
        { name: 'NLP', icon: <FaBrain /> },
        { name: 'Pandas', icon: <SiPandas /> }
      ]
    },
    {
      name: 'Languages',
      icon: <FaPython />,
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'JavaScript', icon: <FaJsSquare /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Dart', icon: <SiDart /> }
      ]
    },
    {
      name: 'Web & Mobile',
      icon: <FaReact />,
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> }
      ]
    },
    {
      name: 'Tools & Cloud',
      icon: <FaDocker />,
      skills: [
        { name: 'Git', icon: <FaGithub /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'RunPod', icon: <FaAws /> },
        { name: 'Google Cloud', icon: <SiGooglecloud /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'ComfyUI', icon: <SiNvidia /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">Technologies I work with daily</p>
          </div>
          
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.name}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="additional-skills"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="additional-title">Other Technologies</h3>
            <div className="tech-tags">
              {['Stable Diffusion', 'SDXL', 'ControlNet', 'LLMs', 'Serverless', 'Figma', 'SASS', 'Edge Computing', 'MLOps', 'Voice AI', 'Generative AI', 'ONNX', 'Claude API', 'Gradio', 'Streamlit'].map((tech, index) => (
                <motion.span
                  key={index}
                  className="tech-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.03) }}
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-primary)', color: 'white' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;