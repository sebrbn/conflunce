import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-70 text-white fixed top-0 w-full z-50 backdrop-blur-sm">
      <div className="w-full px-4 sm:px-6 py-4">
        <ul className="flex justify-center flex-wrap gap-4 sm:gap-6 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          </li>
          <li>
            <a href="#speakers" className="hover:text-gray-300 transition">Speakers</a>
          </li>
          <li>
            <a href="#highlights" className="hover:text-gray-300 transition">Highlights</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
