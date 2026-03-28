export const config = {
  personal: {
    name: 'Yuanda Li',
    logo: 'YD',
    email: 'lydbest@outlook.com',
    wechat: 'Meinianda_Li',
    year: '2026',
  },

  navigation: {
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Blog', to: '/blog' },
    ],
  },

  hero: {
    greeting: "Hi, I'm",
    name: 'Yuanda Li',
    subtitle: 'A passionate innovator exploring robotics, music, and technology',
  },

  about: {
    sectionTitle: 'About Me',
    shortDescription: 'I am Yuanda Li, a Grade 8 student passionate about robotics, music, sports and continuous learning.',
    ctaButton: {
      text: 'Learn More',
      href: '/about',
    },
    images: [
      { src: `${import.meta.env.BASE_URL}images/vex_about.jpg`, alt: 'Robotics' },
      { src: `${import.meta.env.BASE_URL}images/fun1.jpg`, alt: 'Sports' },
    ],
  },

  aboutPage: {
    title: 'About Yuanda Li',
    journeyTitle: 'My Journey',
    journeyCards: [
      {
        tag: 'Since Grade 4',
        title: 'Robotics Passion',
        text: 'Since Grade 4, I have dedicated over 7-8 hours weekly to VEX robotics. I have won multiple national competitions and developed strong skills in mechanical design and programming. I self-taught advanced mathematics to overcome programming challenges and developed efficient control systems.',
        image: `${import.meta.env.BASE_URL}images/vex_about.jpg`,
        fallbackImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      },
      {
        tag: 'Level 10',
        title: 'Musical Excellence',
        text: 'I joined the Fuxue Hutong Primary School Golden Sail Marching Band in Grade 4, rising from an ordinary member to principal clarinetist. I have passed the Level 10 certification from the China Conservatory of Music.',
        image: `${import.meta.env.BASE_URL}images/music1.png`,
        fallbackImage: 'https://images.unsplash.com/photo-1514117445516-2ecfc9c4ec90?w=600&h=400&fit=crop',
      },
    ],
    awardsTitle: 'Honors & Awards',
    awardsByYear: [
      {
        year: '2025',
        items: [
          {
            category: 'Robotics',
            title: 'VEX Robotics Elite Invitational Champion',
            description: '"Nangong Cup" v5rc Junior High Champion',
          },
          {
            category: 'Programming',
            title: 'VEX Asia Open Best Software Award',
            description: 'International Signature Event',
          },
          {
            category: 'Academic',
            title: "World Scholar's Cup Awards",
            description: 'Team Debate Silver, Team Challenge Gold, Qualified for Yale',
          },
        ],
      },
      {
        year: '2024',
        items: [
          {
            category: 'Arts',
            title: 'Clarinet Level 10 Certification',
            description: 'China Conservatory of Music',
          },
          {
            category: 'Science',
            title: 'British Biology Challenge Global Bronze',
            description: 'British Biology Olympiad Committee',
          },
        ],
      },
      {
        year: '2023',
        items: [
          {
            category: 'Robotics',
            title: 'VEX Asia Open Finals 3rd Place',
            description: '2022-2023 Season',
          },
        ],
      },
    ],
  },

  projects: [],

  blogs: [],

  quote: {
    text: 'In the depths of uncertainty, the quest for meaning becomes the compass guiding the journey of existence.',
    author: '',
  },

  footer: {
    description: 'Yuanda Li - A Grade 8 student passionate about technology, arts, and sports.',
    copyright: '© 2026 Yuanda Li. All rights reserved.',
  },

  theme: {
    primaryColor: '#c9a88c',
    fontFamily: {
      heading: "'Playfair Display', Georgia, serif",
      body: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
  },
};

export default config;
