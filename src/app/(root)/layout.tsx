import React from 'react';
import Header from './components/navigations/header';
import Footer from './components/navigations/footer';

export const metadata = {
  title: 'Mawuli Stephen | Portfolio',
  description: 'Christmas fortune wheel',
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
