import React from "react";
import heroImage from "../assets/main3.jpg";
import confluenceLogo from "../assets/sticker.png";
import EventHighlights from "./EventHighlights";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full text-white overflow-x-hidden h-[80vh] sm:h-screen">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat sm:bg-fixed"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 sm:bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 md:px-6 space-y-6 h-full">
          {/* Logo and Version */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <img
              src={confluenceLogo}
              alt="Confluence Logo"
              className="w-48 sm:w-72 md:w-[28rem] lg:w-[32rem] max-w-full"
            />
            <span
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              2.0
            </span>
          </div>

          {/* Title */}
          <p className="text-base sm:text-xl md:text-3xl text-gray-100 tracking-wide">
            The Largest Industry–Academia Meet
          </p>

          {/* Date */}
          <p className="text-sm sm:text-lg md:text-2xl text-gray-200 mt-2">
            21–27 September · Kochi
          </p>

          {/* Button */}
          <Link
            to="/countdown"
            className="inline-block px-5 py-2 bg-white text-black text-sm sm:text-base font-semibold rounded hover:bg-gray-200 transition"
          >
            Learn More
          </Link>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 text-white animate-bounce text-xl">↓</div>
        </div>
      </section>

      {/* Event Highlights */}
      <section>
        <EventHighlights />
      </section>
    </>
  );
}
