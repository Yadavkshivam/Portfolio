// src/components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navItems = ["Home", "Experience", "Projects", "Who I Am", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<header
  className={`fixed w-full top-0 left-0 z-50 justify-between transition-all duration-500 ease-in-out ${
    scrolled ? "bg-black/70 shadow-lg backdrop-blur-md" : "bg-transparent"
  }`}
>
  <nav className="w-full px-10 py-4 flex justify-around rounded-full gap-8 border-b border-gray-400">
    {navItems.map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="text-white hover:text-blue-500 font-medium transition-colors duration-300"
      >
        {item}
      </a>
    ))}
  </nav>
</header>

  );
}
