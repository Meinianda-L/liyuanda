import homepageConfig from './data/homepage.js';
import projectConfig from './data/projects.js';
import blogConfig from './data/blogs.js';

// ============================================
// Yuanda Li Personal Website Config
// Edit this file to customize your website
// ============================================

const GITHUB_PAGES_BASE = '/liyuanda';

const withBase = (path: string) => {
  if (path.startsWith('/')) {
    return `${GITHUB_PAGES_BASE}${path}`;
  }

  return `${GITHUB_PAGES_BASE}/${path}`;
};

const pickByTitles = (items: Array<{ title: string }>, titles: string[]) => {
  if (!titles.length) return items;

  const titleSet = new Set(titles);
  return items.filter((item) => titleSet.has(item.title));
};

const normalizeLink = (path: string | undefined, fallback: string) => {
  if (!path) return withBase(fallback);
  return withBase(path);
};

const publishedProjects = (projectConfig.projects ?? []).filter((item: { published?: boolean }) => item.published);
const publishedBlogs = (blogConfig.posts ?? []).filter((item: { published?: boolean }) => item.published);

const selectedProjectTitles = homepageConfig.preview?.projects ?? [];
const selectedBlogTitles = homepageConfig.preview?.blogs ?? [];

const projectPreviewItems = pickByTitles(publishedProjects, selectedProjectTitles).slice(0, 4).map((item: {
  title: string;
  image?: string;
  htmlFile?: string;
}) => ({
  title: item.title,
  description: '',
  image: item.image || 'images/fun1.jpg',
  link: normalizeLink(item.htmlFile, 'projects.html'),
}));

const blogPreviewItems = pickByTitles(publishedBlogs, selectedBlogTitles).slice(0, 4).map((item: {
  title: string;
  image?: string;
  htmlFile?: string;
}) => ({
  title: item.title,
  description: '',
  image: item.image || 'images/fun1.jpg',
  link: normalizeLink(item.htmlFile, 'blog.html'),
}));

