// ============================================
// Homepage Configuration
// Edit this file to customize your homepage
// ============================================

export const homepageConfig = {
  // ============================================
  // Hero Section (Cover)
  // ============================================
  hero: {
    // Greeting text above name
    greeting: "Hi, I'm",
    
    // Your name (main display)
    name: 'Yuanda Li',
    
    // Subtitle/description
    subtitle: 'A passionate innovator exploring robotics, music, and technology',
    
    // Background gradient colors
    gradientColors: ['#f4d0c4', '#e8b8a8', '#d4a08c', '#c99480'],
    
    // Spotlight effect settings
    spotlight: {
      enabled: true,
      size: '1200px',
      intensity: 0.35
    }
  },

  // ============================================
  // About Section Images
  // These images cycle when scrolling
  // ============================================
  // Order requested: fun1 -> music1 -> vex2 -> fun
  // Note: available files are vex2.jpg and fun.jpg in /public/images
  aboutImages: [
    {
      id: 1,
      src: 'images/fun1.jpg',
      alt: 'Fun 1'
    },
    {
      id: 2,
      src: 'images/music1.png',
      alt: 'Music'
    },
    {
      id: 3,
      src: 'images/vex2.jpg',
      alt: 'VEX 2'
    },
    {
      id: 4,
      src: 'images/fun.jpg',
      alt: 'Fun'
    }
  ],

  // Pick up to 4 titles for homepage preview.
  // Titles must match exactly the title in projects.js / blogs.js.
  preview: {
    projects: [],
    blogs: []
  },

  // ============================================
  // About Section Text
  // ============================================
  about: {
    sectionTitle: 'About Me',
    description: 'I am Yuanda Li, a Grade 8 student passionate about robotics, music, and continuous learning. I have spent four years in VEX robotics and hold a Level 10 certification in clarinet.',
    ctaButton: {
      text: 'Learn More',
      link: '/about-detail.html'
    }
  },

  // ============================================
  // Quote Section
  // ============================================
  quote: {
    text: 'I want to create technology that empowers humanity, that deepens our understanding of the world, and that strengthens our connections to each other.',
    author: 'Yuanda Li'
  }
};

export default homepageConfig;
