# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Thanarit Kanjanametawat's portfolio website - a modern, responsive React application showcasing AI research, projects, and technical expertise. The site features smooth animations, dark mode design, and includes a dedicated Stable Diffusion blog section.

## Architecture

### Core Structure
- **React SPA**: Built with React 18 and modern JavaScript
- **Component-Based**: Modular components for maintainability
- **Animation Framework**: Framer Motion for smooth animations
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox

### Tech Stack
- **Frontend**: React 18.2.0
- **Animation**: Framer Motion 11.0.0
- **Icons**: React Icons 5.0.1
- **Scroll**: React Scroll 1.9.0
- **Intersection Observer**: React Intersection Observer 9.5.3
- **Build Tool**: Create React App

### Key Components
1. **Navbar**: Fixed navigation with scroll effects and mobile menu
2. **Hero**: Animated landing section with gradient orbs
3. **About**: Personal introduction with stats
4. **Experience**: Timeline-based career/education display
5. **Projects**: Filterable project gallery with hover effects
6. **Skills**: Categorized skill display with progress bars
7. **Blog**: SD-related blog posts showcase
8. **Contact**: Contact form with social links
9. **Footer**: Site links and credits

### File Organization
```
├── package.json                  # Dependencies and scripts
├── public/
│   ├── index.html               # HTML template
│   └── manifest.json            # PWA manifest
├── src/
│   ├── App.js                   # Main app component
│   ├── App.css                  # Global styles
│   ├── index.js                 # React entry point
│   └── components/              # React components
│       ├── Navbar.js/css
│       ├── Hero.js/css
│       ├── About.js/css
│       ├── Experience.js/css
│       ├── Projects.js/css
│       ├── Skills.js/css
│       ├── Blog.js/css
│       ├── Contact.js/css
│       └── Footer.js/css
├── information/                 # Gathered portfolio data
│   ├── github_projects.json
│   └── personal_info.json
└── sd-pages/                    # Legacy SD blog posts (kept for reference)
```

## Development Workflow

### Initial Setup
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Adding New Content

#### New Project
1. Edit `src/components/Projects.js`
2. Add project object to `projects` array with:
   - title, description, image URL
   - tags array for filtering
   - technologies array with icons
   - github/live links

#### New Blog Post
1. Add to `blogPosts` array in `src/components/Blog.js`
2. Include thumbnail, title, excerpt, date
3. Link to existing SD pages or create new React components

#### Skill Updates
1. Edit `src/components/Skills.js`
2. Update `skillCategories` array
3. Add new skills with icon, name, and proficiency level

### Styling Guidelines
- **CSS Variables**: Use root variables for consistent theming
- **Dark Theme**: Primary color scheme with purple accents
- **Animations**: Subtle, performance-optimized transitions
- **Responsive**: Mobile-first with breakpoints at 768px, 1024px

### Component Patterns
```javascript
// Animation pattern with Framer Motion
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>

// Intersection Observer pattern
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.1
});
```

## Important Notes

- **React Development**: Uses Create React App with hot reloading
- **Icon Usage**: Import icons from react-icons (fa, si prefixes)
- **Image Optimization**: Use appropriate image sizes and formats
- **Performance**: Lazy load components and images where appropriate
- **Deployment**: Build creates optimized production bundle in `/build`
- **Environment Variables**: Use `.env` for sensitive data (not hardcoded)

## Testing & Quality Assurance

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

### Code Quality
- **Linting**: ESLint configuration included with Create React App
- **Formatting**: Consider using Prettier for consistent code style
- **Type Safety**: PropTypes or TypeScript can be added for better type checking

## Deployment Guidelines

### Building for Production
```bash
# Create optimized production build
npm run build

# Test production build locally
npx serve -s build
```

### Hosting Options
- **GitHub Pages**: Free hosting for static sites
- **Vercel**: Automatic deployments from GitHub
- **Netlify**: CI/CD integration with form handling
- **AWS S3**: Scalable static hosting with CloudFront CDN

### Performance Optimization
- Enable gzip compression on server
- Use CDN for static assets
- Implement lazy loading for images
- Code splitting for route-based chunks
- Minify CSS and JavaScript (handled by build process)

## Contact Form Integration

The contact form in `src/components/Contact.js` requires backend integration:
- Email service options: EmailJS, Formspree, or custom backend
- Environment variables for API keys
- Form validation and error handling
- Success/error message display

## Future Enhancements

Consider these improvements:
- Add unit tests for components
- Implement E2E testing with Cypress
- Add internationalization (i18n) support
- Progressive Web App (PWA) features
- SEO optimization with React Helmet
- Analytics integration (Google Analytics, Plausible)
- Dark/light theme toggle
- Blog post markdown support with MDX