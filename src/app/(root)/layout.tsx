import React from 'react';
import Header from './components/navigations/header';
import Footer from './components/navigations/footer';

export const metadata = {
  // title: 'Mawuli Stephen | Portfolio',
  "keywords": [
    "Mawuli Stephen",
    "Fullstack JavaScript Developer in Ghana",
    "Node.js Developer in Ghana",
    "Top Software Engineer Ghana",
    "React and Next.js Expert Ghana",
    "Angular Developer Ghana",
    "Express.js Backend Developer",
    "MySQL and PostgreSQL Developer",
    "Prisma ORM Expert",
    "Firebase Fullstack Developer",
    "Remote Node.js Developer",
    "GitHub Portfolio Developer Ghana",
    "Fullstack Developer Render Hosting",
    "JavaScript Developer for Hire",
    "Best Fullstack Developers in Ghana",
    "Node.js + React Developer for Startups",
    "Experienced Fullstack Engineer Ghana",
    "Hire Node.js Developer Mawuli Stephen",
    "Ghanaian Software Engineer with React and Node.js",
    "Top Rated Freelance Developer Ghana"
  ],
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensure the container takes the full viewport height */}
      <header>
        <Header /> {/* Global Header */}
      </header>

      <main className="flex-grow">
        {children} {/* This will render HomePage or any other public pages */}
      </main>

      <footer className="mt-auto"> {/* Ensures the footer sticks to the bottom if content is short */}
        <Footer /> {/* Global Footer */}
      </footer>
    </div>
  );
}
