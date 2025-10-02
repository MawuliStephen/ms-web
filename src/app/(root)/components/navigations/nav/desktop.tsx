'use client';

import Link from "next/link";
import { MenuItem } from "./types";

interface Props {
  activeMenu: MenuItem;
  handleMenuClick: (menu: MenuItem) => void;
}

const navItems: { label: string; href: string; menu: MenuItem }[] = [
  { label: "Home", href: "/", menu: "HOME" },
  { label: "About", href: "/about", menu: "ABOUT" },
  { label: "Blog", href: "/blog", menu: "BLOG" },
];

const DesktopNav = ({ activeMenu, handleMenuClick }: Props) => {
  return (
    <nav className="hidden sm:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
      {navItems.map(({ label, href, menu }) => (
        <Link href={href} key={menu}>
          <span
            onClick={() => handleMenuClick(menu)}
            className={`cursor-pointer transition-colors duration-200 font-medium
              ${
                activeMenu === menu ?
                 "nav-link-active" : "nav-link"
                  // ? "text-primary dark:text-primary font-semibold"
                  // : "text-muted-foreground hover:text-primary dark:hover:text-primary"
              }
            `}
          >
            {label}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;


// // components/DesktopNav.tsx
// import Link from "next/link";
// import { MenuItem } from "./types";

// interface Props {
//     activeMenu: MenuItem;
//     // setHoveredMenu: (menu: MenuItem | null) => void;
//     handleMenuClick: (menu: MenuItem) => void;
// }

// const DesktopNav = ({
//     activeMenu,
//     // setHoveredMenu,
//     handleMenuClick,
// }: Props) => {
//     return (
//         <nav className="  hidden sm:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
//             <Link href="/">
//                 <span
//                     // className="cursor-pointer nav-text"
//                      className={`cursor-pointer nav-text  ${activeMenu === "HOME" ? "nav-text" : "white"}`}
//                     onClick={() => handleMenuClick("HOME")}
//                 >
//                     Home
//                 </span>
//             </Link>

//             <Link href="/about">
//                 <span
//                     // className="cursor-pointer nav-text"
//                      className={`cursor-pointer nav-text  ${activeMenu === "ABOUT" ? "nav-text" : "white"}`}

//                     onClick={() => handleMenuClick("ABOUT")}
//                 >
//                     About
//                 </span>
//             </Link>

//             {/* Blog Dropdown */}
//                         <Link href="/blog">
//                 <span
//                     // className="cursor-pointer nav-text"
//                      className={`cursor-pointer nav-text ${activeMenu === "ABOUT" ? "nav-text" : "white"}`}

//                     onClick={() => handleMenuClick("BLOG")}
//                 >
//                     Blog
//                 </span>
//             </Link>

//             {/* <div       className="relative group"     onMouseEnter={() => setHoveredMenu("BLOG")}                onMouseLeave={() => setHoveredMenu(null)}       >
//                 <div className="flex items-center space-x-1 cursor-pointer nav-text">
//                     <span>Blog</span>
//                     <svg
//                         className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     >
//                         <path d="M6 9l6 6 6-6" />
//                     </svg>
//                 </div>

//                 Dropdown menu
//                 <ul
//                     role="menu"
//                     className="absolute left-0 top-full mt-7 w-40 bg-white border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
//                 >
//                     <li role="menuitem">
//                         <Link href="/blog/programs" className="block nav-text p-2">
//                             Programs
//                         </Link>
//                     </li>
//                     <li role="menuitem">
//                         <Link href="/blog/mentorship" className="block nav-text p-2">
//                             Mentorship
//                         </Link>
//                     </li>
//                 </ul>
//             </div> */}
//         </nav>
//     );
// };

// export default DesktopNav;
