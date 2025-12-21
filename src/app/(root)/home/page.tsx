// app/public/home/home.tsx
import React from 'react';
import HeroSection from './hero';
// import TechStackSection from './teckstack';
import FoldersSection from './foldersection';

const HomePage = () => {
  return (
    <div className="w-full max-auto bg-background transition-colors duration-300">
      <HeroSection />

      {/* Folder-style navigation cards */}
      <FoldersSection />

      {/* <TechStackSection /> */}
    </div>
  );
};

export default HomePage;


// // app/public/home/home.tsx
// import React from 'react';
// import HeroSection from './hero';
// // import ProjectsSection from './projects';
// import TechStackSection from './teckstack';
// // import SkillsSection from './skills';
// // import JsonLd from '../components/JsonLd';


// // import Link from 'next/link';

// const HomePage = () => {
//   return (
//     <div className="w-full max-auto bg-background  transition-colors duration-300 ">
//          {/* <JsonLd /> */}

//       <HeroSection />

//       {/* We want to put cards in grid of two, that shows projects, teckstacks like a folder, when clicked then opens a different page */}
//       {/* <ProjectsSection /> */}

//       <TechStackSection />

//       {/* <SkillsSection /> */}

//     </div>
//   );
// };

// export default HomePage;
