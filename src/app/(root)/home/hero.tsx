'use client';

import React from 'react';
import Hero from './hero/desktop';

const HeroSection = () => {
  return (
  <section className="relative bg-teal-900 overflow-hidden">
  {/* Faint dot pattern */}
  <div className="absolute inset-0 bg-[url('/dot.svg')] bg-repeat bg-left-top bg-[length:40px_40px] opacity-80 z-0 pointer-events-none" />
 
  {/* Content on top */}
  <div className="relative z-10 py-10 md:pt-36 lg:pt-44">
    <Hero />
  </div>
</section>

  );
};

export default HeroSection;

// 'use client';

// import React from 'react';
// import Hero from './hero/desktop';

// const HeroSection = () => {
//   return (
//     <section
//       className="bg-teal-900 bg-[url('/dot.svg')] bg-repeat bg-left-top py-10 w-full mx-auto"
//     >
//       <div className="lg:block md:pt-36 lg:pt-44">
//         <Hero />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



// 'use client';

// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import GradientHeading from './gradient';

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: 'easeOut' },
//   },
// };

// const HeroSection = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });

//   return (
//     <section ref={ref} className="relative overflow-hidden">
//       {/* 🔄 Optional Background Video */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover brightness-[0.5]"
//         >
//           <source src="/background-video.mp4" type="video/mp4" />
//           {/* Fallback Blur Element */}
//           <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-float" />
//           <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl opacity-30 animate-float-delay" />
//         </video>
//       </div>

//       <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36 lg:py-44">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <motion.div
//             className="space-y-8 text-center lg:text-left"
//             variants={fadeUp}
//             initial="hidden"
//             animate={inView ? 'visible' : 'hidden'}
//           >
//             <GradientHeading />

//             <motion.p
//               className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
//               variants={fadeUp}
//               transition={{ delay: 0.1 }}
//             >
//               I craft digital solutions that blend technical excellence with strategic marketing insights.
//             </motion.p>

//             <motion.div
//               className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
//               variants={fadeUp}
//               transition={{ delay: 0.2 }}
//             >
//               <Link href="/contact">
//                 <button className="btn px-4 py-2 rounded-lg">
//                   Let&apos;s Collaborate
//                 </button>
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Hero Media */}
//           <motion.div
//             className="relative group"
//             variants={fadeUp}
//             initial="hidden"
//             animate={inView ? 'visible' : 'hidden'}
//             transition={{ delay: 0.3 }}
//           >
//             <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-muted/10 to-transparent backdrop-blur-sm border border-white/10 group-hover:opacity-80 transition-opacity duration-500 -z-10" />

//             <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800/50">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />

//               <Image
//                 src="/mawuli.jpg"
//                 alt="Mawuli - Software Engineer & Marketing Expert"
//                 fill
//                 className="object-cover scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100 z-0"
//                 priority
//                 quality={90}
//               />

//               <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
//                 <p className="text-xs font-mono text-white/90">Currently working on exciting new projects</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
