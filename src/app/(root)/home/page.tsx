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

      {/* Hero Section */}
      <section className=" bg-dark-700 items-center justify-center text-center text-foreground dark:text-dark-foreground  py-20 px-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Skills & Experience
          <span className="text-primary">.</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Wide range of skills and experience in software enginering, marketing, and design.
          {/* <br> That comes together in designing solutions </br> */}
        </p>

        {/* <div className="bg-background dark:bg-dark-background">
          bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground
          <p className="text-foreground dark:text-dark-foreground">Content</p>
          <button className="bg-primary dark:bg-dark-primary">Button</button>


        </div> */}


        <SkillsSection />



      </section>






      <h1 className="title">Page Title</h1>
      <h2 className="subtitle">Section Subtitle</h2>
      <p className="body-text">Regular body text content...</p>
      <p className="body-text-lg">Larger body text for emphasis...</p>

    </div>
  );
};

export default HomePage;
