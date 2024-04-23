"use client";

import Link from 'next/link';
import React, { useState } from 'react';



const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md py-6">
      <div className="container mx-auto flex justify-between items-center px-8">
        <div className="flex items-center">
          <button
            className="md:hidden ml-4"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="font-bold text-xl ml-5">
            <Link href="/">Arshpreet Singh</Link>
          </div>
        </div>
        <nav>
          <div className={`w-full bg-white dark:bg-gray-800 md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
            <ul className="flex flex-col items-center space-y-2 py-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#experience">Experience</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li>
                <Link href="#education">Education</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/">Home</Link>
            <Link href="#project">Projects</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#education">Education</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
