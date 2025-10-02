'use client';

import svgIcons from "../../components/navigations/svgIcons";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const HeroDesktop = () => {
  return (
    <motion.section
      className="max-w-screen-xl mx-auto px-8 py-20 flex flex-col items-center gap-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-teal-200 max-w-2xl mx-auto">
          Ideate, Design, Build, Ship and Market...
        </h1>
        <p className="text-muted text-2xl mb-8 max-w-md mx-auto">
           Hi there, Mawuli Stephen here, a Full-Stack Engineer with 5+ years of experience building fast, scalable, and user-friendly web and mobile applications using React, Node.js, Angular, Flutter and Go-lang.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
          <Link href="/portfolio">
            <Button className="px-6 py-3">
              Talk to me
            </Button>
          </Link>

          <Link href="/contact">
            <Button variant="outline" className="px-6 py-3 flex items-center gap-2">
              Let’s Collaborate
            </Button>
          </Link>
        </div>

        {/* Social icons below buttons */}
        <div className="mt-8 flex space-x-6 justify-center">
          <Link href="https://facebook.com/mawulistephens" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            {svgIcons.Facebook()}
          </Link>
          <Link href="https://x.com/mawulistephen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            {svgIcons.Twitter()}
          </Link>
          <Link href="https://github.com/MawuliStephen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            {svgIcons.GitHub()}
          </Link>
          <Link href="https://www.linkedin.com/in/mawuli-stephen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            {svgIcons.LinkedIn()}
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroDesktop;


// 'use client';
// import svgIcons from "../../components/navigations/svgIcons";
// import React from 'react';
// // import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { Button } from "@/components/ui/button";

// const HeroDesktop = () => {
//   return (
//     <motion.section
//       className="max-w-screen-xl mx-auto px-8 py-20 flex flex-col items-center gap-16"
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//     >
//       {/* Left text content */}
//       <div className=" text-center text-teal-100">
//         <h1 className="text-7xl font-bold mb-6 leading-tight max-w-lg">
//           Ideate, Design, Build, Ship and Market...
//         </h1>
//         <p className="text-foreground mb-8 max-w-md">
//           I craft digital solutions that blend technical excellence with strategic marketing insights.
//         </p>
//         <div className='flex md:flex-row md:justify-center gap-6 '>
//           <Link href="/portfolio">
//             <Button className="btn px-6 py-3 ">
//              Talk to me
//             </Button>
//           </Link>

//           <Link href="/contact">
//             <Button className="btn px-6 py-3  ">
//               {/* Let&apos;s Collaborate */}
//               {/* display the svgicons here  */}

//             </Button>
//           </Link>

//         </div>

//       </div>

//       {/* Right image */}
//       {/* <div className="flex-1 max-w-sm relative rounded-full border-4 border-white shadow-lg overflow-hidden">
//             Let&apos;s Collaborate
//           </Button>
//         </Link>

//         </div>
      
//       </div>

//       {/* Right image */}
//       {/* <div className="flex-1 max-w-sm relative rounded-full border-4 border-white shadow-lg overflow-hidden">
//         <Image
//           src="/mawuli.jpg"
//           alt="Mawuli"
//           width={320}
//           height={320}
//           className="object-cover rounded-full"
//           priority
//         />
//       </div> */}
//     </motion.section>
//   );
// };

// export default HeroDesktop;
