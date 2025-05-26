import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaClock, FaCalendar } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const blogPosts = [
    {
      id: 1,
      title: 'Create Filter Effect in ComfyUI',
      excerpt: 'Learn how to create custom filter effects using ComfyUI for Stable Diffusion, enhancing your image generation workflow with advanced techniques.',
      image: '/sd-pages/assets/img/a1/thumbnail.png',
      category: 'Stable Diffusion',
      date: 'September 10, 2024',
      readTime: '8 min read',
      link: '/sd-pages/a1-create-filter.html'
    },
    {
      id: 2,
      title: 'Create Consistent Character in ComfyUI',
      excerpt: 'Master the art of creating consistent character designs using ComfyUI for Stable Diffusion, ensuring your characters remain true to your vision.',
      image: '/sd-pages/assets/img/a2/thumbnail.png',
      category: 'Stable Diffusion',
      date: 'September 15, 2024',
      readTime: '10 min read',
      link: '/sd-pages/a2-create-consistent-character.html'
    },
    {
      id: 3,
      title: 'Build a Stable Diffusion Website with FastHTML',
      excerpt: 'Step-by-step guide on creating a responsive website for Stable Diffusion projects using the modern FastHTML framework.',
      image: '/sd-pages/assets/img/a3/thumbnail.png',
      category: 'Web Development',
      date: 'September 20, 2024',
      readTime: '12 min read',
      link: '/sd-pages/a3-build-sd-website-fasthtml.html'
    },
    {
      id: 4,
      title: 'Fish Speech Voice Cloning',
      excerpt: 'Comprehensive guide to understanding Fish Speech\'s mathematical foundations, from vector quantization to dual autoregressive architectures.',
      image: '/sd-pages/assets/img/a4/thumbnail.png',
      category: 'AI Research',
      date: 'May 26, 2025',
      readTime: '20 min read',
      link: '/sd-pages/a4-fish-speech-voice-cloning.html'
    }
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="section-subtitle">
            Sharing my knowledge and experiences in AI, Stable Diffusion, and web development
          </p>
          
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">
                      <FaCalendar /> {post.date}
                    </span>
                    <span className="blog-read-time">
                      <FaClock /> {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  
                  <a href={post.link} className="blog-link" target="_blank" rel="noopener noreferrer">
                    Read More <FaArrowRight />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="blog-cta">
            <a href="/stable-diffusion-catalog.html" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View All Posts
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;