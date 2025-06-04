'use client';

import Link from 'next/link';
// import SvgIcons from '@/components/svgIcons'; // adjust path as needed
import SvgIcons from '../components/navigations/svgIcons'; // update path as needed

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-40 text-center">
      <h1 className="text-3xl font-semibold mb-6">Get in Touch</h1>

      <div className="space-y-4 text-gray-500 dark:text-gray-300">
        <p>Yaa Asantewaa II Street</p>
        <p>Kumasi - Ashanti, Ghana</p>
        <p>
          Email:{' '}
          <a
            href="mailto:stephen.mawuli.dormekpor@gmail.com"
            className="text-primary hover:underline"
          >
            stephen.mawuli.dormekpor@gmail.com
          </a>
        </p>
        <p>Phone: +233 571 697172</p>
      </div>

      <div className="flex justify-center items-center space-x-5 mt-8">
        <Link
          href="https://facebook.com/mawulistephens"
          className="text-gray-400 hover:text-primary transition-colors"
        >
          <SvgIcons.Facebook />
        </Link>
        <Link
          href="https://x.com/mawulistephen"
          className="text-gray-400 hover:text-primary transition-colors"
        >
          <SvgIcons.Twitter />
        </Link>
        <Link
          href="https://github.com/MawuliStephen"
          className="text-gray-400 hover:text-primary transition-colors"
        >
          <SvgIcons.GitHub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mawuli-stephen"
          className="text-gray-400 hover:text-primary transition-colors"
        >
          <SvgIcons.LinkedIn />
        </Link>
      </div>
    </div>
  );
}



// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { InlineWidget } from 'react-calendly';

// const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number = 0) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//             delay: i * 0.15,
//             duration: 0.6,
//             ease: 'easeOut',
//         },
//     }),
// };

// function ContactPage() {
//     return (
//         <div className=" mx-auto px-6 py-16 mt-10">
//             {/* Heading */}
//             <motion.h1
//                 className="text-3xl md:text-5xl font-bold mb-6 text-center"
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//             >


//              Let&apos;s Connect

//             </motion.h1>

//             <div className=" flex flex-row gap-0.5">
//                 <div className="flex flex-col">

//                     {/* Subheading */}
//                     <motion.p
//                         className="text-gray-600 dark:text-gray-300 text-center mb-12"
//                         initial="hidden"
//                         animate="visible"
//                         variants={fadeUp}
//                         custom={1}
//                     >
//                         Whether you have a question, a collaboration idea, or just want to say hi — my inbox is open.
//                     </motion.p>

//                     {/* Contact Form */}
//                     <motion.form
//                         className="space-y-6"
//                         initial="hidden"
//                         animate="visible"
//                         variants={fadeUp}
//                         custom={2}
//                     >
//                         <div className="flex flex-col md:flex-row gap-6">
//                             <input
//                                 type="text"
//                                 placeholder="Your Name"
//                                 className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
//                                 required
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Your Email"
//                                 className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
//                                 required
//                             />
//                         </div>
//                         <textarea
//                             rows={5}
//                             placeholder="Your Message"
//                             className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
//                             required
//                         ></textarea>
//                         <button
//                             type="submit"
//                             className="bg-primary text-white px-6 py-3  hover:bg-primary-dark transition-colors"
//                         >
//                             Send Message
//                         </button>
//                     </motion.form>

//                 </div>

//             </div>


//         <div className="flex flex-col">
//             {/* Social Links */}
//             <motion.div
//                 className="mt-16 flex justify-center gap-6"
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//                 custom={3}
//             >
//                 <Link href="mailto:your.email@example.com" aria-label="Email">
//                     <Mail className="w-6 h-6 hover:text-primary transition-colors" />
//                 </Link>
//                 <Link href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
//                     <Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
//                 </Link>
//                 <Link href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
//                     <Github className="w-6 h-6 hover:text-primary transition-colors" />
//                 </Link>
//                 <Link href="https://twitter.com/yourusername" target="_blank" aria-label="Twitter">
//                     <Twitter className="w-6 h-6 hover:text-primary transition-colors" />
//                 </Link>
//             </motion.div>

//             </div>

            
//             {/* Appointment Scheduling */}
//             <motion.div
//                 className="mt-24"
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//                 custom={4}
//             >
//                 <h2 className="text-2xl font-semibold text-center mb-6">
//                     Book an Appointment
//                 </h2>
//                 <div className="max-w-3xl mx-auto">
//                     <InlineWidget
//                         url="https://calendly.com/yourusername/30min"
//                         styles={{ height: '600px' }}
//                     />
//                 </div>
//             </motion.div>
//         </div>
//     );
// }

// export default ContactPage;

