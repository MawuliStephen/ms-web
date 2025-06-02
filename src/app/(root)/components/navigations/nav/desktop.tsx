// components/DesktopNav.tsx
import Link from "next/link";
import { MenuItem } from "./types";

interface Props {
    activeMenu: MenuItem;
    // setHoveredMenu: (menu: MenuItem | null) => void;
    handleMenuClick: (menu: MenuItem) => void;
}

const DesktopNav = ({
    activeMenu,
    // setHoveredMenu,
    handleMenuClick,
}: Props) => {
    return (
        <nav className="hidden sm:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
            <Link href="/">
                <span
                    // className="cursor-pointer nav-text"
                     className={`cursor-pointer nav-text  ${activeMenu === "HOME" ? "nav-text" : "white"}`}
                    onClick={() => handleMenuClick("HOME")}
                >
                    Home
                </span>
            </Link>

            <Link href="/about">
                <span
                    // className="cursor-pointer nav-text"
                     className={`cursor-pointer nav-text  ${activeMenu === "ABOUT" ? "nav-text" : "white"}`}

                    onClick={() => handleMenuClick("ABOUT")}
                >
                    About
                </span>
            </Link>

            {/* Blog Dropdown */}
                        <Link href="/blog">
                <span
                    // className="cursor-pointer nav-text"
                     className={`cursor-pointer nav-text ${activeMenu === "ABOUT" ? "nav-text" : "white"}`}

                    onClick={() => handleMenuClick("BLOG")}
                >
                    Blog
                </span>
            </Link>
            {/* <div
                className="relative group"
                onMouseEnter={() => setHoveredMenu("BLOG")}
                onMouseLeave={() => setHoveredMenu(null)}
            >
                <div className="flex items-center space-x-1 cursor-pointer nav-text">
                    <span>Blog</span>
                    <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </div>

                Dropdown menu
                <ul
                    role="menu"
                    className="absolute left-0 top-full mt-7 w-40 bg-white border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
                >
                    <li role="menuitem">
                        <Link href="/blog/programs" className="block nav-text p-2">
                            Programs
                        </Link>
                    </li>
                    <li role="menuitem">
                        <Link href="/blog/mentorship" className="block nav-text p-2">
                            Mentorship
                        </Link>
                    </li>
                </ul>
            </div> */}
        </nav>
    );
};

export default DesktopNav;


// // components/DesktopNav.tsx
// import Link from "next/link";
// import Image from "next/image";
// import { MenuItem } from "./types";

// interface Props {
//     activeMenu: MenuItem;
//     hoveredMenu: MenuItem | null;
//     setHoveredMenu: (menu: MenuItem | null) => void;
//     handleMenuClick: (menu: MenuItem) => void;
// }

// const DesktopNav = ({
//     activeMenu,
//     hoveredMenu,
//     setHoveredMenu,
//     handleMenuClick,
// }: Props) => {
//     return (
//         <div className="hidden sm:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
//             <Link href="/">
//                 <span
//                     className={`cursor-pointer nav-text ${activeMenu === "Home" ? "nav-text" : "nav-text"}`}
//                     onClick={() => handleMenuClick("Home")}
//                 >
//                     Home
//                 </span>
//             </Link>

//             {/* About */}


//             <Link href="/about">
//                 <span
//                     className={`cursor-pointer nav-text ${activeMenu === "About" ? "nav-text" : "nav-text"}`}
//                     onClick={() => handleMenuClick("About")}
//                 >
//                     About
//                 </span>
//             </Link>

//             {/* Blog */}
//             <div
//                 className="relative group"
//                 onMouseEnter={() => setHoveredMenu("Blog")}
//                 onMouseLeave={() => setHoveredMenu(null)}
//             >
//                 <div className="flex items-center space-x-1 cursor-pointer nav-text">
//                     <span>Blog</span>
//                     <svg className={`w-5 h-5 transition-transform duration-300 ${hoveredMenu === "Blog" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                         <path d="M6 9l6 6 6-6" />
//                     </svg>
//                 </div>
//                 <ul className="absolute left-0 top-full mt-7 w-40 bg border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
//                     <li className="nav-text p-2">Programs</li>
//                     <li className="nav-text p-2">Mentorship</li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default DesktopNav;

