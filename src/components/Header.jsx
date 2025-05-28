"use client";
import Link from "next/link";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo.webp"
              alt="TrendLite - The pulse of Tech & Life"
              className="h-25 w-auto mt-3.5 ml-1 mr-1" // Set height instead of fixed width
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex gap-6 items-center"
          role="navigation"
          aria-label="Primary Navigation"
        >
          <Link href="/" className="hover:text-yellow-300">🏠 Home</Link>
          <Link href="/tech" className="hover:text-yellow-300">📱 Tech</Link>
          <Link href="/health" className="hover:text-yellow-300">❤️ Health</Link>
          <Link href="/about" className="hover:text-yellow-300">About</Link>
          <Link href="/contact" className="hover:text-yellow-300">Contact</Link>

          {/* Search Box */}
          <div className="relative">
            <input
              id="search-input"
              name="search"
              type="text"
              placeholder="Search..."
              aria-label="Search site content"
              className="pl-10 pr-3 py-1 rounded-md bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />

            <MagnifyingGlassIcon className="w-5 h-5 text-gray-300 absolute left-2 top-1.5" />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-gray-800 px-8 pb-4 space-y-2"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <Link href="/" className="block text-white">🏠 Home</Link>
          <Link href="/tech" className="block text-white">📱 Tech</Link>
          <Link href="/health" className="block text-white">❤️ Health</Link>
          <Link href="/about" className="block text-white">About</Link>
          <Link href="/contact" className="block text-white">Contact</Link>
          <div className="relative">
            <input
              id="mobile-search-input"
              name="search"
              type="text"
              placeholder="Search..."
              aria-label="Search site content"
              className="w-full pl-10 pr-3 py-1 rounded-md bg-gray-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />

            <MagnifyingGlassIcon className="w-5 h-5 text-gray-300 absolute left-2 top-1.5" />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
