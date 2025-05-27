'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaArrowRight, FaClock, FaCalendar } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  link: string
}

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const blogPosts: BlogPost[] = [
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
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      'Stable Diffusion': 'bg-purple-500',
      'Web Development': 'bg-blue-500',
      'AI Research': 'bg-green-500'
    }
    return colors[category] || 'bg-gray-500'
  }

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sharing my knowledge and experiences in AI, Stable Diffusion, and web development
            </p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 ${getCategoryColor(post.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {post.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock /> {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                  >
                    Read More 
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/stable-diffusion-catalog.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View All Posts
              <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog