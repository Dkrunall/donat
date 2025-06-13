"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function OurImpact() {
  const [offset, setOffset] = useState(0);

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
        <div className="info min-h-[700px] md:h-[90vh] w-full bg-[url(/Our\ Impact.png)] bg-center bg-cover rounded-3xl flex flex-col justify-center items-center -mt-0 md:-mt-10 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 rounded-3xl"></div>{" "}
          {/* Overlay for better text readability */}
          <div className="info-content w-full h-full flex flex-col items-center justify-center px-6 md:px-8 py-10 md:py-0 z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold font-platypi text-white leading-tight">
                We measure our impact in <br /> smiles, not just statistics.
              </h1>
              <p className="text-lg md:text-xl font-open-sans font-normal mt-3 md:mt-4 text-white">
                You made this possible.
              </p>
              <p className="text-sm md:text-base font-open-sans font-light mt-6 md:mt-8 text-white max-w-xl mx-auto">
                Every meal served, every child educated, every life saved – was
                because someone like you chose to care.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 md:mt-10">
                <Link
                  href="/join-us" // Assuming pledge links to join-us page
                  className="font-platypi text-base md:text-lg bg-white text-[#323E7E] px-8 py-3 rounded-full inline-block shadow-md hover:bg-gray-100 transition-colors duration-300"
                >
                  Pledge
                </Link>
                <Link
                  href="/what-we-do" // Assuming donate links to a general donation/what-we-do page
                  className="font-platypi text-base md:text-lg bg-[#FFD700] border border-[#FFD700] text-black px-8 py-3 rounded-full inline-block shadow-md hover:bg-yellow-400 transition-colors duration-300"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics Section */}
        <div className="py-12 md:py-20 bg-white">
          <h2 className="text-3xl md:text-4xl font-platypi font-bold text-black text-center mb-12 md:mb-16">
            Our Impact
          </h2>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {/* Statistic 1 */}
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-[#E9ECFF] p-5 rounded-full mb-4 inline-block">
                  <Image
                    src="/icon1.png"
                    alt="Meals Served Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-3xl font-platypi font-bold text-[#323E7E]">
                  55k+
                </h3>
                <p className="text-base text-gray-600 mt-1">Meals Served</p>
              </div>

              {/* Statistic 2 */}
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-[#E9ECFF] p-5 rounded-full mb-4 inline-block">
                  <Image
                    src="/icon2.png"
                    alt="Lives Reached Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-3xl font-platypi font-bold text-[#323E7E]">
                  58k+
                </h3>
                <p className="text-base text-gray-600 mt-1">Lives Reached</p>
              </div>

              {/* Statistic 3 */}
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-[#E9ECFF] p-5 rounded-full mb-4 inline-block">
                  <Image
                    src="/icon3.png"
                    alt="Kids Educated Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-3xl font-platypi font-bold text-[#323E7E]">
                  3.5k+
                </h3>
                <p className="text-base text-gray-600 mt-1">Kids Educated</p>
              </div>

              {/* Statistic 4 */}
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-[#E9ECFF] p-5 rounded-full mb-4 inline-block">
                  {/* Assuming a new icon or reusing one, e.g., icon1 for cancer detections */}
                  <Image
                    src="/icon1.png"
                    alt="Cancer Detections Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-3xl font-platypi font-bold text-[#323E7E]">
                  1.5k+
                </h3>
                <p className="text-base text-gray-600 mt-1">
                  Cancer Detections
                </p>
              </div>

              {/* Statistic 5 */}
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-[#E9ECFF] p-5 rounded-full mb-4 inline-block">
                  {/* Assuming a new icon or reusing one, e.g., icon2 for awareness camps */}
                  <Image
                    src="/icon2.png"
                    alt="Awareness Camps Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-3xl font-platypi font-bold text-[#323E7E]">
                  100+
                </h3>
                <p className="text-base text-gray-600 mt-1">Awareness Camps</p>
              </div>

              {/* Statistic 6 */}
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-[#E9ECFF] p-5 rounded-full mb-4 inline-block">
                  {/* Assuming a new icon or reusing one, e.g., icon3 for lives changed */}
                  <Image
                    src="/icon3.png"
                    alt="Lives Changed Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-3xl font-platypi font-bold text-[#323E7E]">
                  10k+
                </h3>
                <p className="text-base text-gray-600 mt-1">Lives Changed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Year-Wise Timeline Section */}
        <div className="py-16 md:py-24 bg-[#F0F3FF] rounded-3xl my-8 md:my-12 mx-4 md:mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-platypi font-bold text-black text-center mb-12 md:mb-16">
            Year-Wise Timeline
          </h2>

          <div className="relative">
            {/* Horizontal Timeline Line - visible on larger screens */}
            <div
              className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2"
              style={{ top: "calc(50% - 2px)" }}
            ></div>

            {/* Timeline Items Container - flex for horizontal layout on md+, column for smaller screens */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative space-y-12 md:space-y-0 md:space-x-4 lg:space-x-8">
              {/* Timeline Item 1 */}
              <div className="flex md:flex-col items-center text-center w-full md:w-1/5 relative px-2 group">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-gray-300 self-stretch ml-2.5"></div>{" "}
                {/* Vertical line for mobile */}
                <div className="bg-white md:bg-[#4A5AAA] h-5 w-5 rounded-full mb-0 md:mb-3 z-10 flex-shrink-0 mr-4 md:mr-0 border-2 border-[#4A5AAA] md:border-white group-hover:bg-[#323E7E] transition-colors duration-300"></div>
                <div className="bg-white p-4 rounded-lg shadow-lg w-full group-hover:shadow-xl transition-shadow duration-300">
                  <p className="text-sm font-semibold text-[#323E7E] mb-1">
                    Year 2022
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Anant Aman girls football team formed in rural MP
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex md:flex-col items-center text-center w-full md:w-1/5 relative px-2 group">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-gray-300 self-stretch ml-2.5"></div>
                <div className="bg-white md:bg-[#4A5AAA] h-5 w-5 rounded-full mb-0 md:mb-3 z-10 flex-shrink-0 mr-4 md:mr-0 border-2 border-[#4A5AAA] md:border-white group-hover:bg-[#323E7E] transition-colors duration-300"></div>
                <div className="bg-white p-4 rounded-lg shadow-lg w-full group-hover:shadow-xl transition-shadow duration-300">
                  <p className="text-sm font-semibold text-[#323E7E] mb-1">
                    Year 2021
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    COVID lockdown: 50000+ ration kits distributed
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex md:flex-col items-center text-center w-full md:w-1/5 relative px-2 group">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-gray-300 self-stretch ml-2.5"></div>
                <div className="bg-white md:bg-[#4A5AAA] h-5 w-5 rounded-full mb-0 md:mb-3 z-10 flex-shrink-0 mr-4 md:mr-0 border-2 border-[#4A5AAA] md:border-white group-hover:bg-[#323E7E] transition-colors duration-300"></div>
                <div className="bg-white p-4 rounded-lg shadow-lg w-full group-hover:shadow-xl transition-shadow duration-300">
                  <p className="text-sm font-semibold text-[#323E7E] mb-1">
                    Year 2020
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Anant Aman SWS was born. Started with education clinics in
                    slums.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex md:flex-col items-center text-center w-full md:w-1/5 relative px-2 group">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-gray-300 self-stretch ml-2.5"></div>
                <div className="bg-white md:bg-[#4A5AAA] h-5 w-5 rounded-full mb-0 md:mb-3 z-10 flex-shrink-0 mr-4 md:mr-0 border-2 border-[#4A5AAA] md:border-white group-hover:bg-[#323E7E] transition-colors duration-300"></div>
                <div className="bg-white p-4 rounded-lg shadow-lg w-full group-hover:shadow-xl transition-shadow duration-300">
                  <p className="text-sm font-semibold text-[#323E7E] mb-1">
                    Year 2019
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Cancer awareness program launched in rural MP
                  </p>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="flex md:flex-col items-center text-center w-full md:w-1/5 relative px-2 group">
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-gray-300 self-stretch ml-2.5"></div>
                <div className="bg-white md:bg-[#4A5AAA] h-5 w-5 rounded-full mb-0 md:mb-3 z-10 flex-shrink-0 mr-4 md:mr-0 border-2 border-[#4A5AAA] md:border-white group-hover:bg-[#323E7E] transition-colors duration-300"></div>
                <div className="bg-white p-4 rounded-lg shadow-lg w-full group-hover:shadow-xl transition-shadow duration-300">
                  <p className="text-sm font-semibold text-[#323E7E] mb-1">
                    Year 2018
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Cancer detection camps started in rural MP
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 md:mt-16">
              <Link
                href="/resources" // Assuming annual report is in resources
                className="font-platypi text-base md:text-lg bg-white text-[#323E7E] px-8 py-3 rounded-full inline-block shadow-md hover:bg-gray-100 transition-colors duration-300 border border-gray-300 hover:border-gray-400"
              >
                Download Annual Report
              </Link>
            </div>
          </div>
        </div>

        {/* Faces Behind the Numbers Section */}
        <div className="py-16 md:py-24 bg-white">
          <h2 className="text-3xl md:text-4xl font-platypi font-bold text-black text-center mb-12 md:mb-16">
            Faces Behind the Numbers
          </h2>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {/* Story 1 */}
              <div className="bg-[#F0F3FF] rounded-2xl p-6 md:p-8 text-center md:text-left hover:shadow-xl transition-shadow duration-300 flex flex-col items-center md:items-start">
                {/* Replace with actual image if available, using placeholder for now */}
                <div className="w-20 h-20 rounded-full bg-gray-300 mb-4 md:mb-5 mx-auto md:mx-0 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/p1.png"
                    alt="Seema&apos;s story"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <p className="text-base md:text-lg font-open-sans text-gray-700 leading-relaxed">
                  “Seema, a mother of 3, got her first full meal from Babu Ki
                  Rasoi.”
                </p>
              </div>

              {/* Story 2 */}
              <div className="bg-[#F0F3FF] rounded-2xl p-6 md:p-8 text-center md:text-left hover:shadow-xl transition-shadow duration-300 flex flex-col items-center md:items-start">
                <div className="w-20 h-20 rounded-full bg-gray-300 mb-4 md:mb-5 mx-auto md:mx-0 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/p1.png"
                    alt="Rahul&apos;s mother&apos;s story"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <p className="text-base md:text-lg font-open-sans text-gray-700 leading-relaxed">
                  “Rahul’s mother was diagnosed with cancer in Stage 1 because
                  of a CAPP camp.”
                </p>
              </div>

              {/* Story 3 */}
              <div className="bg-[#F0F3FF] rounded-2xl p-6 md:p-8 text-center md:text-left hover:shadow-xl transition-shadow duration-300 flex flex-col items-center md:items-start">
                <div className="w-20 h-20 rounded-full bg-gray-300 mb-4 md:mb-5 mx-auto md:mx-0 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/p1.png"
                    alt="Neha&apos;s story"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <p className="text-base md:text-lg font-open-sans text-gray-700 leading-relaxed">
                  “Neha, 14, goes to school because someone paid her fees.”
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-700 text-lg md:text-xl font-open-sans italic mt-12 md:mt-16 px-6 md:px-20">
            “We never thought someone would care. Anant Aman showed up.”
          </p>
        </div>

        {/* Our Partners in Impact Section */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
              {/* Left Column: Text and Logos */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-platypi font-bold text-black mb-4">
                  Our Partners in Impact
                </h2>
                <p className="text-gray-600 text-base md:text-lg mb-8">
                  They believed in us. And still do.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
                  <div className="flex justify-center items-center p-4 bg-gray-50 rounded-lg h-24 hover:shadow-md transition-shadow">
                    <Image
                      src="/partners/1.png"
                      alt="Amity University Logo"
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-center items-center p-4 bg-gray-50 rounded-lg h-24 hover:shadow-md transition-shadow">
                    <Image
                      src="/partners/2.png"
                      alt="Acropolis Institutions Logo"
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-center items-center p-4 bg-gray-50 rounded-lg h-24 hover:shadow-md transition-shadow">
                    <Image
                      src="/partners/3.png"
                      alt="Symbiosis University Logo"
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-center items-center p-4 bg-gray-50 rounded-lg h-24 hover:shadow-md transition-shadow">
                    <Image
                      src="/partners/4.png"
                      alt="Shri Aurobindo Hospital Logo"
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  {/* Add more partner logos here if needed */}
                </div>
              </div>

              {/* Right Column: Partner Descriptions */}
              <div className="w-full md:w-1/2 bg-[#323E7E] text-white rounded-2xl p-8 md:p-10 flex flex-col justify-center shadow-xl">
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-3"></span>
                    <h3 className="text-xl md:text-2xl font-platypi font-semibold">
                      Amity University
                    </h3>
                  </div>
                  <p className="text-sm md:text-base font-open-sans opacity-90 leading-relaxed">
                    We believe art is a form of activism, emotion, and
                    connection. Through KalaDarpan, we aim to:
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-3"></span>
                    <h3 className="text-xl md:text-2xl font-platypi font-semibold">
                      Acropolis Institution
                    </h3>
                  </div>
                  <p className="text-sm md:text-base font-open-sans opacity-90 leading-relaxed">
                    We believe art is a form of activism, emotion, and
                    connection. Through KalaDarpan, we aim to:
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-3"></span>
                    <h3 className="text-xl md:text-2xl font-platypi font-semibold">
                      Acropolis Institution
                    </h3>{" "}
                    {/* This seems to be a duplicate from the image, adjust if needed */}
                  </div>
                  <p className="text-sm md:text-base font-open-sans opacity-90 leading-relaxed">
                    We believe art is a form of activism, emotion, and
                    connection. Through KalaDarpan, we aim to:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You Can Be Part of the Next Story Section */}
        <div className="py-16 md:py-24 bg-[#F8F9FF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-platypi font-bold text-black mb-6">
              You Can Be Part of the Next Story
            </h2>
            <div className="mb-12">
              <Link
                href="/get-involved" // Updated link
                className="font-open-sans text-base bg-[#E6E8F5] text-[#323E7E] px-10 py-4 rounded-lg inline-block hover:bg-[#d1d5db] transition-colors font-semibold shadow-md"
              >
                You Can
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="relative h-56 sm:h-64">
                  <Image
                    src="/impact-story-1.jpg" // Placeholder - replace with actual image
                    alt="Become a volunteer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <p className="font-open-sans text-center text-gray-700 text-sm md:text-base">
                    Become a volunteer
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="relative h-56 sm:h-64">
                  <Image
                    src="/impact-story-2.jpg" // Placeholder - replace with actual image
                    alt="Sponsor a campaign"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <p className="font-open-sans text-center text-gray-700 text-sm md:text-base">
                    Sponsor a campaign
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="relative h-56 sm:h-64">
                  <Image
                    src="/impact-story-3.jpg" // Placeholder - replace with actual image
                    alt="Start a fundraiser"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <p className="font-open-sans text-center text-gray-700 text-sm md:text-base">
                    Start a fundraiser
                  </p>
                </div>
              </div>

              {/* Text Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-center items-center text-center h-full hover:shadow-xl transition-shadow duration-300">
                <p className="font-platypi text-xl md:text-2xl text-[#323E7E] font-semibold leading-tight">
                  The next number on this page could be because of you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
