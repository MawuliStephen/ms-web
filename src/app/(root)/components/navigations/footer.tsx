import Link from 'next/link';
import Image from 'next/image';
import SvgIcons from './svgIcons';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-teal-950 text-muted py-16 overflow-hidden">
      {/* Faint dot background */}
      <div className="absolute inset-0 bg-[url('/dot.svg')] bg-repeat bg-left-top bg-[length:40px_40px] opacity-10 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & About */}
        <div className="space-y-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={120}
              height={60}
              className="mb-2"
            />
          </Link>
          <p className="text-sm text-muted">
            Making the world a better place through technology and innovation.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-muted underline mb-4">Contact</h3>
          <address className="not-italic text-sm space-y-2 text-muted">
            <p>Yaa Asantewaa II Street</p>
            <p>Kumasi - Ashanti</p>
            <p>
              Email:{" "}
              <a
                href="mailto:stephen.mawuli.dormekpor@gmail.com"
                className="hover:text-muted underline transition"
              >
                stephen.mawuli.dormekpor@gmail.com
              </a>
            </p>
            <p>Phone: +233 (571) 697172</p>
          </address>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-muted underline mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com/mawulistephens"
              className="text-muted hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcons.Facebook />
            </Link>
            <Link
              href="https://x.com/mawulistephen"
              className="text-muted hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcons.Twitter />
            </Link>
            <Link
              href="https://github.com/MawuliStephen"
              className="text-muted hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcons.GitHub />
            </Link>
            <Link
              href="https://linkedin.com/in/mawuli-stephen"
              className="text-muted hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcons.LinkedIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="relative z-10 mt-12 border-t border-muted pt-6 text-center text-sm text-muted">
        &copy; {currentYear} Mawuli Stephen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (

  
//   <footer className="relative bg-teal-950 overflow-hidden pt-10">
//   {/* Faint dot pattern */}
//     <div className="absolute inset-0 bg-[url('/dot.svg')] bg-repeat bg-left-top bg-[length:40px_40px] opacity-60 z-0 pointer-events-none" />
 
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="grid">
//           {/* Logo and description */}
//           <div className="space-y-4">
//             <Link href="/">
//               <Image
//                 src="/logo.png"
//                 alt="Company Logo"
//                 width={120}
//                 height={60}
//                 className="mb-4"
//               />
//             </Link>
//             <p className="text-gray-400">
//               Making the world a better place through technology and innovation.
//             </p>

           
//             <div className="flex space-x-4">
//               <Link href="https://facebook/mawulistephens" className="text-gray-400 hover:text-white transition-colors">
//                 <SvgIcons.Facebook />
//               </Link>
//               < Link href="https://x.com/mawulistephen" className="text-gray-400 hover:text-white transition-colors">
//                 <SvgIcons.Twitter />
//               </Link>
//               <Link href="https://github.com/MawuliStephen" className="text-gray-400 hover:text-white transition-colors">
//                 <SvgIcons.GitHub />
//               </Link>
//               <Link href="https://www.linkedin.com/in/mawuli-stephen" className="text-gray-400 hover:text-white transition-colors">
//                 <SvgIcons.LinkedIn />
//               </Link>
//             </div>
            
//           </div>


//         </div>



//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Contact </h3>
//           <address className="not-italic text-gray-400 space-y-2">
//             <p>Yaa Asantewaa II Street</p>
//             <p>Kumasi - Ashanti</p>
//             <p>Email: <a href="mailto:stephen.mawuli.dormekpor@gmail.com">stephen.mawuli.dormekpor@gmail.com</a></p>

//             <p>Phone: +233(571) 697172</p>
//           </address>
//         </div>

  
//       </div>

//       {/* Copyright */}
//       <div className="border-t border-gray-800 mt-12 py-3 text-center text-gray-400">
//         <p>&copy; {currentYear} Mawuli Stephen. All rights reserved.</p>
      
//       </div>
//       {/* </div> */}
//     </footer>
//   );
// };

// export default Footer;