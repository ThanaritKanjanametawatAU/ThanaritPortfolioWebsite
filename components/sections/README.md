# TypeScript Next.js Portfolio Components

This directory contains the converted TypeScript Next.js components from the original React portfolio.

## Components

- **About.tsx** - About section with personal introduction and stats
- **Experience.tsx** - Timeline-based career and education display
- **Projects.tsx** - Filterable project gallery with hover effects
- **Skills.tsx** - Categorized skills display with technology icons
- **Blog.tsx** - Blog posts showcase with category tags

## Key Changes from React to Next.js TypeScript

1. **TypeScript Interfaces** - All data structures are properly typed
2. **Next.js Image** - Using `next/image` for optimized image loading
3. **Next.js Link** - Using `next/link` for internal navigation
4. **Tailwind CSS** - Converted inline styles to Tailwind utility classes
5. **Framer Motion** - Animations work seamlessly with Next.js
6. **Server Components** - Components use 'use client' directive for client-side features

## Usage

```tsx
import { About, Experience, Projects, Skills, Blog } from '@/components/sections'

export default function Page() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Blog />
    </>
  )
}
```

## Styling

Components use Tailwind CSS classes. Make sure your `tailwind.config.js` includes:
- Dark mode configuration
- Gray color scale (gray-700, gray-800, gray-900, gray-950)
- Purple accent colors

## Dependencies

Required packages:
- `framer-motion`
- `react-intersection-observer`
- `react-icons`
- `next`
- `react`
- `typescript`

## Notes

- GSAP animations from the original components have been removed in favor of Framer Motion
- All components are responsive and mobile-friendly
- Components follow Next.js 13+ app directory conventions
- Type definitions are in `/types/portfolio.ts`