"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Github, MapPin, MessageSquare } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const HuggingFaceIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.6 18.06c-.36.28-.87.28-1.23 0l-.15-.12c-.41-.32-1.03-.32-1.44 0l-.15.12c-.36.28-.87.28-1.23 0l-.15-.12c-.41-.32-1.03-.32-1.44 0l-.15.12c-.36.28-.87.28-1.23 0-.45-.36-.75-1.03-.46-1.63l1.08-2.16c.09-.18.26-.29.45-.29h5.4c.2 0 .37.11.45.29l1.08 2.16c.29.6-.01 1.27-.46 1.63zM5.7 10.5c.58 0 1.05-.47 1.05-1.05s-.47-1.05-1.05-1.05-1.05.47-1.05 1.05.47 1.05 1.05 1.05zm13.65 0c.58 0 1.05-.47 1.05-1.05s-.47-1.05-1.05-1.05-1.05.47-1.05 1.05.47 1.05 1.05 1.05zm2.35 4.5c0 6.05-4.7 10.75-10.75 10.75S.2 21.05.2 15 4.9 4.25 10.95 4.25 21.7 8.95 21.7 15z"/>
    </svg>
  )

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'thanarit.bonus@gmail.com',
      link: 'mailto:thanarit.bonus@gmail.com'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Thanarit Kanjanametawat',
      link: 'https://www.linkedin.com/in/thanarit-kanjanametawat-1354b7211/'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'ThanaritKanjanametawatAU',
      link: 'https://github.com/ThanaritKanjanametawatAU'
    },
    {
      icon: HuggingFaceIcon,
      title: 'HuggingFace',
      value: 'Thanarit',
      link: 'https://huggingface.co/Thanarit'
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      value: 'bonusmoney0',
      link: 'https://discord.com/users/bonusmoney0'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bangkok, Thailand',
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-center mb-4">Let&apos;s Connect</h3>
              <p className="text-center text-muted-foreground mb-12">
                I&apos;m always open to discussing new opportunities, interesting projects, 
                or collaborations in AI and software development.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => {
                  const cardContent = (
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group">
                      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold mb-2">{info.title}</h4>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </Card>
                  )

                  if (info.link) {
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <Link
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          {cardContent}
                        </Link>
                      </motion.div>
                    )
                  } else {
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        {cardContent}
                      </motion.div>
                    )
                  }
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact