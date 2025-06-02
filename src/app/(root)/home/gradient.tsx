// 'use client';
// import React, { useEffect } from 'react';

// const GradientHeading = () => {
//   useEffect(() => {
//     // Register animation
//     if (typeof window !== 'undefined') {
//       const style = document.createElement('style');
//       style.textContent = `
//         @keyframes letterWave {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-0.3em); }
//         }
//         .animate-letter { animation: letterWave 3s ease-in-out infinite }
//       `;
//       document.head.appendChild(style);
//     }
//   }, []);

//   const animatedLetters = (word: string, gradient: string) => 
//     [...word].map((char, i) => (
//       <span 
//         key={i}
//         className={`relative inline-block bg-gradient-to-r ${gradient} bg-clip-text text-transparent animate-letter`}
//         style={{ animationDelay: `${i * 0.1}s` }}
//       >
//         {char === ' ' ? '\u00A0' : char}
//       </span>
//     ));

//   return (
//     <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
//       <span className="block">
//         {animatedLetters("Versatile", "from-blue-400 via-teal-500 to-emerald-400")}
//       </span>
//       <span className="block">
//         {animatedLetters("Experience", "from-teal-500 via-purple-500 to-pink-500")}
//       </span>
//       <span className="block">
//         Software Engineer &{' '}
//         {animatedLetters("Marketing", "from-yellow-400 via-red-500 to-pink-500")}
//       </span>
//       <span className="block">
//         {animatedLetters("Expert", "from-purple-400 via-indigo-500 to-blue-500")}
//       </span>
//     </h1>
//   );
// };

// export default GradientHeading;

import React from "react";

const GradientHeading: React.FC = () => {
  const animatedLetters = (word: string, gradientClass: string) =>
    [...word].map((char, i) => (
      <span
        key={i}
        className={`bg-gradient-to-r ${gradientClass} bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x`}
      >
        {char}
      </span>
    ));

  return (
    <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
      Versatile,  <span className="inline-flex ">
        {animatedLetters("Experience", "from-teal-500 via-teal-600 to-yellow-500")}
      </span> Software Engineer &  <br /> <span className="inline-flex">
        {animatedLetters("Marketing", "from-teal-400 via-black-500 to-teal-600")}
      </span> Expert
    </h1>
  );
};

export default GradientHeading;
