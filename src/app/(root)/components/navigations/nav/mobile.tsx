'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { MenuItem } from './types'

interface Props {
  isMobileMenuOpen: boolean
  activeMenu: MenuItem
  openDropdown: MenuItem | null
  handleMenuClick: (menu: MenuItem) => void
  setIsMobileMenuOpen: (open: boolean) => void
  handleDropdownClick: (menu: MenuItem) => void
}

// ✅ Define all nav items in one array
const navItems: { label: string; href: string; menu: MenuItem; prod?: boolean }[] = [
  { label: 'Home', href: '/', menu: 'HOME', prod: true },
  { label: 'About', href: '/about', menu: 'ABOUT' },
  { label: 'Contact', href: '/contact', menu: 'CONTACT' },
]

const MobileNav = ({
  isMobileMenuOpen,
  activeMenu,
  handleMenuClick,
  setIsMobileMenuOpen,
}: Props) => {
  // ✅ Filter nav items based on environment
  const filteredNavItems =
    process.env.NODE_ENV === 'production'
      ? navItems.filter((item) => item.prod)
      : navItems

  return (
    <div
      className={`fixed z-30 top-0 right-0 h-full w-64 bg-teal-900 shadow-lg transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <nav className="h-full">
        <div className="flex justify-end me-2 p-2">
          <X className="cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
        </div>

        {/* Nav items */}
        <ul className="ms-8 mb-4 space-y-2">
          {filteredNavItems.map(({ label, href, menu }) => (
            <li key={menu}>
              <Link href={href} passHref>
                <span
                  className={`nav-text cursor-pointer block p-4 ${
                    activeMenu === menu ? 'nav-text' : ''
                  }`}
                  onClick={() => {
                    handleMenuClick(menu)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MobileNav


// // components/MobileNav.tsx
// "use client";
// import Link from "next/link";
// // import Image from "next/image";
// import { X } from "lucide-react";
// import { MenuItem } from "./types";

// interface Props {
//   isMobileMenuOpen: boolean;
//   activeMenu: MenuItem;
//   openDropdown: MenuItem | null;
//   handleMenuClick: (menu: MenuItem) => void;
//   setIsMobileMenuOpen: (open: boolean) => void;
//   handleDropdownClick: (menu: MenuItem) => void;
// }

// const MobileNav = ({
//   isMobileMenuOpen,
//   activeMenu,
//   // openDropdown,
//   handleMenuClick,
//   setIsMobileMenuOpen,
//   // handleDropdownClick,
// }: Props) => {
//   return (
//     <div
//       className={`fixed z-30 top-0 right-0 h-full w-64 bg-teal-900 shadow-lg transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//     >
//       <nav className="h-full bg-">
//         <div className="flex justify-end me-2 p-2">
//           <X
//             className="cursor-pointer"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />
//         </div>

//         {/* Home */}
//         <div className="ms-8 mb-4">
//           <Link href="/" passHref>
//             <span
//               className={`nav-text cursor-pointer ${activeMenu === "HOME" ? "nav-text" : ""
//                 }`}
//               onClick={() => {
//                 handleMenuClick("HOME");
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               Home
//             </span>
//           </Link>
//         </div>

//         {/* Main nav items with dropdowns */}
//         <ul >

//           {/* ABOUT */}

//             <Link href="/about" passHref>
//             <li
//               className={`nav-text p-4 cursor-pointer ${activeMenu === "ABOUT" ? "nav-text" : ""
//                 }`}
//               onClick={() => {
//                 handleMenuClick("ABOUT");
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               About
//             </li>
//           </Link>




//           {/* CONTACT */}
//           <Link href="/contact" passHref>
//             <li
//               className={`nav-text p-4 cursor-pointer ${activeMenu === "CONTACT" ? "nav-text" : ""
//                 }`}
//               onClick={() => {
//                 handleMenuClick("CONTACT");
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               Contact
//             </li>
//           </Link>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default MobileNav;


// // // components/MobileNav.tsx
// // "use client";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { X } from "lucide-react";
// // import { MenuItem } from "./types";

// // interface Props {
// //   isMobileMenuOpen: boolean;
// //   activeMenu: MenuItem;
// //   openDropdown: MenuItem | null;
// //   handleMenuClick: (menu: MenuItem) => void;
// //   setIsMobileMenuOpen: (open: boolean) => void;
// //   handleDropdownClick: (menu: MenuItem) => void;
// // }

// // const MobileNav = ({
// //   isMobileMenuOpen,
// //   activeMenu,
// //   openDropdown,
// //   handleMenuClick,
// //   setIsMobileMenuOpen,
// //   handleDropdownClick,
// // }: Props) => {
// //   return (
// //     <div className={`fixed z-30 top-0 right-0 h-full w-64 shadow-lg transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
// //       <nav className="h-full">
// //         <div className="flex justify-end me-2 p-2">
// //           <X className="cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
// //         </div>

// //         <div className="ms-8 mb-4">
// //           <Link href="/" passHref>
// //             <span
// //               className={`nav-text ${activeMenu === "Home" ? "nav-text" : "text-[#666666]"}`}
// //               onClick={() => handleMenuClick("Home")}
// //             >
// //               Home
// //             </span>
// //           </Link>
// //         </div>
// //         {/* You can paste the rest of your mobile nav structure here exactly as-is */}
// //         {/* For brevity, we skip it here but it stays unchanged in your original code */}

// //         <ul className="text-[#666666] flex flex-col mx-4 ">
// //           {/* ABOUT US */}
// //           <li
// //             className={`flex items-center justify-between nav-text p-4 cursor-pointer ${activeMenu === "About" ? "nav-text" : ""
// //               }`}
// //             onClick={() => handleDropdownClick("About")}
// //           >
// //             About
// //             <Image
// //               src="/Expand Arrow.png"
// //               height={33}
// //               width={20}
// //               alt="chevron down"
// //               className={`w-2 transition-transform duration-300 ${openDropdown === "About" ? "rotate-180" : ""
// //                 }`}
// //             />
// //           </li>
// //           <div
// //             className={`transition-all duration-300 ease-in-out overflow-hidden ${openDropdown === "About"
// //               ? "max-h-96 opacity-100"
// //               : "max-h-0 opacity-0"
// //               }`}
// //           >
// //             <ul className="pl-4">
// //               <Link href="/about/our-mission">
// //                 <li
// //                   className="nav-text p-2"
// //                   onClick={() => {
// //                     handleMenuClick("About");
// //                     setIsMobileMenuOpen(false);
// //                   }}
// //                 >
// //                   Our Mission
// //                 </li>
// //               </Link>
// //               <Link href="/about/our-team">
// //                 <li
// //                   className="nav-text p-2"
// //                   onClick={() => {
// //                     handleMenuClick("About");
// //                     setIsMobileMenuOpen(false);
// //                   }}
// //                 >
// //                   Our Team
// //                 </li>
// //               </Link>
// //               <Link href="/about/our-history">
// //                 <li
// //                   className="nav-text p-2"
// //                   onClick={() => {
// //                     handleMenuClick("About");
// //                     setIsMobileMenuOpen(false);
// //                   }}
// //                 >
// //                   Our History
// //                 </li>
// //               </Link>
// //             </ul>
// //           </div>

// //           {/* Blog */}
// //           <li
// //             className={`flex items-center justify-between p-4 cursor-pointer ${activeMenu === "Blog" ? "nav-text" : ""
// //               }`}
// //             onClick={() => handleDropdownClick("Blog")}
// //           >
// //             Blog
// //             <Image
// //               src="/Expand Arrow.png"
// //               height={33}
// //               width={20}
// //               alt="chevron down"
// //               className={`w-2 transition-transform duration-300 ${openDropdown === "Blog" ? "rotate-180" : ""
// //                 }`}
// //             />
// //           </li>
// //           <div
// //             className={`transition-all duration-300 ease-in-out overflow-hidden ${openDropdown === "Blog"
// //               ? "max-h-96 opacity-100"
// //               : "max-h-0 opacity-0"
// //               }`}
// //           >
// //             <ul className="pl-4">
// //               <Link href="/Blog/upcoming-Blog">
// //                 <li
// //                   className="nav-text p-2"
// //                   onClick={() => {
// //                     handleMenuClick("Blog");
// //                     setIsMobileMenuOpen(false);
// //                   }}
// //                 >
// //                   Upcoming Blog
// //                 </li>
// //               </Link>
// //               <Link href="/events/past-events">
// //                 <li
// //                   className="nav-text p-2"
// //                   onClick={() => {
// //                     handleMenuClick("Blog");
// //                     setIsMobileMenuOpen(false);
// //                   }}
// //                 >
// //                   Past Events
// //                 </li>
// //               </Link>
// //             </ul>
// //           </div>

// //           {/* RESOURCES */}
// //           <li
// //             className={`flex items-center justify-between nav-text p-4 cursor-pointer ${activeMenu === "RESOURCES" ? "nav-text" : ""
// //               }`}
// //             onClick={() => handleDropdownClick("RESOURCES")}
// //           >
// //             RESOURCES
// //             <Image
// //               src="/Expand Arrow.png"
// //               height={33}
// //               width={20}
// //               alt="chevron down"
// //               className={`w-2 transition-transform duration-300 ${openDropdown === "RESOURCES" ? "rotate-180" : ""
// //                 }`}
// //             />
// //           </li>
// //           <div
// //             className={`transition-all duration-300 ease-in-out overflow-hidden ${openDropdown === "RESOURCES"
// //               ? "max-h-96 opacity-100"
// //               : "max-h-0 opacity-0"
// //               }`}
// //           >
// //             <ul className="pl-4">
// //               <Link href="/resources/guides">
// //                 <li
// //                   className="nav-text p-2"
// //                   onClick={() => {
// //                     handleMenuClick("RESOURCES");
// //                     setIsMobileMenuOpen(false);
// //                   }}
// //                 >
// //                   Guides
// //                 </li>
// //               </Link>
// //               <Link href="/resources/templates">
// //                 <li
// //                   className="nav-text p-2"
// //                   onClick={() => {
// //                     handleMenuClick("RESOURCES");
// //                     setIsMobileMenuOpen(false);
// //                   }}
// //                 >
// //                   Templates
// //                 </li>
// //               </Link>
// //             </ul>
// //           </div>


// //           {/* CONTACT */}
// //           <Link href="/contact" passHref>
// //             <li
// //               className={`nav-text p-4 ${activeMenu === "CONTACT" ? "nav-text" : ""
// //                 }`}
// //               onClick={() => handleMenuClick("CONTACT")}
// //             >
// //               CONTACT
// //             </li>
// //           </Link>
// //         </ul>
// //       </nav>

// //     </div>
// //   );
// // }

// // export default MobileNav;
