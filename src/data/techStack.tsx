// data/techStack.ts

export type TechCategory = 'frontend' | 'backend' | 'databases' | 'tools';

export type Tech = {
  name: string;
  logo: string;
  category: TechCategory;
};

const techStack: Tech[] = [
  // =====================
  // Frontend
  // =====================
  {
    name: 'Angular',
    logo: '/logos/angular-svgrepo-com.svg',
    category: 'frontend',
  },
  {
    name: 'Flutter',
    logo: '/logos/flutter-svgrepo-com.svg',
    category: 'frontend',
  },
  {
    name: 'Next.js',
    logo: '/logos/next-js-svgrepo-com.svg',
    category: 'frontend',
  },
  {
    name: 'React',
    logo: '/logos/react-javascript-js-framework-facebook-svgrepo-com.svg',
    category: 'frontend',
  },

  // =====================
  // Backend
  // =====================
  {
    name: 'Node.js',
    logo: '/logos/node-js-svgrepo-com.svg',
    category: 'backend',
  },
  {
    name: 'Golang',
    logo: '/logos/go-svgrepo-com.svg',
    category: 'backend',
  },

  // =====================
  // Databases
  // =====================
  {
    name: 'MySQL',
    logo: '/logos/mysql-logo-svgrepo-com.svg',
    category: 'databases',
  },
    {
    name: 'MongoDb',
    logo: '/logos/mongodb-logo-svgrepo-com.svg',
    category: 'databases',
  },
      {
    name: 'PostgresSql',
    logo: '/logos/postgresql-logo-svgrepo-com.svg',
    category: 'databases',
  },

  // =====================
  // Tools
  // =====================
  {
    name: 'Figma',
    logo: '/logos/figma-svgrepo-com.svg',
    category: 'tools',
  },
  {
    name: 'GitHub',
    logo: '/logos/github-svgrepo-com.svg',
    category: 'tools',
  },
];

export default techStack;



// // data/techStack.js
// const techStack = [
//     {
//       name: "Angular",
//       logo: "/logos/angular-svgrepo-com.svg",
//     },
//     {
//       name: "React",
//       logo: "/logos/react-javascript-js-framework-facebook-svgrepo-com.svg",
//     },
//     {
//       name: "Node - js",
//       logo: "/logos/node-js-svgrepo-com.svg",
//     },
//     {
//       name: "MySQL",
//       logo: "/logos/mysql-logo-svgrepo-com.svg",
//     },
//     {
//       name: "Next-js", 
//       logo: "/logos/next-js-svgrepo-com.svg",
//     },

//     {
//       name: "Flutter",
//       logo: "/logos/flutter-svgrepo-com.svg",
//     },
//     {
//       name: "Figma",
//       logo: "/logos/figma-svgrepo-com.svg",
//     },
//     {
//       name: "Github",
//       logo: "/logos/github-svgrepo-com.svg",
//     },

    
//   ];
  
//   export default techStack;