export const config = {
  // ============================================
  // Personal Info
  // ============================================
  personal: {
    name: 'Yuanda Li',
    nameCn: '李原达',
    logo: 'YD',
    grade: 'Grade 8',
    school: 'Beijing Academy',
    location: 'Beijing, China',
    email: 'lydbest@outlook.com',
    wechat: 'Meinianda_Li',
    year: '2026',
  },

  // ============================================
  // Navigation
  // ============================================
  navigation: {
    links: [
      { label: 'About', href: withBase('/#about') },
      { label: 'Projects', href: withBase('/projects.html') },
      { label: 'Blog', href: withBase('/blog.html') },
      { label: 'Contact', href: withBase('/#contact') },
    ],
  },

  // ============================================
  // Hero Section (Cover)
  // ============================================
  hero: {
    greeting: "Hi, I'm",
    name: 'Yuanda Li',
    subtitle: 'A passionate innovator exploring robotics, music, and technology',
    // Gradient colors for background
    gradient: {
      colors: ['#f4d0c4', '#e8b8a8', '#d4a08c', '#c99480', '#f4d0c4'],
      duration: '15s',
    },
    // Mouse spotlight effect
    spotlight: {
      enabled: true,
      size: '800px',
      intensity: 0.12,
    },
  },

  // ============================================
  // About Section (Main Page)
  // - Fixed position, image carousel on scroll
  // ============================================
  about: {
    sectionTitle: 'About Me',
    shortDescription: 'I am Yuanda Li, a Grade 8 student passionate about robotics, music, sports and continuous learning.',
    ctaButton: {
      text: 'Learn More',
      href: withBase('/about-detail.html'),
    },
    // Images that cycle on scroll (fixed position until last image)
    images: homepageConfig.aboutImages,
  },

  // ============================================
  // About Detail Page Content
  // - Shown only on about-detail.html
  // ============================================
  aboutDetail: {
    pageTitle: 'About Yuanda Li',
    journey: {
      title: 'My Journey',
      sections: [
        {
          heading: 'Robotics Passion',
          text: 'Since Grade 4, I have dedicated over 7-8 hours weekly to VEX robotics. I have won multiple national competitions and developed strong skills in mechanical design and programming. I self-taught advanced mathematics to overcome programming challenges and developed efficient control systems.',
          image: 'images/vex_about.jpg',
        },
        {
          heading: 'Musical Excellence',
          text: 'I joined the Fuxue Hutong Primary School Golden Sail Marching Band in Grade 4, rising from an ordinary member to principal clarinetist. I have passed the Level 10 certification from the China Conservatory of Music.',
          image: 'https://images.unsplash.com/photo-1514117445516-2ecfc9c4ec90?w=600&h=400&fit=crop',
        },
        {
          heading: 'Athletic Pursuits',
          text: 'For four years, I have maintained consistent training in squash and badminton. Badminton has improved my reaction speed and teamwork, while squash has strengthened my instant judgment and stress resistance.',
          image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop',
        },
        {
          heading: 'Academic Exploration', 
          text: 'I enjoy self-directed learning. I studied AMC10 independently and achieved a score of 64.5 in 2025. When facing challenges in robot programming, I actively seek solutions through English literature and AI tools.',
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
        },
      ],
    },
    awards: {
      title: 'Honors & Awards',
      items: [
        {
          id: 1,
          title: 'VEX Robotics Elite Invitational Champion',
          description: '2025 2nd "Nangong Cup" v5rc - Junior High Champion, awarded by Harbin Institute of Technology (Shenzhen)',
          date: '2025',
          category: 'Robotics',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        },
        {
          id: 2,
          title: 'VEX Asia Open Best Software Programming Award',
          description: '2025-2026 VEX Robotics Asia Open International Signature Event, developed efficient control systems',
          date: '2025',
          category: 'Programming',
          image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
        },
        {
          id: 3,
          title: "World Scholar's Cup Multiple Awards",
          description: 'Team Debate Silver, Team Challenge Gold, Individual Silver - Qualified for Yale Global Round',
          date: '2025',
          category: 'Academic',
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
        },
        {
          id: 4,
          title: 'Clarinet Level 10 Certification',
          description: 'Principal clarinetist of Golden Sail Marching Band, certified by China Conservatory of Music',
          date: '2024',
          category: 'Arts',
          image: 'https://images.unsplash.com/photo-1514117445516-2ecfc9c4ec90?w=600&h=400&fit=crop',
        },
        {
          id: 5,
          title: 'British Biology Challenge Global Bronze',
          description: 'Demonstrating passion for life sciences through the British Biology Olympiad Committee',
          date: '2024',
          category: 'Science',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        },
        {
          id: 6,
          title: 'VEX Asia Open Finals 3rd Place',
          description: '2022-2023 season, collaborated with team to achieve 3rd place in Asia Open Finals',
          date: '2023',
          category: 'Robotics',
          image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
        },
      ],
    },
  },

  // ============================================
  // Preview Sections (for homepage)
  // ============================================
  preview: {
    projects: {
      enabled: true,
      title: 'Projects',
      subtitle: 'Innovations. Creations. Explorations.',
      viewAllText: 'View All Projects',
      viewAllLink: withBase('/projects.html'),
      items: projectPreviewItems,
    },
    blog: {
      enabled: true,
      title: 'Blog',
      subtitle: 'Thoughts. Insights. Stories.',
      viewAllText: 'Read All Posts',
      viewAllLink: withBase('/blog.html'),
      items: blogPreviewItems,
    },
  },

  // ============================================
  // Quote Section
  // ============================================
  quote: {
    text: 'I want to create technology that empowers humanity, that deepens our understanding of the world, and that strengthens our connections to each other.',
    author: 'Yuanda Li',
  },

  // ============================================
  // Footer
  // ============================================
  footer: {
    description: 'Yuanda Li - A Grade 8 student passionate about technology, arts, and sports.',
    copyright: '© 2026 Yuanda Li. All rights reserved.',
  },

  // ============================================
  // Theme Settings
  // ============================================
  theme: {
    primaryColor: '#c9a88c',
    fontFamily: {
      heading: "Georgia, 'Times New Roman', serif",
      body: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
  },
};

export default config;
