"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Gallery from '../components/Gallery';

export default function WallOfLove() {
  const [offset, setOffset] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffset(window.pageYOffset * 0.15);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="px-1.5 md:px-1.5">
        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>

        {/* Hero Section */}
        <div className="relative h-[500px] md:h-[650px] w-full rounded-3xl overflow-hidden mb-16 -mt-0 md:-mt-10">
          <Image
            src="/info.png"
            alt="Wall of Love"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6">
            <h1 className="text-3xl md:text-5xl font-bold font-platypi mb-4 text-center">
              Captured not for memories...
              <br />
              but for meaning.
            </h1>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="px-4 py-16">
          {/* Category Filters 
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button 
              onClick={() => setActiveCategory("All")}
              className={`px-6 py-2 rounded-full ${activeCategory === "All" ? "bg-[#39447B] text-white" : "border border-[#39447B] text-[#39447B]"}`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveCategory("Events")}
              className={`px-6 py-2 rounded-full ${activeCategory === "Events" ? "bg-[#39447B] text-white" : "border border-[#39447B] text-[#39447B]"}`}
            >
              Events
            </button>
            <button 
              onClick={() => setActiveCategory("Community")}
              className={`px-6 py-2 rounded-full ${activeCategory === "Community" ? "bg-[#39447B] text-white" : "border border-[#39447B] text-[#39447B]"}`}
            >
              Community
            </button>
            <button 
              onClick={() => setActiveCategory("Stories")}
              className={`px-6 py-2 rounded-full ${activeCategory === "Stories" ? "bg-[#39447B] text-white" : "border border-[#39447B] text-[#39447B]"}`}
            >
              Stories
            </button>
          </div>*/}

          <Gallery />
        </div>

        {/* Join Us Section */}
        <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden mb-16">
          <Image src="/wwd2.png" alt="Join Us" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-white p-6">
            <h2 className="text-2xl md:text-4xl font-platypi font-bold mb-4 text-center">
              Want to be part of these stories?
            </h2>
            <p className="text-base md:text-lg font-open-sans mb-8 text-center max-w-2xl">
              You can be the reason that someone&apos;s life changes. And it will
              change yours too.
            </p>
            <Link
              href="/join-us"
              className="bg-white text-[#323E7E] px-6 py-3 rounded-full font-open-sans hover:bg-gray-100 transition duration-300"
            >
              Join Us (Volunteer)
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
