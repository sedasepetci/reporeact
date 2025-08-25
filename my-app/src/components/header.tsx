"use client";

import { ShoppingCart, User, Search } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return () => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", handleScroll);
    }
  };
}, []);

return (
    <header
      className={`fixed top-0 left-0 w-full px-6 py-4 flex items-center justify-between z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
 
  {/* Üst Menü */}
      <div className="flex justify-end gap-4 mb-2">
        <a
          href="#"
          className={`hover:opacity-70 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          COLLECTION
        </a>
        <a
          href="#"
          className={`hover:opacity-70 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          PROJECTS
        </a>
        <a
          href="#"
          className={`hover:opacity-70 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          PRODUCTS
        </a>
      </div>

      {/* Logo */}
      <div
        className={`text-center text-2xl font-bold ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        LAVENA
      </div>

      {/* Alt Menü */}
      <div className="flex justify-end gap-4 mb-2">
        <a
          href="#"
          className={`hover:opacity-70 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          HUB
        </a>
        <a
          href="#"
          className={`hover:opacity-70 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          DESIGNER
        </a>
        <a
          href="#"
          className={`hover:opacity-70 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          STORE
        </a>
      </div>



    {/* Icons */}
      <div className="flex items-center space-x-4">
        <Search
          className={`w-6 h-6 cursor-pointer ${
            scrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"
          }`}
        />
        <ShoppingCart
          className={`w-6 h-6 cursor-pointer ${
            scrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"
          }`}
        />
        <User
          className={`w-6 h-6 cursor-pointer ${
            scrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"
          }`}
        />
      </div>
    </header>
  );
}
