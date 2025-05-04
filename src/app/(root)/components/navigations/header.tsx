
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AlignJustify, X, ChevronDown } from "lucide-react"; // Import X and ChevronDown for icons
import ThemeToggle from "./theme"
import Image from "next/image";

// Define a type for the menu items
type MenuItem =
  | "Home"
  | "About"
  | "Blog"
  | "RESOURCES"
  | "CONTACT";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<MenuItem>("Home");
  const [openDropdown, setOpenDropdown] = useState<MenuItem | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<MenuItem | null>(null); // State for hovered menu

  const handleMenuClick = (menu: MenuItem) => {
    setActiveMenu(menu);
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleDropdownClick = (menu: MenuItem) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest("li")) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed z-30 w-screen bg-background dark:bg-dark-800 text-foreground dark:text-dark-200 transition-colors duration-300">
  <div className="nav-top mx-auto h-16 md:h-20 flex items-center justify-between border-b border-primary/10 dark:border-dark-700">
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex w-full items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <Image
            className="w-16 md:w-24 lg:w-28 cursor-pointer transition-opacity hover:opacity-80"
            alt="MAWULI STEPHEN LOGO"
            src="/logo.png"
            width={80}
            height={20}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
     

             <div className="hidden sm:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
       <Link href="/">
       <span
          className={`cursor-pointer nav-text ${activeMenu === "Home" ? "nav-text" : "nav-text"
            }`}
           onClick={() => handleMenuClick("Home")}
       >
          Home
       </span>
              </Link>
              </div>

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredMenu("About")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className="flex items-center space-x-1 py-4 cursor-pointer nav-text  transition-colors">
              <span>About Me</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  hoveredMenu === "About" ? "rotate-180" : ""
                }`}
              />
            </div>

            <ul className="absolute left-0 top-full mt-2 w-48 bg dark:bg-dark-700 border border-t-primary/10 dark:border-dark-600 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              <li className="px-4 py-2 transition-colors">
                Projects
              </li>
            </ul>
          </div>

          {/* Blog Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredMenu("Blog")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className="flex items-center space-x-1 cursor-pointer nav-text hover:text-primary dark:hover:text-dark-primary transition-colors">
              <span>Blog</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  hoveredMenu === "Blog" ? "rotate-180" : ""
                }`}
              />
            </div>

            <ul className="absolute left-0 top-full mt-2 w-48 bg dark:bg-dark-700 border border-primary/10 dark:border-dark-600 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              <li className="px-4 py-2 hover:bg-primary/10 dark:hover:bg-dark-600 transition-colors">
                Programs
              </li>
              <li className="px-4 py-2 hover:bg-primary/10 dark:hover:bg-dark-600 transition-colors">
                Mentorship
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="flex flex-row gap-2 justify-between">
        <Link href="/contact">
            <button className="hidden sm:flex btn  transition-colors">        Contact Us        </button>
          </Link>

            {/* Mobile Menu Toggle */}
            <button  className="sm:hidden btn  transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <AlignJustify className="w-6 h-6" />
            </button>

           <ThemeToggle /> {/* Theme Toggle Button */}
        </div>

      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div 
    className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
      isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
    onClick={() => setIsMobileMenuOpen(false)}
  >
    <div 
      className={`fixed right-0 top-0 h-full w-64 bg dark:bg-dark-800 shadow-lg transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center p-4 border-b border-primary/10 dark:border-dark-700">
        <Image
          className="w-16 cursor-pointer"
          alt="MAWULI STEPHEN LOGO"
          src="/logo.png"
          width={80}
          height={20}
        />
        <button 
          className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-dark-700 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="p-4 overflow-y-auto h-[calc(100%-72px)]">
        <ul className="space-y-2">
          <li>
            <Link href="/" passHref>
              <span
                className={`block px-4 py-3 rounded-md transition-colors ${
                  activeMenu === "Home" 
                    ? "bg-primary/10 dark:bg-dark-700 text-primary dark:text-dark-primary" 
                    : "hover:bg-primary/10 dark:hover:bg-dark-700"
                }`}
                onClick={() => {
                  handleMenuClick("Home");
                  setIsMobileMenuOpen(false);
                }}
              >
                Home
              </span>
            </Link>
          </li>

          {/* Mobile Dropdowns */}
          {['About', 'Blog', 'Resources'].map((item) => (
            <li key={item}>
              <button
                className={`flex items-center justify-between w-full px-4 py-3 rounded-md transition-colors ${
                  openDropdown === item 
                    ? "bg-primary/10 dark:bg-dark-700 text-primary dark:text-dark-primary" 
                    : "hover:bg-primary/10 dark:hover:bg-dark-700"
                }`}
                onClick={() => handleDropdownClick(item)}
              >
                <span>{item}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openDropdown === item ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`pl-4 overflow-hidden transition-all duration-300 ${
                  openDropdown === item ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <ul className="space-y-1 border-l border-primary/10 dark:border-dark-700">
                  {[...Array(2)].map((_, i) => (
                    <li key={i}>
                      <Link href={`/${item.toLowerCase()}/item-${i+1}`}>
                        <span
                          className="block px-4 py-2 rounded-md hover:bg-primary/10 dark:hover:bg-dark-700 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item} Item {i+1}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}

          {/* <li>
            <Link href="/contact" passHref>
              <span
                className={`block px-4 py-3 rounded-md transition-colors ${
                  activeMenu === "Contact" 
                    ? "bg-primary/10 dark:bg-dark-700 text-primary dark:text-dark-primary" 
                    : "hover:bg-primary/10 dark:hover:bg-dark-700"
                }`}
                onClick={() => {
                  handleMenuClick("Contact");
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact
              </span>
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  </div>
</header>
  
  );
};

export default Header;


// {/* <header className="fixed z-30 w-screen  bg dark:bg-dark-background text-foreground dark:text-dark-foreground" >
// <div className="nav-top mx-auto h-10 md:h-20 flex me-6 items-center justify-between md:ms-0  sm:border-b-1 sm:border-red-400">
// {/* ms-2 sm:ms-4 sm:me-8 md:ms-12 md:me-16 xl:ms-20 xl:me-28 */}

//   <div className="w-full  px-4 sm:px-6 lg:px-8">

//   <div className="flex w-full items-center justify-between">

//     {/* Logo */}

//     <Link href="/">
//       <Image
//         className="w-16 md:w-24 lg:w-25 cursor-pointer"
//         alt="MAWULI STEPHEN LOGO"
//         src="/logo.png"
//         width={80}
//         height={20}
//         priority
//       />
//     </Link>

//     {/* Desktop Menu */}
//     <div className="hidden sm:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
//       <Link href="/">
//         <span
//           className={`cursor-pointer nav-text ${activeMenu === "Home" ? "nav-text" : "nav-text"
//             }`}
//           onClick={() => handleMenuClick("Home")}
//         >
//           Home
//         </span>
//       </Link>

//         {/*About with hover dropdown */}
//         <div
//         className="relative group"
//         onMouseEnter={() => setHoveredMenu("About")}
//         onMouseLeave={() => setHoveredMenu(null)}
//       >
//         <div className="flex items-center space-x-1 cursor-pointer nav-text">
//           <span>About Me</span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="33"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className={`w-5 h-5 transition-transform duration-300 ${hoveredMenu === "About" ? "rotate-180" : ""
//               }`}
//           >
//             <path d="M6 9l6 6 6-6" />
//           </svg>

      
//         </div>

//         <ul className="absolute left-0 top-full mt-7 w-40 bg border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
//           <li className="nav-text p-2">Projects</li>
//           {/* <li className="nav-text p-2">Mentorship</li> */}
//         </ul>

//       </div>

//       {/* Blog with hover dropdown */}
//       <div
//         className="relative group"
//         onMouseEnter={() => setHoveredMenu("Blog")}
//         onMouseLeave={() => setHoveredMenu(null)}
//       >
//         <div className="flex items-center space-x-1 cursor-pointer nav-text">
//           <span>Blog</span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="33"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className={`w-5 h-5 transition-transform duration-300 ${hoveredMenu === "Blog" ? "rotate-180" : ""
//               }`}
//           >
//             <path d="M6 9l6 6 6-6" />
//           </svg>

       
//         </div>

//         <ul className="absolute left-0 top-full mt-7 w-40 bg border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
//           <li className="nav-text p-2">Programs</li>
//           <li className="nav-text p-2">Mentorship</li>
//         </ul>

//       </div>


//     </div>

//     {/* Contact Button (Desktop Only) */}
//     <Link href="/contact">
//       <button className="hidden sm:flex btn">
//         Contact Us
//       </button>
//     </Link>

//     {/* Hamburger Icon (Mobile Only) */}
//     <div className="sm:hidden">
//       <AlignJustify
//         className="cursor-pointer"
//         onClick={() => setIsMobileMenuOpen(true)}
//       />
//     </div>

//     <ThemeToggle/> {/* Theme Toggle Button */} 
//   </div>
//   </div>

// </div>


// {/* Mobile Menu */}
// <div className={`fixed z-30  top-0 right-0 h-full w-64 shadow-lg transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
// >
//   <nav className="h-full">
//     {/* Close Button */}
//     <div className="flex justify-end me-2 p-2">
//       <X
//         className="cursor-pointer"
//         onClick={() => setIsMobileMenuOpen(false)}
//       />
//     </div>

//     {/* Home Link */}
//     <div className="ms-8 mb-4">
//       <Link href="/" passHref>
//         <span
//           className={`nav-text ${activeMenu === "Home" ? "text-[#F36E23]" : "text-[#666666]"
//             }`}
//           onClick={() => handleMenuClick("Home")}
//         >
//           Home
//         </span>
//       </Link>
//     </div>

//     <ul className="text-[#666666] flex flex-col mx-4 ">
//       {/* ABOUT US */}
//       <li
//         className={`flex items-center justify-between nav-text p-4 cursor-pointer ${activeMenu === "About" ? "text-[#F36E23]" : ""
//           }`}
//         onClick={() => handleDropdownClick("About")}
//       >
//         About
//         <Image
//           src="/Expand Arrow.png"
//           height={33}
//           width={20}
//           alt="chevron down"
//           className={`w-2 transition-transform duration-300 ${openDropdown === "About" ? "rotate-180" : ""
//             }`}
//         />
//       </li>
//       <div
//         className={`transition-all duration-300 ease-in-out overflow-hidden ${openDropdown === "About"
//           ? "max-h-96 opacity-100"
//           : "max-h-0 opacity-0"
//           }`}
//       >
//         <ul className="pl-4">
//           <Link href="/about/our-mission">
//             <li
//               className="nav-text p-2"
//               onClick={() => {
//                 handleMenuClick("About");
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               Our Mission
//             </li>
//           </Link>
//           <Link href="/about/our-team">
//             <li
//               className="nav-text p-2"
//               onClick={() => {
//                 handleMenuClick("About");
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               Our Team
//             </li>
//           </Link>
//           <Link href="/about/our-history">
//             <li
//               className="nav-text p-2"
//               onClick={() => {
//                 handleMenuClick("About");
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               Our History
//             </li>
//           </Link>
//         </ul>
//       </div>

//       {/* Blog */}
//       <li
//         className={`flex items-center justify-between p-4 cursor-pointer ${activeMenu === "Blog" ? "text-[#F36E23]" : ""
//           }`}
//         onClick={() => handleDropdownClick("Blog")}
//       >
//         Blog
//         <Image
//           src="/Expand Arrow.png"
//           height={33}
//           width={20}
//           alt="chevron down"
//           className={`w-2 transition-transform duration-300 ${openDropdown === "Blog" ? "rotate-180" : ""
//             }`}
//         />
//       </li>
//       <div
//         className={`transition-all duration-300 ease-in-out overflow-hidden ${openDropdown === "Blog"
//           ? "max-h-96 opacity-100"
//           : "max-h-0 opacity-0"
//           }`}
//       >
//         <ul className="pl-4">
//           <Link href="/Blog/upcoming-Blog">
//             <li
//               className="nav-text p-2"
//               onClick={() => {
//                 handleMenuClick("Blog");
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               Upcoming Blog
//             </li>
//           </Link>
//           <Link href="/events/past-events">
//             <li
//               className="nav-text p-2"
//               onClick={() => {
//                 handleMenuClick("Blog");
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               Past Events
//             </li>
//           </Link>
//         </ul>
//       </div>

//       {/* RESOURCES */}
//       <li
//         className={`flex items-center justify-between nav-text p-4 cursor-pointer ${activeMenu === "RESOURCES" ? "text-[#F36E23]" : ""
//           }`}
//         onClick={() => handleDropdownClick("RESOURCES")}
//       >
//         RESOURCES
//         <Image
//           src="/Expand Arrow.png"
//           height={33}
//           width={20}
//           alt="chevron down"
//           className={`w-2 transition-transform duration-300 ${openDropdown === "RESOURCES" ? "rotate-180" : ""
//             }`}
//         />
//       </li>
//       <div
//         className={`transition-all duration-300 ease-in-out overflow-hidden ${openDropdown === "RESOURCES"
//           ? "max-h-96 opacity-100"
//           : "max-h-0 opacity-0"
//           }`}
//       >
//         <ul className="pl-4">
//           <Link href="/resources/guides">
//             <li
//               className="nav-text p-2"
//               onClick={() => {
//                 handleMenuClick("RESOURCES");
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               Guides
//             </li>
//           </Link>
//           <Link href="/resources/templates">
//             <li
//               className="nav-text p-2"
//               onClick={() => {
//                 handleMenuClick("RESOURCES");
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               Templates
//             </li>
//           </Link>
//         </ul>
//       </div>


//       {/* CONTACT */}
//       <Link href="/contact" passHref>
//         <li
//           className={`nav-text p-4 ${activeMenu === "CONTACT" ? "text-[#F36E23]" : ""
//             }`}
//           onClick={() => handleMenuClick("CONTACT")}
//         >
//           CONTACT
//         </li>
//       </Link>
//     </ul>
//   </nav>
// </div>




// </header> */}

