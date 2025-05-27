"use client"

import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                TK
              </span>
            </h3>
            <p className="text-muted-foreground">
              AI Researcher & Software Engineer passionate about creating intelligent solutions 
              that make a difference.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => scrollToSection(e, '#projects')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  onClick={(e) => scrollToSection(e, '#blog')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Latest Work</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://github.com/ThanaritKanjanametawatAU/Senior-Project-I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  PCB Defect Generation
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/ThanaritKanjanametawatAU/asl_detection_application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ASL Detection
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/ThanaritKanjanametawatAU/SDXL-Web-Demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  SDXL Web Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/ThanaritKanjanametawatAU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/thanarit-kanjanametawat-1354b7211/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:thanarit.bonus@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>
            © {currentYear} Thanarit Kanjanametawat. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer