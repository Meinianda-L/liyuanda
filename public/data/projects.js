// ============================================
// Projects Configuration
// Edit this to add/modify projects
// This config is used by projects.html
// ============================================

export const projectConfig = {
  projects: [
    {
      id: 1,
      title: 'FileAtlas: Local File Intelligence',
      description: 'A local-first file indexer and search engine that helps people find files by intent, not only by exact filename.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
      category: 'Software',
      year: '2026',
      htmlFile: 'project-fileatlas.html',
      published: true
    }
    // {
    //   id: 1,
    //   title: 'VEX Robot Control System',
    //   description: 'An advanced control system for VEX robotics competitions featuring autonomous navigation and precision control.',
    //   image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
    //   category: 'Robotics',
    //   year: '2025',
    //   htmlFile: 'project-vex-control.html',
    //   published: true
    // },
    // {
    //   id: 2,
    //   title: 'Autonomous Navigation Algorithm',
    //   description: 'Implemented PID control and sensor fusion for accurate robot positioning in competition environments.',
    //   image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
    //   category: 'Programming',
    //   year: '2024',
    //   htmlFile: 'project-navigation.html',
    //   published: true
    // },
    // {
    //   id: 3,
    //   title: 'Mechanical Design Portfolio',
    //   description: 'Collection of CAD designs and mechanical structures for various robotics challenges.',
    //   image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop',
    //   category: 'Engineering',
    //   year: '2024',
    //   htmlFile: 'project-mechanical.html',
    //   published: true
    // }
  ]
};

// ============================================
// TEMPLATE for adding new projects:
//
// {
//   id: 4,
//   title: 'Your Project Name',
//   image: 'images/your-cover.jpg',
//   htmlFile: '/projects/your-project-title.html',
//   published: true
// }
//
// Then create the HTML file in /public/projects
// ============================================

export default projectConfig;
