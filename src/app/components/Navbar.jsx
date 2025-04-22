"use client"; // Mark as a client component
import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Use next/navigation for App Router
import { AuthContext } from '../../context/AuthContext';
import { useMediaQuery } from 'react-responsive';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import logo from "../../img/logo.png";

const Navbar = () => {
    const pathname = usePathname(); // Use usePathname instead of useRouter
    const { currentUser, logout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    if (!isMounted) {
        return null; // Render nothing on the server
    }

    return (
        <nav className="navbar sticky-top sticky-md-top sticky-sm-top">
            <div className="scroll-watcher"></div>
            <div className="container">
                <div className="isMobile">
                    <div className="logo">
                        <Link href="./">
                            <Image src={logo} alt="logo" width={100} height={50} />
                        </Link>
                    </div>

                    <div className="humberger">
                        <button className="primary" style={{ width: "40px", height: '40px', padding: '0' }} onClick={handleMenuToggle}>
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {(isMobile && isOpen) || !isMobile ? (
                    <>
                        {pathname === '/blog' ? (
                            <>
                                <div className="isResponsive">
                                    <div className="links">
                                        <Link className="link" href="./?cat=technology"><h6>Technology</h6></Link>
                                        <Link className="link" href="./?cat=poetry"><h6>Poetry</h6></Link>
                                        <Link className="link" href="./?cat=marketing"><h6>Marketing</h6></Link>
                                    </div>

                                    <div className="links">
                                        <Link className="link" href="./"><h6>Home</h6></Link>
                                        <Link className="link" href="./about"><h6>About Me</h6></Link>
                                        <span><h6>{currentUser?.username}</h6></span>
                                        {currentUser ? <span onClick={logout}><h6>Logout</h6></span> : <Link className="link" href="./login"><h6>Login</h6></Link>}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="isResponsive">
                                <div className="links">
                                    <Link className="link" href="./"><h6>Home</h6></Link>
                                    <Link className="link" href="/about"><h6>About Me</h6></Link>
                                    <Link className="link" href="./blog"><h6>Blog</h6></Link>
                                    <span><h6>{currentUser?.username}</h6></span>
                                    {currentUser ? <span onClick={logout}><h6>Logout</h6></span> : <Link className="link" href="./login"><h6>Login</h6></Link>}
                                </div>
                            </div>
                        )}
                    </>
                ) : null}
            </div>
        </nav>
    );
};

export default Navbar;

// "use client"
// import React from "react";
// import { useContext, useState } from "react";
// // import { Link, useLocation } from "react-router-dom";
// import Link from "next/link";

// import { useRouter } from "next/router";

// import {AuthContext} from '../../context/AuthContext';
// import { useMediaQuery } from 'react-responsive';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from "../../img/logo.png"
// // // import {logo} from './logo.svg';



// const Navbar = () => {
//     const location = useRouter();
//     const { currentUser, logout } = useContext(AuthContext);
//     // Responsive Behaviour
//     const [isOpen, setIsOpen] = useState(false);
//     const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

//     const handleMenuToggle = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="navbar sticky-top sticky-md-top sticky-sm-top">
//             <div className="scroll-watcher"></div>

//             <div className="container ">

//                 <div className="isMobile" >
//                     <div className="logo">
//                         <Link to="./">
//                             <img src={logo} alt="logo" />
//                         </Link>
//                     </div>

//                     <div className="humberger ">
//                         <button className="primary" style={{width:"40px", height:'40px', padding: '0'}} onClick={handleMenuToggle}>
//                         {isOpen ? <FaTimes /> : <FaBars />}

//                         </button>
//                         {/* <button className="fa-times fa-bars" style={{background:'var(--bg)'}} onClick={handleMenuToggle}>
//                             {isOpen ? <FaTimes /> : <FaBars />}

//                         </button> */}
//                     </div>
//                 </div>

           
//                 {(isMobile && isOpen) || !isMobile ?
//                     (
//                         <>
//                             {location.pathname === '/blog' ? (
//                                 // Show Blog's child menus and other menus when current page is Blog
//                                 <>
//                                     <div className="isResponsive">
//                                         <div className="links">
//                                             <Link className="link" to="./?cat=technology"><h6>Technology</h6></Link>
//                                             <Link className="link" to="./?cat=poetry"><h6>Poetry</h6></Link>
//                                             <Link className="link" to="./?cat=marketing"><h6>Marketing</h6></Link>

//                                         </div>

//                                         {
//                                             <div className="links">
//                                                 <Link className="link" to="./">
//                                                     <h6>Home</h6>
//                                                 </Link>

//                                                 <Link className="link" to="./about">
//                                                     <h6>About Me</h6>
//                                                 </Link>

//                                                 <span>
//                                                     <h6>{currentUser?.username}</h6>
//                                                 </span>
//                                                 {currentUser ? <span onClick={logout}><h6>Logout</h6></span> : <Link className="link" to="./login"><h6>Login</h6></Link>}

//                                             </div>
//                                         }
//                                     </div>
//                                 </>

//                             ) : (
//                                 // Do not show Blog's child menus when current page is not Blog
//                                 <div className="isResponsive">
//                                     <>
//                                         {

//                                             <div className="links">
//                                                 <Link className="link" to="./">
//                                                     <h6>Home</h6>
//                                                 </Link>

//                                                 <Link className="link" to="./about">
//                                                     <h6>About Me</h6>
//                                                 </Link>

//                                                 <Link className="link" to="./blog">
//                                                     <h6>Blog</h6>
//                                                 </Link>

//                                                 <span>
//                                                     <h6>{currentUser?.username}</h6>
//                                                 </span>
//                                                 {currentUser ? <span onClick={logout}><h6>Logout</h6></span> : <Link className="link" to="./login"><h6>Login</h6></Link>}

//                                             </div>
//                                         }
//                                     </>
//                                 </div>
//                             )}
//                         </>
//                     ) : null}

               
//             </div>
//         </nav>


//     );
// };

// export default Navbar;
