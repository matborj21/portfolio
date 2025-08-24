"use client";

import { Menu, X } from 'lucide-react';
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle  = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="m-5 md:mx-20 lg:mx-40 xl:mx-60">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className='flex mt-[-5px]'>
          <Image src="/images/logo.svg" alt="logo" width={40} height={50} priority />
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={handleToggle}
          className="z-50 relative w-10 h-10 flex flex-col justify-between items-center md:hidden cursor-pointer"
        >
          <span
            className={`absolute transition-transform duration-300 ${
              isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          >
            <Menu className="w-8 h-8" />
          </span>

          <span
            className={`absolute transition-transform duration-300 ${
              isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          >
            <X className="w-8 h-8" />
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="text-primary flex gap-6">
            <li><Link href="#about" className="hover:text-muted-foreground">About</Link></li>
            <li><Link href="#experience" className="hover:text-muted-foreground">Experience</Link></li>
            <li><Link href="#projects" className="hover:text-muted-foreground">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-muted-foreground">Get in touch</Link></li>
          </ul>
        </nav>
      </div>


      <nav className={`absolute top-0 h-80 pt-20 left-0 w-full bg-card shadow-md border-b
          ${isOpen ? "animate-slidedown" : "animate-slideup"}
          `}
      >
          <ul className="text-primary text-2xl flex flex-col gap-4 items-center">
            <li><Link href="#about" className="block hover:text-muted-foreground">About</Link></li>
            <li><Link href="#experience" className="block hover:text-muted-foreground">Experience</Link></li>
            <li><Link href="#projects" className="block hover:text-muted-foreground">Projects</Link></li>
            <li><Link href="#contact" className="block hover:text-muted-foreground">Get in touch</Link></li>
          </ul>
        </nav>
    </header>
  );
}

export default Navbar