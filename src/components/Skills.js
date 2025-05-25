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
      skills: [
        { name: 'PyTorch', icon: <SiPytorch />, level: 95 },
        { name: 'Diffusion Models', icon: <FaBrain />, level: 90 },
        { name: 'Computer Vision', icon: <FaBrain />, level: 88 },
        { name: 'Voice Cloning', icon: <FaMicrophone />, level: 85 },
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 85 },
        { name: 'HuggingFace', icon: <SiHuggingface />, level: 90 },
        { name: 'NLP', icon: <FaBrain />, level: 80 },
        { name: 'Pandas', icon: <SiPandas />, level: 85 }
      ]
    },
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 95 },
        { name: 'JavaScript', icon: <FaJsSquare />, level: 85 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
        { name: 'Dart', icon: <SiDart />, level: 75 }
      ]
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'React', icon: <FaReact />, level: 85 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
        { name: 'FastAPI', icon: <SiFastapi />, level: 90 },
        { name: 'FastHTML', icon: <FaPython />, level: 85 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
        { name: 'HTML/CSS', icon: <FaHtml5 />, level: 90 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 }
      ]
    },
    {
      name: 'Tools & Cloud',
      skills: [
        { name: 'Git/GitHub', icon: <FaGithub />, level: 95 },
        { name: 'Docker', icon: <FaDocker />, level: 85 },
        { name: 'RunPod', icon: <FaAws />, level: 90 },
        { name: 'Google Cloud', icon: <SiGooglecloud />, level: 80 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75 },
        { name: 'ComfyUI', icon: <SiNvidia />, level: 90 }
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
          <h2 className="section-title">Skills & Technologies</h2>
          
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="category-title">{category.name}</h3>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="additional-skills">
            <h3 className="additional-title">Also Experienced With:</h3>
            <div className="tech-tags">
              {['Stable Diffusion', 'SDXL', 'ControlNet', 'LLMs', 'Serverless', 'Flutter', 'Figma', 'SASS', 'Edge Computing', 'MLOps', 'Voice AI', 'Generative AI', 'ONNX', 'Claude API'].map((tech, index) => (
                <motion.span
                  key={index}
                  className="tech-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + (index * 0.05) }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;