// const techGroups = {
//   frontend: ["Next.js", "Tailwind CSS", "Angular", "Material UI", "Ejs", "vanilla css"],
//   backend: ["Express js", "Node.js"],
//   tools: ["MySQL", "MongoDb"],
// };

// const categorizeStack = (stack) => {
//   const grouped = { frontend: [], backend: [], tools: [] };
//   stack.forEach((tech) => {
//     const lowerTech = tech.toLowerCase();
//     if (techGroups.frontend.map(t => t.toLowerCase()).includes(lowerTech)) {
//       grouped.frontend.push(tech);
//     } else if (techGroups.backend.map(t => t.toLowerCase()).includes(lowerTech)) {
//       grouped.backend.push(tech);
//     } else if (techGroups.tools.map(t => t.toLowerCase()).includes(lowerTech)) {
//       grouped.tools.push(tech);
//     }
//   });
//   return grouped;
// };

// const projects = [
//   {
//     image: "/path/to/image1.jpg",
//     title: "Mawuli Stephen",
//     description: "A portfolio showcasing my work, blog, and contact info.",
//     url: "https://mawulistephen.com",
//     stack: categorizeStack(["Express js", "mysQl", "Next.js", "Tailwind CSS"])
//   },
//   {
//     image: "",
//     title: "233 Bite",
//     description: "Food shop that serves good meals.",
//     url: "https://233bite.example.com",
//     stack: categorizeStack(["Angular", "Material UI"])
//   },
//   {
//     image: "",
//     title: "Creatives Coterie",
//     description: "A real-time weather app using OpenWeatherMap API.",
//     url: "https://creativescg.com",
//     stack: categorizeStack(["Express js", "Ejs", "vanilla css", "MongoDb"])
//   },
//   {
//     image: "",
//     title: "Royal Institute Of Science and Entrepreneurship",
//     description: "A real-time weather app using OpenWeatherMap API.",
//     url: "https://royaise.com",
//     stack: categorizeStack(["Angular", "Material UI"])
//   },
//   {
//     image: "",
//     title: "233 Bite",
//     description: "A real-time weather app using OpenWeatherMap API.",
//     url: "https://233bite.com",
//     stack: categorizeStack(["Angular", "Material UI"])
//   },
//   {
//     image: "",
//     title: "233 Bite",
//     description: "A real-time weather app using OpenWeatherMap API.",
//     url: "https://233bite.com",
//     stack: categorizeStack(["Angular", "Material UI"])
//   }
// ];

// export default projects;




// data/projects.js
const projects = [
    // {
    //   image: "/path/to/image1.jpg",
    //   title: "Mawuli Stephen",
    //   description: "A portfolio showcasing my work, blog, and contact info.",
    //   url: "https://mawulistephen.com",
    //   stack: ['Express js','mysQl',"Next.js", "Tailwind CSS"]
    // },
    {
      image: "/porfolio/233bite.png",
      title: "233 Bite",
      description: "Food shop that serves good meals.",
      url: "https://233bite.com",
      stack: ["Angular", "Material UI", ]
    },
    {
      image: "/porfolio/cgh.png",
      title: "Creatives Coterie",
      description: "NGO website for creatives",
      url: "https://creativescg.com",
      stack: ["Express js", "Ejs", 'vanilla css', "MongoDb" ]
    },
    {
      image: "/porfolio/royaise.png",
      title: "Royal Instituete Of Science and Entreprenueship",
      description: "School website for students",
      url: "https://royaise.com",
      stack: ["React", "Bootstrap css", "Express js", "mysQl"]
    },
    {
      image: "/porfolio/meo-s.png",
      title: "Meomeo-Saas",
      // title: "233 Bite",
      description: "Restraunat Management Website local business",
      url: "https://meo-s.vercel.app",
      // url: "https://233bite.com",
      stack: ["Next.js", "Tailwind.css", "Express js", "handlebars", "mysQl"]
    },
    {
      image: "/porfolio/fastsql.png",
      title: "Fastsqli",
      description: "NPM package that helps in creating sql tables like mongodb.",
      url: "https://www.npmjs.com/package/fastsqli",
      stack: ["Express.js", "JavaScript", ]
    },
    // {
    //   image: "/logos/flutter-svgrepo-com.svg",
    //   title: "233 Bite",
    //   description: "A real-time weather app using OpenWeatherMap API.",
    //   url: "https://233bite.com",
    //   stack: ["Angular", "Material UI", ]
    // } ,  
    // {
    //   image: "/logos/flutter-svgrepo-com.svg",
    //   title: "233 Bite",
    //   description: "A real-time weather app using OpenWeatherMap API.",
    //   url: "https://233bite.com",
    //   stack: ["Angular", "Material UI", ]

    // }

    // https://meo-s.vercel.app/
  ];
  
  export default projects;
  