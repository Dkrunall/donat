"use client";

import { OptimizedImage } from "../utils/cloudinary";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function WhatWeDo() {
  const [offset, setOffset] = useState(0);
  const [showAllCampaigns, setShowAllCampaigns] = useState(false);

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
  
  const toggleCampaigns = () => {
    setShowAllCampaigns(!showAllCampaigns);
  };

  return (
    <>
      <div className="px-1.5 md:px-1.5">
        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>

        {/* Hero Section */}
        <div className="info min-h-[700px] md:h-[90vh] w-full bg-[url(/wwd.png)] bg-center bg-cover rounded-3xl flex flex-col justify-center -mt-10">
          <div className="info-content w-full h-full flex items-center justify-center px-6 md:px-8 py-10 md:py-0">
            <div className="text-center">
              <h1 className="text-2xl md:text-5xl font-extrabold font-platypi text-white leading-tight">
                We don&apos;t just care. We act.
              </h1>
              <p className="text-base md:text-2xl font-open-sans font-normal mt-4 md:mt-5 text-white leading-relaxed">
                Every day, we&apos;re on the ground making real change happen.{" "}
                <br className="hidden md:block" />
                Because words without action are just empty promises.
              </p>
            </div>
          </div>
        </div>

        {/* Campaigns That Create Change Section */}
        <div className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-platypi font-bold text-black text-center mb-4">
            Campaigns That Create Change
          </h2>
          <p className="text-base md:text-lg font-open-sans text-center max-w-3xl mx-auto mb-8">
            We don&apos;t believe in seasonal charity. We believe in continuous
            change. Over the years, we&apos;ve led campaigns like
          </p>

          {/*Campings Grid*/}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-20">
            {/* Campaign 1 */}
            <div className="rounded-2xl overflow-hidden shadow-md relative aspect-square">
              <div className="relative h-full">
                <OptimizedImage
                  src="/gallery/File41.jpg"
                  alt="Cancer awareness drives"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-lg md:text-xl font-platypi font-bold text-white px-4 text-center">
                    Cancer awareness drives
                  </h3>
                </div>
              </div>
            </div>

            {/* Campaign 2 */}
            <div className="rounded-2xl overflow-hidden shadow-md relative aspect-square">
              <div className="relative h-full">
                <OptimizedImage
                  src="/cancer2.jpg"
                  alt="Blood donation camps"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-lg md:text-xl font-platypi font-bold text-white px-4 text-center">
                    Blood donation camps
                  </h3>
                </div>
              </div>
            </div>

            {/* Campaign 3 */}
            <div className="rounded-2xl overflow-hidden shadow-md relative aspect-square">
              <div className="relative h-full">
                <OptimizedImage
                  src="/gallery/File33.jpg"
                  alt="Menstrual health sessions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-lg md:text-xl font-platypi font-bold text-white px-4 text-center">
                    Menstrual health sessions
                  </h3>
                </div>
              </div>
            </div>

            {/* Campaign 4 */}
            <div className="rounded-2xl overflow-hidden shadow-md relative aspect-square">
              <div className="relative h-full">
                <OptimizedImage
                  src="/gallery/File43.jpg"
                  alt="Ration distribution during lockdowns"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-lg md:text-xl font-platypi font-bold text-white px-4 text-center">
                    Ration distribution during lockdowns
                  </h3>
                </div>
              </div>
            </div>

            {/* Campaign 5 */}
            <div className="rounded-2xl overflow-hidden shadow-md relative aspect-square">
              <div className="relative h-full">
                <OptimizedImage
                  src="/gallery/File7.jpg"
                  alt="Free education drives"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-lg md:text-xl font-platypi font-bold text-white px-4 text-center">
                    Free education drives
                  </h3>
                </div>
              </div>
            </div>

            {/* Campaign 6 */}
            <div className="rounded-2xl overflow-hidden shadow-md relative aspect-square">
              <div className="relative h-full">
                <OptimizedImage
                  src="/gallery/File57.JPG"
                  alt="Food drives in slum areas"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-lg md:text-xl font-platypi font-bold text-white px-4 text-center">
                    Food drives in slum areas
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Additional campaigns that show when toggled */}
            {showAllCampaigns && (
              <>
                {/* Campaign 7 - Animal Welfare */}
                <div className="rounded-2xl overflow-hidden shadow-md relative aspect-square">
                  <div className="relative h-full">
                    <OptimizedImage
                      src="/animal1.jpg"
                      alt="Animal Welfare"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-lg md:text-xl font-platypi font-bold text-white px-4 text-center">
                        Animal Welfare
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Campaign 8 - Distribution of Clothes */}
                <div className="rounded-2xl overflow-hidden shadow-md relative aspect-square">
                  <div className="relative h-full">
                    <OptimizedImage
                      src="/clothes1.JPG"
                      alt="Distribution of Clothes"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-lg md:text-xl font-platypi font-bold text-white px-4 text-center">
                        Distribution of Clothes
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Campaign 9 - Gajak Distribution at Slums */}
                <div className="rounded-2xl overflow-hidden shadow-md relative aspect-square">
                  <div className="relative h-full">
                    <OptimizedImage
                      src="/gds.jpg"
                      alt="Gajak Distribution at Slums"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-lg md:text-xl font-platypi font-bold text-white px-4 text-center">
                        Gajak Distribution at Slums
                      </h3>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={toggleCampaigns}
              className="font-platypi text-base bg-[#323E7E] text-white px-8 py-3 rounded-full inline-block"
            >
              {showAllCampaigns ? "Show Less" : "View All Campaigns"}
            </button>
          </div>
        </div>

        {/* Projects That Run Every Day Section */}
        <div className="py-12 md:py-16 bg-[#F8F9FF] rounded-3xl my-6 px-6 md:px-20 flex items-center gap-5">
          <div className="mb-10 w-[45%]">
            <h2 className="text-2xl md:text-4xl font-platypi font-bold text-[#323E7E] mb-6">
              Projects That <br />
              <span className="text-[#323E7E]">Run Every Day</span>
            </h2>
            <p className="text-base md:text-lg font-open-sans">
              We&apos;ve built sustainable, ongoing projects that <br />
              go beyond one-time help. These are the <br /> heartbeats of Anant
              Aman:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Babu Ki Rasoi Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <OptimizedImage
                  src="/gallery/File192.jpg"
                  alt="Babu Ki Rasoi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-platypi font-bold text-[#FFDE59] mb-3">
                  Babu Ki Rasoi
                </h3>
                <p className="text-sm font-open-sans mb-4">
                  One plate. One purpose: no one should sleep hungry.
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                    55,000+ meals served
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                    Clean, satvik food
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                    Daily operations in urban slums
                  </span>
                </div>

                <Link
                  href="/babu-ki-rasoi"
                  className="font-platypi text-sm md:text-base bg-[#FFDE59] text-black px-6 py-2 rounded-full inline-block hover:bg-[#f5d33d] transition-colors duration-300"
                >
                  Explore BKR
                </Link>
              </div>
            </div>

            {/* CAPP Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <OptimizedImage
                  src="/gallery/File86.jpg"
                  alt="Cancer Awareness & Prevention Program"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-platypi font-bold text-[#4285F4] mb-3">
                  Cancer Awareness & Prevention Program (CAPP)
                </h3>
                <p className="text-sm font-open-sans mb-4">
                  Awareness saves lives before treatment begins.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                    Free health camps in underserved areas
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                    Workshops led by doctors & survivors
                  </span>
                </div>

                <Link
                  href="/capp"
                  className="font-platypi text-sm md:text-base bg-[#4285F4] text-white px-6 py-2 rounded-full inline-block hover:bg-[#3b78e7] transition-colors duration-300"
                >
                  Explore CAPP
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="py-12 h-[80vh] md:py-16 bg-[url(/foaa7.JPG)] bg-center bg-cover rounded-3xl my-6 px-6 md:px-20 text-center relative">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
          <div className="rounded-3xl p-8 md:p-16 text-white relative z-10">
            <h2 className="text-2xl md:text-4xl font-platypi font-bold mb-4">
              Friends of Anant Aman, The Youth Movement
            </h2>
            <p className="text-base md:text-xl font-open-sans mb-8 max-w-3xl mx-auto">
              FAA is our youth-powered club that connects passionate individuals aged 16,30 to real-world change through events, volunteering, and community.
            </p>
            <Link
              href="/join-us"
              className="font-platypi text-base bg-white text-[#323E7E] px-8 py-3 rounded-full inline-block"
            >
              Join Our Team
            </Link>
          </div>
        </div>

        {/* Collaborations & Associations Section */}
        <div className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-platypi font-bold text-black text-center mb-4">
            Collaborations & Associations
          </h2>
          <p className="text-base md:text-lg font-open-sans text-center max-w-3xl mx-auto mb-8">
            Because it takes a village to create lasting change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
            {/* Collaboration 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="relative h-48 md:h-80">
                <OptimizedImage
                  src="/gallery/File221.jpg"
                  alt="Schools and colleges"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-[#F4F5F7]">
                <h3 className="text-xl font-platypi font-bold text-[#323E7E] mb-2">
                  Schools and colleges
                </h3>
              </div>
            </div>

            {/* Collaboration 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="relative h-48 md:h-80">
                <OptimizedImage
                  src="/cancer2.jpg"
                  alt="Hospitals and dispensaries"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-[#F4F5F7]">
                <h3 className="text-xl font-platypi font-bold text-[#323E7E] mb-2">
                  Hospitals and dispensaries
                </h3>
              </div>
            </div>

            {/* Collaboration 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="relative h-48 md:h-80">
                <OptimizedImage
                  src="/foaa6.jpg"
                  alt="Corporates and businesses"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-[#F4F5F7]">
                <h3 className="text-xl font-platypi font-bold text-[#323E7E] mb-2">
                  Corporates and businesses
                </h3>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/"
              className="font-platypi text-base bg-[#323E7E] text-white px-8 py-3 rounded-full inline-block"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Want to Join the Work Section */}
        <div className="py-12 md:py-16 bg-[#F8F9FF] rounded-3xl my-6 px-6 md:px-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-platypi font-bold text-[#323E7E] mb-4">
              Want to Join the Work?
            </h2>
            <p className="text-base md:text-lg font-open-sans max-w-2xl mx-auto">
              Change starts when you show up.
            </p>
          </div>

          {/* Option Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-white text-black py-2 px-8 rounded-full shadow-md font-platypi text-sm md:text-base hover:shadow-lg transition-all">
              Intern with us
            </button>
            <button className="bg-white text-black py-2 px-8 rounded-full shadow-md font-platypi text-sm md:text-base hover:shadow-lg transition-all">
              Volunteer on ground
            </button>
            <button className="bg-white text-black py-2 px-8 rounded-full shadow-md font-platypi text-sm md:text-base hover:shadow-lg transition-all">
              Help us with funds
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 - Become a Volunteer */}
            <div className="text-center">
              <div className="mb-8 bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="relative h-48 md:h-64">
                  <OptimizedImage
                    src="/wwsf1.png"
                    alt="Become a Volunteer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-platypi font-bold text-[#323E7E]">
                    Become a Volunteer
                  </h3>
                </div>
              </div>
              <Link
                href="/join-us"
                className="bg-[#323E7E] text-white py-2 px-8 rounded-full shadow-md font-platypi text-sm md:text-base hover:bg-[#263166] transition-colors"
              >
                Become Part
              </Link>
            </div>

            {/* Card 2 - Sponsor a Campaign */}
            <div className="text-center">
              <div className="mb-8 bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="relative h-48 md:h-64">
                  <OptimizedImage
                    src="/wwsf2.png"
                    alt="Sponsor a Campaign"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-platypi font-bold text-[#323E7E]">
                    Sponsor a Campaign
                  </h3>
                </div>
              </div>
              <Link
                href="/"
                className="bg-[#323E7E] text-white py-2 px-8 rounded-full shadow-md font-platypi text-sm md:text-base hover:bg-[#263166] transition-colors"
              >
                Sponsor
              </Link>
            </div>

            {/* Card 3 - Donate Funds */}
            <div className="text-center">
              <div className="mb-8 bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="relative h-48 md:h-64">
                  <OptimizedImage
                    src="/wwsf3.png"
                    alt="Donate Funds"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-platypi font-bold text-[#323E7E]">
                    Donate Funds
                  </h3>
                </div>
              </div>
              <Link
                href="/"
                className="bg-[#323E7E] text-white py-2 px-8 rounded-full shadow-md font-platypi text-sm md:text-base hover:bg-[#263166] transition-colors"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
