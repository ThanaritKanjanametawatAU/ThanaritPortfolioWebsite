"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const controls = useAnimation()
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  }

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
  }

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8 + (i * 0.1),
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  }

  const HuggingFaceIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.6 18.06c-.36.28-.87.28-1.23 0l-.15-.12c-.41-.32-1.03-.32-1.44 0l-.15.12c-.36.28-.87.28-1.23 0l-.15-.12c-.41-.32-1.03-.32-1.44 0l-.15.12c-.36.28-.87.28-1.23 0-.45-.36-.75-1.03-.46-1.63l1.08-2.16c.09-.18.26-.29.45-.29h5.4c.2 0 .37.11.45.29l1.08 2.16c.29.6-.01 1.27-.46 1.63zM5.7 10.5c.58 0 1.05-.47 1.05-1.05s-.47-1.05-1.05-1.05-1.05.47-1.05 1.05.47 1.05 1.05 1.05zm13.65 0c.58 0 1.05-.47 1.05-1.05s-.47-1.05-1.05-1.05-1.05.47-1.05 1.05.47 1.05 1.05 1.05zm2.35 4.5c0 6.05-4.7 10.75-10.75 10.75S.2 21.05.2 15 4.9 4.25 10.95 4.25 21.7 8.95 21.7 15z"/>
    </svg>
  )

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div className="mb-8 relative inline-block" variants={imageVariants}>
            <div className="relative w-48 h-48 mx-auto">
              <Image
                src="/assets/img/CurrentPicture.png"
                alt="Thanarit Kanjanametawat"
                fill
                className="rounded-full object-cover border-4 border-primary/20"
                priority
              />
              <div className="absolute inset-0 rounded-full border-4 border-primary/40 animate-ping" />
            </div>
          </motion.div>
          
          <motion.div className="space-y-4" variants={itemVariants}>
            <p className="text-muted-foreground text-lg">Hello, I&apos;m</p>
            <h1 
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Thanarit Kanjanametawat
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              AI Researcher • Machine Learning Engineer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crafting intelligent solutions at the intersection of research and real-world applications.
              Specializing in computer vision, deep learning, and generative AI.
            </p>
          </motion.div>

          <motion.div className="mt-8 flex flex-wrap gap-4 justify-center" variants={itemVariants}>
            <Button asChild size="lg">
              <Link href="#experience">View Experience</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">See Projects</Link>
            </Button>
          </motion.div>

          <motion.div className="mt-12 flex gap-4 justify-center">
            {[
              { icon: Github, href: "https://github.com/ThanaritKanjanametawatAU", title: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/thanarit-kanjanametawat-1354b7211/", title: "LinkedIn" },
              { icon: HuggingFaceIcon, href: "https://huggingface.co/Thanarit", title: "HuggingFace" },
              { icon: MessageSquare, href: "https://discord.com/users/bonusmoney0", title: "Discord" },
              { icon: Mail, href: "mailto:thanarit.bonus@gmail.com", title: "Email" }
            ].map((social, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={socialVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  title={social.title}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
            <div className="w-1 h-3 bg-muted-foreground/30 rounded-full animate-bounce mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero