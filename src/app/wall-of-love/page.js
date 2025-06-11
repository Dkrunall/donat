"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

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
      <div className="p-1.5 md:p-1.5">
        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>

        {/* Hero Section */}
        <div className="relative h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden mb-16 -mt-5">
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
            <p className="text-lg md:text-xl font-open-sans mb-8 text-center">
              These are the people we help.
            </p>
            <div className="absolute bottom-8 right-8 max-w-xs text-right">
              <p className="text-sm font-open-sans italic">
                Every picture tells a story. A memory. A life that was worth
                saving.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mx-auto">
          <h2 className="text-2xl md:text-3xl font-platypi font-bold text-center mb-8">
            Gallery
          </h2>

          {/* Category Filters */}
          <div className="flex justify-center gap-2 md:gap-4 mb-10">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 rounded-full text-sm font-open-sans ${
                activeCategory === "All"
                  ? "bg-[#323E7E] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory("CAPP")}
              className={`px-4 py-2 rounded-full text-sm font-open-sans ${
                activeCategory === "CAPP"
                  ? "bg-[#323E7E] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              CAPP
            </button>
            <button
              onClick={() => setActiveCategory("BKR")}
              className={`px-4 py-2 rounded-full text-sm font-open-sans ${
                activeCategory === "BKR"
                  ? "bg-[#323E7E] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              BKR
            </button>
            <button
              onClick={() => setActiveCategory("Events")}
              className={`px-4 py-2 rounded-full text-sm font-open-sans ${
                activeCategory === "Events"
                  ? "bg-[#323E7E] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveCategory("Milestones")}
              className={`px-4 py-2 rounded-full text-sm font-open-sans ${
                activeCategory === "Milestones"
                  ? "bg-[#323E7E] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Milestones
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-16">
            {/* Gallery Item 1 */}
            <div className="relative rounded-xl overflow-hidden group">
              <div className="relative h-[320px]">
                <Image
                  src="/wol.png"
                  alt="Gallery Image 1"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="relative rounded-xl overflow-hidden group">
              <div className="relative h-[320px]">
                <Image
                  src="/wol.png"
                  alt="Gallery Image 2"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center p-4">
                  <p className="text-white font-open-sans">
                    He survived cancer. And then gave hope to others.
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="relative rounded-xl overflow-hidden group">
              <div className="relative h-[320px]">
                <Image
                  src="/wol.png"
                  alt="Gallery Image 3"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="relative rounded-xl overflow-hidden group">
              <div className="relative h-[320px]">
                <Image
                  src="/wol.png"
                  alt="Gallery Image 4"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
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

        {/* You Can Be Part Section */}
        <div className="md:px-0 mb-16">
          <h2 className="text-2xl md:text-3xl font-platypi font-bold text-center mb-12">
            You Can Be Part of the
            <br />
            Next Story
          </h2>

          <div className="text-center mb-12">
            <Link
              href="/join-us"
              className="bg-gray-200 text-[#323E7E] px-6 py-3 rounded-full font-open-sans hover:bg-gray-300 transition duration-300"
            >
              Yes, I can
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Option 1 */}
            <div className="flex flex-col items-center">
              <div className="relative h-[250px] md:h-[350px] w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src="/wol1.png"
                  alt="Become a volunteer"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Become a volunteer
              </p>
            </div>

            {/* Option 2 */}
            <div className="flex flex-col items-center">
              <div className="relative h-[250px] md:h-[350px] w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src="/wol1.png"
                  alt="Sponsor a campaign"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Sponsor a campaign
              </p>
            </div>

            {/* Option 3 */}
            <div className="flex flex-col items-center">
              <div className="relative h-[250px] md:h-[350px] w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src="/wol1.png"
                  alt="Start a fundraiser"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Start a fundraiser
              </p>
            </div>

            {/* Option 4 */}
            <div className="flex flex-col items-center">
              <div className="h-[250px] md:h-[350px] border border-[#E3E3E3] w-full rounded-xl flex items-center justify-center p-5">
                <p className="text-xl md:text-3xl text-[#323E7E] font-open-sans font-extrabold">The next number on this page could be because of you.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
