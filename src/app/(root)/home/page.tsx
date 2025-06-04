// app/public/home/home.tsx
import React from 'react';
import HeroSection from './hero';
import ProjectsSection from './projects';
import TechStackSection from './teckstack';
// import SkillsSection from './skills';
import JsonLd from '../components/JsonLd';


// import Link from 'next/link';

const HomePage = () => {
  return (
    <div className=" bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground transition-colors duration-300 ">
         <JsonLd />

      <HeroSection />
      <ProjectsSection />
      <TechStackSection />

      {/* <SkillsSection /> */}

    </div>
  );
};

export default HomePage;
