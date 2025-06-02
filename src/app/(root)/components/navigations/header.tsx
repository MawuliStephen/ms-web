// components/Header.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import ThemeToggle from "./theme";
import DesktopNav from "./nav/desktop";
import MobileNav from "./nav/mobile";
import { MenuItem } from "./nav/types";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<MenuItem>("HOME");
  const [openDropdown, setOpenDropdown] = useState<MenuItem | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [hoveredMenu, setHoveredMenu] = useState<MenuItem | null>(null);

  const handleMenuClick = (menu: MenuItem) => {
    setActiveMenu(menu);
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleDropdownClick = (menu: MenuItem) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("li")) {
        setOpenDropdown(null);
      }
    };
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
    <header className="fixed z-30 w-screen nav-container">
      <div className="nav-top mx-auto h-10 md:h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image
            className="w-16 md:w-24 lg:w-25 cursor-pointer"
            alt="Logo"
            src="/logo.png"
            width={80}
            height={20}
            priority
          />
        </Link>

        <DesktopNav
          activeMenu={activeMenu}
          // hoveredMenu={hoveredMenu}
          // setHoveredMenu={setHoveredMenu}
          handleMenuClick={handleMenuClick}
        />

        <div className="hidden sm:flex items-center space-x-6">
          <Link href="/contact">
            <button className="btn">Contact Us</button>
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <AlignJustify className="cursor-pointer" onClick={() => setIsMobileMenuOpen(true)} />
        </div>
      </div>

      <MobileNav
        isMobileMenuOpen={isMobileMenuOpen}
        activeMenu={activeMenu}
        openDropdown={openDropdown}
        handleMenuClick={handleMenuClick}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleDropdownClick={handleDropdownClick}
      />
    </header>
  );
};

export default Header;

