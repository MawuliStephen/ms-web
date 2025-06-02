'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  if (theme === null) {
    return <div className="w-10 h-10" /> // Loading placeholder
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-primary text-primary-contrast"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

// // import { useEffect } from 'react';

// // const ThemeToggle = () => {
// //   const toggleTheme = () => {
// //     const currentTheme = document.documentElement.getAttribute('data-theme');
// //     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
// //     document.documentElement.setAttribute('data-theme', newTheme);
// //     localStorage.setItem('theme', newTheme);
// //   };

// //   useEffect(() => {
// //     const savedTheme = localStorage.getItem('theme') || 
// //                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
// //     document.documentElement.setAttribute('data-theme', savedTheme);
// //   }, []);

// //   return (
// //     <button onClick={toggleTheme} className="btn">
// //       Toggle Theme
// //     </button>
// //   );
// // };

// // export default ThemeToggle;
// import { useEffect, useState } from 'react';

// export default function ThemeToggle() {
//   const [darkMode, setDarkMode] = useState<boolean>(false);

//   useEffect(() => {
//     // Check for saved preference or OS preference
//     const isDark = 
//       localStorage.getItem('theme') === 'dark' || 
//       (!localStorage.getItem('theme') && 
//       window.matchMedia('(prefers-color-scheme: dark)').matches);
    
//     setDarkMode(isDark);
//     document.documentElement.classList.toggle('dark', isDark);
//   }, []);

//   const toggleTheme = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem('theme', newMode ? 'dark' : 'light');
//     document.documentElement.classList.toggle('dark', newMode);
//   };

//   return (
//     <button 
//       onClick={toggleTheme}
//       className="p-2 rounded-full bg-primary dark:bg-dark-primary text-primaryContrast dark:text-dark-primaryContrast"
//       aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//     >
//       {darkMode ? '☀️' : '🌙'}
//     </button>
//   );
// }