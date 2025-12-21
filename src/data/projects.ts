export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Waliyo',
    description: 'Saas software for invoicing and inventory management',
    image: '/porfolio/waliyo.png',
    tags: ['React', 'Go-lang', 'Postrgress', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://waliyo.com',
    featured: true
  },
    {
      id: '2',
      image: "/porfolio/233bite.png",
      title: "233 Bite",
      description: "Food shop that serves good meals. The project comprises store fronts, dashboards and mobile app",
      liveUrl: "https://233bite.com",
      tags: ["Angular", "Material UI, ", ]
    },
  // {
  //   id: '3',
  //   title: 'Task Management App',
  //   description: 'A collaborative task management application with real-time updates and team features.',
  //   image: '/images/projects/taskapp.jpg',
  //   tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
  //   githubUrl: 'https://github.com/yourusername/taskapp',
  //   featured: true
  // },
  // {
  //   id: '3',
  //   title: 'Portfolio Website',
  //   description: 'A personal portfolio website built with modern web technologies.',
  //   image: '/images/projects/portfolio.jpg',
  //   tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  //   githubUrl: 'https://github.com/yourusername/portfolio',
  //   liveUrl: 'https://yourportfolio.com',
  //   featured: true
  // },
  // {
  //   id: '4',
  //   title: 'Weather Dashboard',
  //   description: 'A weather application that displays current and forecasted weather data.',
  //   image: '/images/projects/weather.jpg',
  //   tags: ['React', 'OpenWeather API', 'Chart.js'],
  //   githubUrl: 'https://github.com/yourusername/weather-app',
  //   featured: false
  // },
  // {
  //   id: '5',
  //   title: 'Recipe Finder',
  //   description: 'Search and save your favorite recipes with nutritional information.',
  //   image: '/porfolio/233bite.png',
  //   tags: ['Vue.js', 'Spoonacular API', 'Vuex'],
  //   githubUrl: 'https://github.com/yourusername/recipe-finder',
  //   featured: false
  // },
  // {
  //   id: '6',
  //   title: 'Fitness Tracker',
  //   description: 'A mobile-first fitness tracking application with workout plans and progress tracking.',
  //   image: '/porfolio/233bite.png',
  //   tags: ['React Native', 'Firebase', 'Redux'],
  //   githubUrl: 'https://github.com/yourusername/fitness-tracker',
  //   featured: true
  // }
];

export const allTags = Array.from(
  new Set(projects.flatMap(project => project.tags))
).sort();
