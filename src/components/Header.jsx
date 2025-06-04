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
              className="h-25 w-auto mt-3.5 ml-1 mr-1"
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

        {/* Mobile: Search Icon + Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          {/* Search Icon Button */}
          <button
            type="button"
            aria-label="Search"
            className="p-2 text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
            onClick={() => {
              const input = document.getElementById("mobile-search-input");
              if (input) input.focus();
            }}
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>

          {/* Hamburger Menu */}
          <button
            className="focus:outline-none"
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
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav
          id="mobile-menu"
          className="absolute right-0 top-20 w-1/2 bg-gray-800 px-4 py-6 space-y-4 shadow-lg z-40 rounded-bl-xl md:hidden"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          {[
            { name: "🏠 Home", path: "/" },
            { name: "📱 Tech", path: "/tech" },
            { name: "❤️ Health", path: "/health" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block text-white text-base hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded px-2 py-2"
              onClick={() => setIsOpen(false)} // Close on click
            >
              {item.name}
            </Link>
          ))}

          {/* Search Input Inside Dropdown */}
          <div className="relative mt-2">
            <label htmlFor="mobile-search-input" className="sr-only">
              Search site content
            </label>
            <input
              id="mobile-search-input"
              name="search"
              type="text"
              placeholder="Search..."
              aria-label="Search site content"
              className="w-full pl-10 pr-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-300 absolute left-3 top-2.5 pointer-events-none" />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
