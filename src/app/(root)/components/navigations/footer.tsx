'use client';

import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Projects', href: '/projects' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      // {

      // },
      {
        name: 'GitHub',
        href: 'https://github.com/yourusername',
        icon: FaGithub,
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/yourusername',
        icon: FaTwitter,
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/yourusername',
        icon: FaLinkedin,
      },
      {
        name: 'Email',
        href: 'mailto:your.email@example.com',
        icon: FaEnvelope,
      },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
          {/* Branding */}
          <div className="space-y-6">
            {/* <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Your Name
                </span>
              </div>
            </Link> */}
            {/* <p className="text-sm text-muted-foreground leading-relaxed">
              Crafting exceptional digital experiences with modern web technologies and innovative solutions.
            </p> */}
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                  >
                    <span className="h-px w-4 bg-muted-foreground/30 mr-2 group-hover:w-6 group-hover:bg-primary transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Get in Touch
            </h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-primary mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="ml-3 text-sm text-muted-foreground">
                  your.email@example.com
                </span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-primary mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="ml-3 text-sm text-muted-foreground">
                  Accra, Ghana
                </span>
              </div>
            </address>
          </div>

          {/* Newsletter */}
          {/* <div className="space-y-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get updates on my latest projects and articles.
            </p>
            <form className="space-y-3">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-2 border border-border bg-background rounded-md text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="text-xs text-center text-muted-foreground">
            &copy; {currentYear} Mawuli Stephen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import Link from 'next/link';
// import Image from 'next/image';
// import SvgIcons from './svgIcons';


// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative bg-teal-950 text-muted py-16 overflow-hidden">
//       {/* Faint dot background */}
//       <div className="absolute inset-0 bg-[url('/dot.svg')] bg-repeat bg-left-top bg-[length:40px_40px] opacity-10 z-0 pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10  grid grid-cols-1 md:grid-cols-3 gap-12">
//         {/* Logo & About */}
//         <div className="space-y-4">
//           <Link href="/">
//             <Image
//               src="/logo.png"
//               alt="Company Logo"
//               width={120}
//               height={60}
//               className="mb-2"
//             />
//           </Link>
//           <p className="text-sm text-muted">
//             Making the world a better place through technology and innovation.
//           </p>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-xl font-semibold text-muted underline mb-4">Contact</h3>
//           <address className="not-italic text-sm space-y-2 text-muted">
//             <p>Yaa Asantewaa II Street</p>
//             <p>Kumasi - Ashanti</p>
//             <p>
//               Email:{" "}
//               <a
//                 href="mailto:stephen.mawuli.dormekpor@gmail.com"
//                 className="hover:text-muted underline transition"
//               >
//                 stephen.mawuli.dormekpor@gmail.com
//               </a>
//             </p>
//             <p>Phone: +233 (571) 697172</p>
//           </address>
//         </div>

//         {/* Social Links */}
//         <div className="space-y-4">
//           <h3 className="text-lg font-semibold text-muted underline mb-4">Follow Me</h3>
//           <div className="flex space-x-4">
//             <Link
//               href="https://facebook.com/mawulistephens"
//               className="text-muted hover:text-white transition"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <SvgIcons.Facebook />
//             </Link>
//             <Link
//               href="https://x.com/mawulistephen"
//               className="text-muted hover:text-white transition"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <SvgIcons.Twitter />
//             </Link>
//             <Link
//               href="https://github.com/MawuliStephen"
//               className="text-muted hover:text-white transition"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <SvgIcons.GitHub />
//             </Link>
//             <Link
//               href="https://linkedin.com/in/mawuli-stephen"
//               className="text-muted hover:text-white transition"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <SvgIcons.LinkedIn />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Footer bottom */}
//       <div className="relative z-10 mt-12 border-t border-muted pt-6 text-center text-sm text-muted">
//         &copy; {currentYear} Mawuli Stephen. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
