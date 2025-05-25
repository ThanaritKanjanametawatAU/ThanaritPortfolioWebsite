# Thanarit Kanjanametawat's Portfolio

A modern, responsive portfolio website showcasing AI research, projects, and technical expertise. Built with React and featuring smooth animations, dark mode design, and a dedicated Stable Diffusion blog section.

![preview img](/preview-new.png)

## 🚀 Features

- **Modern React SPA**: Built with React 18 and modern JavaScript
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox
- **Dark Theme**: Professional dark mode design with purple accents
- **Interactive Components**: Filterable project gallery, animated skills display
- **Blog Section**: Dedicated Stable Diffusion tutorials and articles
- **Contact Form**: Integrated contact functionality with social links

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Animation**: Framer Motion 11.0.0
- **Icons**: React Icons 5.0.1
- **Scroll**: React Scroll 1.9.0
- **Intersection Observer**: React Intersection Observer 9.5.3
- **Build Tool**: Create React App

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ThanaritKanjanametawat/ThanaritPortfolioWebsite.git

# Navigate to project directory
cd ThanaritPortfolioWebsite

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📁 Project Structure

```
├── public/              # Static assets
├── src/
│   ├── App.js          # Main app component
│   ├── App.css         # Global styles
│   └── components/     # React components
│       ├── Navbar.js   # Navigation
│       ├── Hero.js     # Landing section
│       ├── About.js    # About section
│       ├── Experience.js # Timeline display
│       ├── Projects.js # Project gallery
│       ├── Skills.js   # Skills showcase
│       ├── Blog.js     # Blog posts
│       ├── Contact.js  # Contact form
│       └── Footer.js   # Site footer
├── information/        # Portfolio data (JSON)
└── sd-pages/          # Stable Diffusion blog content
```

## 🎨 Customization

### Adding New Projects
Edit `src/components/Projects.js` and add your project to the `projects` array:
```javascript
{
  title: "Project Name",
  description: "Project description",
  image: "/path/to/image",
  tags: ["tag1", "tag2"],
  technologies: [
    { icon: FaReact, name: "React" }
  ],
  github: "https://github.com/...",
  live: "https://..."
}
```

### Updating Skills
Edit `src/components/Skills.js` and update the `skillCategories` array.

### Adding Blog Posts
Edit `src/components/Blog.js` and add to the `blogPosts` array.

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints at 768px and 1024px
- Optimized for all device sizes

## 🚀 Deployment

The site builds to a static bundle that can be deployed to any static hosting service:

```bash
npm run build
```

Deploy the `/build` directory to your hosting platform of choice.

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Original design inspiration from [Bedimcode](https://www.youtube.com/@Bedimcode)
- Icons from React Icons
- Animations powered by Framer Motion
