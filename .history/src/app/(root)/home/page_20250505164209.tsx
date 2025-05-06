// app/public/home/home.tsx
import React from 'react';
import HeroSection from './hero';
import ProjectsSection from './projects';
import TechStackSection from './teckstack';
import SkillsSection from './skills';

// import Link from 'next/link';

const HomePage = () => {
  return (
    <div className=" bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground transition-colors duration-300 ">

      <HeroSection />
      <ProjectsSection />
      <TechStackSection />




        <SkillsSection />



      {/* </section> */}






      {/* <h1 className="title">Page Title</h1>
      <h2 className="subtitle">Section Subtitle</h2>
      <p className="body-text">Regular body text content...</p>
      <p className="body-text-lg">Larger body text for emphasis...</p> */}

    </div>
  );
};

export default HomePage;
