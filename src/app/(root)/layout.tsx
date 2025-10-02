import React from 'react';
import Header from './components/navigations/header';
import Footer from './components/navigations/footer';


export const metadata = {
  title: 'Mawuli Stephen | Fullstack Software Engineer',
  description:
    'Experienced Fullstack Software Engineer skilled in building high-performance web and mobile applications using React, Next.js, Angular, Node.js, and Flutter. Open to remote opportunities worldwide.',
  keywords: [
    'Mawuli Stephen',
    'Fullstack JavaScript Developer',
    'Remote Node.js Developer',
    'Top Software Engineer',
    'React Developer',
    'Next.js Developer',
    'Angular Developer',
    'Express.js Backend Developer',
    'MySQL Developer',
    'PostgreSQL Developer',
    'Prisma ORM Expert',
    'Firebase Fullstack Developer',
    'Remote JavaScript Developer',
    'Freelance Fullstack Engineer',
    'Hire Node.js Developer',
    'Global Software Engineer',
    'Flutter & Web App Developer',
    'JavaScript Engineer for Hire',
    'Scalable Web Applications Expert',
    'Top Rated Fullstack Developer',
  ],
  openGraph: {
    title: 'Mawuli Stephen | Fullstack Developer & Software Engineer',
    description:
      'Global Fullstack Developer with expertise in React, Next.js, Node.js, Angular, and Flutter. Proven success building scalable applications across web and mobile platforms. Available for remote roles worldwide.',
    images: [
      {
        url: '/image/mawuli-stephen.jpg',
        width: 800,
        height: 600,
        alt: 'Mawuli Stephen Headshot',
      },
    ],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen"> {/* Ensure the container takes the full viewport height */}
      <header>
        <Header /> {/* Global Header */}
      </header>

      <main className=""> 
        {children} {/* This will render HomePage or any other public pages */}
      </main>

      <footer className="mt-auto"> {/* Ensures the footer sticks to the bottom if content is short */}
        <Footer /> 
      </footer>
    </div>
  );
}
