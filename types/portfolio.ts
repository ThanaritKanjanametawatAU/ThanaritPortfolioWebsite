import { ReactNode } from 'react'

export interface Stat {
  number: string
  label: string
}

export interface ExperienceItem {
  type: 'work' | 'education'
  title: string
  subtitle?: string
  company: string
  location: string
  period: string
  current?: boolean
  description: string
  highlights: string[]
  color: string
}

export interface Technology {
  icon: ReactNode
  name: string
}

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  technologies: Technology[]
  github?: string
  live?: string
  featured?: boolean
  color: string
}

export interface Category {
  id: string
  label: string
}

export interface Skill {
  name: string
  icon: ReactNode
}

export interface SkillCategory {
  name: string
  icon: ReactNode
  skills: Skill[]
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  link: string
}