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
        <div className="info min-h-[700px] md:h-[90vh] w-full bg-[url(/info.png)] bg-center bg-cover rounded-3xl flex flex-col justify-center -mt-0 md:-mt-10 relative overflow-hidden">
          <div className="info-content w-full h-full flex items-center justify-center px-6 md:px-8 py-10 md:py-0 relative z-10">
            <div className="text-center max-w-3xl">
              <h1 className="text-2xl md:text-5xl font-extrabold font-platypi text-white leading-tight z-20">
                We measure our impact <br /> in smiles, not just statistics.
              </h1>
              <p className="text-base md:text-xl font-open-sans font-normal mt-4 md:mt-5 text-white leading-relaxed">
                You made this possible
              </p>
            </div>
          </div>

          {/* Positioned text at bottom right */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 max-w-md text-white z-10">
            <p className="text-sm md:text-base font-open-sans leading-relaxed text-right">
            Every meal served, every child educated, every life saved  —{" "}
              <span className="font-bold">
                {" "}
                was because someone like you chose to care.
              </span>
            </p>
          </div>
        </div>

        {/* Impact Statistics Section */}
        <div className="py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-platypi font-bold text-black text-center mb-10 md:mb-12">
            Our Impact
          </h2>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-8">
              {/* Statistic 1 */}
              <div className="flex flex-col items-center text-center bg-white rounded-3xl border border-[#E9ECFF] p-6 shadow-sm">
                <div className="mb-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 36H36V30C36 27.8 34.2 26 32 26H16C13.8 26 12 27.8 12 30V36ZM16 30H32V32H16V30ZM22 10C22 8.9 21.1 8 20 8C18.9 8 18 8.9 18 10C18 11.1 18.9 12 20 12C21.1 12 22 11.1 22 10ZM28 8C26.9 8 26 8.9 26 10C26 11.1 26.9 12 28 12C29.1 12 30 11.1 30 10C30 8.9 29.1 8 28 8ZM24 14C22.9 14 22 14.9 22 16C22 17.1 22.9 18 24 18C25.1 18 26 17.1 26 16C26 14.9 25.1 14 24 14Z"
                      fill="#323E7E"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-platypi font-bold text-[#323E7E]">
                  55k +
                </h3>
                <p className="text-base text-[#323E7E] mt-1 font-medium">
                  Meals Served
                </p>
              </div>

              {/* Statistic 2 */}
              <div className="flex flex-col items-center text-center bg-white rounded-3xl border border-[#E9ECFF] p-6 shadow-sm">
                <div className="mb-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.54 16.12C33.18 15.76 32.64 15.76 32.28 16.12L24 24.4L15.72 16.12C15.36 15.76 14.82 15.76 14.46 16.12C14.1 16.48 14.1 17.02 14.46 17.38L23.38 26.3C23.56 26.48 23.78 26.56 24 26.56C24.22 26.56 24.44 26.48 24.62 26.3L33.54 17.38C33.9 17.02 33.9 16.48 33.54 16.12ZM24 6C14.06 6 6 14.06 6 24C6 33.94 14.06 42 24 42C33.94 42 42 33.94 42 24C42 14.06 33.94 6 24 6ZM24 38C16.28 38 10 31.72 10 24C10 16.28 16.28 10 24 10C31.72 10 38 16.28 38 24C38 31.72 31.72 38 24 38Z"
                      fill="#323E7E"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-platypi font-bold text-[#323E7E]">
                  50k +
                </h3>
                <p className="text-base text-[#323E7E] mt-1 font-medium">
                  Lives reached
                </p>
              </div>

              {/* Statistic 3 */}
              <div className="flex flex-col items-center text-center bg-white rounded-3xl border border-[#E9ECFF] p-6 shadow-sm">
                <div className="mb-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36 8H12C9.8 8 8 9.8 8 12V36C8 38.2 9.8 40 12 40H36C38.2 40 40 38.2 40 36V12C40 9.8 38.2 8 36 8ZM36 36H12V12H36V36ZM30 18.34L27.66 16L22 21.66L18.34 18L16 20.34L19.66 24L16 27.66L18.34 30L22 26.34L26.66 31L29 28.66L24.34 24L30 18.34Z"
                      fill="#323E7E"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-platypi font-bold text-[#323E7E]">
                  3.5k +
                </h3>
                <p className="text-base text-[#323E7E] mt-1 font-medium">
                  Kids Educated
                </p>
              </div>

              {/* Statistic 4 */}
              <div className="flex flex-col items-center text-center bg-white rounded-3xl border border-[#E9ECFF] p-6 shadow-sm">
                <div className="mb-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 36H36V30C36 27.8 34.2 26 32 26H16C13.8 26 12 27.8 12 30V36ZM16 30H32V32H16V30ZM22 10C22 8.9 21.1 8 20 8C18.9 8 18 8.9 18 10C18 11.1 18.9 12 20 12C21.1 12 22 11.1 22 10ZM28 8C26.9 8 26 8.9 26 10C26 11.1 26.9 12 28 12C29.1 12 30 11.1 30 10C30 8.9 29.1 8 28 8ZM24 14C22.9 14 22 14.9 22 16C22 17.1 22.9 18 24 18C25.1 18 26 17.1 26 16C26 14.9 25.1 14 24 14Z"
                      fill="#323E7E"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-platypi font-bold text-[#323E7E]">
                  1.5k +
                </h3>
                <p className="text-base text-[#323E7E] mt-1 font-medium">
                  Cancer detections
                </p>
              </div>

              {/* Statistic 5 */}
              <div className="flex flex-col items-center text-center bg-white rounded-3xl border border-[#E9ECFF] p-6 shadow-sm">
                <div className="mb-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.54 16.12C33.18 15.76 32.64 15.76 32.28 16.12L24 24.4L15.72 16.12C15.36 15.76 14.82 15.76 14.46 16.12C14.1 16.48 14.1 17.02 14.46 17.38L23.38 26.3C23.56 26.48 23.78 26.56 24 26.56C24.22 26.56 24.44 26.48 24.62 26.3L33.54 17.38C33.9 17.02 33.9 16.48 33.54 16.12ZM24 6C14.06 6 6 14.06 6 24C6 33.94 14.06 42 24 42C33.94 42 42 33.94 42 24C42 14.06 33.94 6 24 6ZM24 38C16.28 38 10 31.72 10 24C10 16.28 16.28 10 24 10C31.72 10 38 16.28 38 24C38 31.72 31.72 38 24 38Z"
                      fill="#323E7E"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-platypi font-bold text-[#323E7E]">
                  100 +
                </h3>
                <p className="text-base text-[#323E7E] mt-1 font-medium">
                  Awareness
                  <br />
                  camps
                </p>
              </div>

              {/* Statistic 6 */}
              <div className="flex flex-col items-center text-center bg-white rounded-3xl border border-[#E9ECFF] p-6 shadow-sm">
                <div className="mb-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36 8H12C9.8 8 8 9.8 8 12V36C8 38.2 9.8 40 12 40H36C38.2 40 40 38.2 40 36V12C40 9.8 38.2 8 36 8ZM36 36H12V12H36V36ZM30 18.34L27.66 16L22 21.66L18.34 18L16 20.34L19.66 24L16 27.66L18.34 30L22 26.34L26.66 31L29 28.66L24.34 24L30 18.34Z"
                      fill="#323E7E"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-platypi font-bold text-[#323E7E]">
                  10k +
                </h3>
                <p className="text-base text-[#323E7E] mt-1 font-medium">
                  Lives
                  <br />
                  changed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Year-Wise Timeline Section */}
        <div className="py-12 md:py-16 bg-[#F0F3FF] rounded-3xl my-8 md:my-10 md:mx-auto">
          <h2 className="text-3xl md:text-4xl font-platypi font-bold text-black text-center mb-10 md:mb-12">
            Year-Wise <span className="text-[#4A5AAA]">Timeline</span>
          </h2>

          {/* Desktop Timeline - Hidden on Mobile */}
          <div className="hidden md:block relative">
            {/* Horizontal Timeline Line - visible on larger screens */}
            <div
              className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 mt-16"
              style={{ top: "calc(50% - 30px)" }}
            ></div>

            {/* Timeline Items Container */}
            <div className="flex flex-row justify-between items-start relative space-x-4">
              {/* Timeline Item 1 */}
              <div className="flex flex-col items-center text-center w-1/5 relative px-2 group">
                <div className="bg-[#E0E5FF] p-4 mb-5 rounded-full w-full">
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Cancer awareness programs launched in rural MP
                  </p>
                </div>
                <div className="bg-[#4A5AAA] h-5 w-5 rounded-full mb-3 z-10 border-2 border-white"></div>
                <p className="text-sm font-semibold text-[#323E7E]">
                  Year 2022
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex flex-col items-center text-center w-1/5 relative px-2 group">
                <div className="bg-[#E0E5FF] p-4 mb-5 rounded-full w-full">
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    COVID lockdown: 10,000+ ration kits distributed.
                  </p>
                </div>
                <div className="bg-[#4A5AAA] h-5 w-5 rounded-full mb-3 z-10 border-2 border-white"></div>
                <p className="text-sm font-semibold text-[#323E7E]">
                  Year 2024
                </p>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex flex-col items-center text-center w-1/5 relative px-2 group">
                <div className="bg-[#E0E5FF] p-4 mb-5 rounded-full w-full">
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Anant Aman SWS was born. Started with education drives in
                    slums.
                  </p>
                </div>
                <div className="bg-[#4A5AAA] h-5 w-5 rounded-full mb-3 z-10 border-2 border-white"></div>
                <p className="text-sm font-semibold text-[#323E7E]">
                  Year 2013
                </p>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex flex-col items-center text-center w-1/5 relative px-2 group">
                <div className="bg-[#E0E5FF] p-4 mb-5 rounded-full w-full">
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Cancer awareness programs launched in rural MP
                  </p>
                </div>
                <div className="bg-[#4A5AAA] h-5 w-5 rounded-full mb-3 z-10 border-2 border-white"></div>
                <p className="text-sm font-semibold text-[#323E7E]">
                  Year 2015
                </p>
              </div>

              {/* Timeline Item 5 */}
              <div className="flex flex-col items-center text-center w-1/5 relative px-2 group">
                <div className="bg-[#E0E5FF] p-4 mb-5 rounded-full w-full">
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Cancer awareness programs in rural MP
                  </p>
                </div>
                <div className="bg-[#4A5AAA] h-5 w-5 rounded-full mb-3 z-10 border-2 border-white"></div>
                <p className="text-sm font-semibold text-[#323E7E]">
                  Year 2020
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Hidden on Desktop */}
          <div className="md:hidden px-4">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300"></div>
              
              {/* Mobile Timeline Items */}
              <div className="space-y-8">
                {/* Mobile Timeline Item 1 */}
                <div className="flex items-start">
                  <div className="bg-[#4A5AAA] h-5 w-5 rounded-full z-10 border-2 border-white mt-4 mr-4 relative left-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#323E7E] mb-2">Year 2022</p>
                    <div className="bg-[#E0E5FF] p-4 rounded-lg">
                      <p className="text-[13px] text-gray-600 leading-relaxed">
                        Cancer awareness programs launched in rural MP
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Timeline Item 2 */}
                <div className="flex items-start">
                  <div className="bg-[#4A5AAA] h-5 w-5 rounded-full z-10 border-2 border-white mt-4 mr-4 relative left-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#323E7E] mb-2">Year 2024</p>
                    <div className="bg-[#E0E5FF] p-4 rounded-lg">
                      <p className="text-[13px] text-gray-600 leading-relaxed">
                        COVID lockdown: 10,000+ ration kits distributed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Timeline Item 3 */}
                <div className="flex items-start">
                  <div className="bg-[#4A5AAA] h-5 w-5 rounded-full z-10 border-2 border-white mt-4 mr-4 relative left-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#323E7E] mb-2">Year 2013</p>
                    <div className="bg-[#E0E5FF] p-4 rounded-lg">
                      <p className="text-[13px] text-gray-600 leading-relaxed">
                        Anant Aman SWS was born. Started with education drives in slums.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Timeline Item 4 */}
                <div className="flex items-start">
                  <div className="bg-[#4A5AAA] h-5 w-5 rounded-full z-10 border-2 border-white mt-4 mr-4 relative left-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#323E7E] mb-2">Year 2015</p>
                    <div className="bg-[#E0E5FF] p-4 rounded-lg">
                      <p className="text-[13px] text-gray-600 leading-relaxed">
                        Cancer awareness programs launched in rural MP
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Timeline Item 5 */}
                <div className="flex items-start">
                  <div className="bg-[#4A5AAA] h-5 w-5 rounded-full z-10 border-2 border-white mt-4 mr-4 relative left-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#323E7E] mb-2">Year 2020</p>
                    <div className="bg-[#E0E5FF] p-4 rounded-lg">
                      <p className="text-[13px] text-gray-600 leading-relaxed">
                        Cancer awareness programs in rural MP
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-10">
              <Link
                href="/resources"
                className="font-platypi text-sm md:text-base bg-white text-[#323E7E] px-6 py-2 rounded-full inline-block shadow-md hover:bg-gray-100 transition-colors duration-300 border border-gray-300"
              >
                Download Annual Report
              </Link>
            </div>
          </div>
        </div>

        {/* Faces Behind the Numbers Section */}
        <div className="py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-platypi font-bold text-black text-center mb-10 md:mb-12">
            Faces Behind the <span className="text-[#4A5AAA]">Numbers</span>
          </h2>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Story 1 */}
              <div className="bg-[#F5F7FA] rounded-2xl p-6 flex items-end h-96">
                <p className="text-base md:text-lg font-medium leading-relaxed">
                  <span className="text-[#4A5AAA] font-bold">Seema</span>, a
                  mother of 3, got her first full meal from Babu Ki Rasoi.
                </p>
              </div>

              {/* Story 2 */}
              <div className="bg-[#F5F7FA] rounded-2xl p-6 flex items-end h-96">
                <p className="text-base md:text-lg font-medium leading-relaxed">
                  <span className="text-[#4A5AAA] font-bold">
                    Rahul's mother
                  </span>{" "}
                  was diagnosed with cancer in Stage 1 because of a CAPP camp.
                </p>
              </div>

              {/* Story 3 */}
              <div className="bg-[#F5F7FA] rounded-2xl flex items-end p-6 h-96">
                <p className="text-base md:text-lg font-medium leading-relaxed">
                  <span className="text-[#4A5AAA] font-bold">Neha</span>, 14,
                  goes to school because someone paid her fees.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-700 text-base md:text-lg font-open-sans italic mt-8 md:mt-10 px-4 md:px-16">
            "We never thought someone would care. Anant Aman showed up."
          </p>
        </div>

        {/* Our Partners in Impact Section */}
        <div className="py-12 md:py-16">
          <div className="px-2 md:px-3">
            <div className="flex flex-col md:flex-row gap-3 items-stretch">
              {/* Left Column: Text and Logos */}
              <div className="w-full md:w-1/2 bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-platypi font-bold text-[#323E7E] mb-2">
                  Our Partners in Impact
                </h2>
                <p className="text-gray-600 text-base mb-6 md:mb-8">
                  They believed in us. And still do.
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-6 items-center">
                  <div className="flex justify-center items-center p-3 md:p-4 bg-white rounded-lg border border-gray-100 h-16 md:h-20">
                    <Image
                      src="/partners/1.png"
                      alt="Amity University Logo"
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-center items-center p-3 md:p-4 bg-white rounded-lg border border-gray-100 h-16 md:h-20">
                    <Image
                      src="/partners/2.png"
                      alt="Acropolis Institutions Logo"
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-center items-center p-3 md:p-4 bg-white rounded-lg border border-gray-100 h-16 md:h-20">
                    <Image
                      src="/partners/3.png"
                      alt="Symbiosis University Logo"
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-center items-center p-3 md:p-4 bg-white rounded-lg border border-gray-100 h-16 md:h-20">
                    <Image
                      src="/partners/4.png"
                      alt="Medicaps University Logo"
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Partner Descriptions */}
              <div className="w-full md:w-1/2 bg-[#323E7E] text-white rounded-xl p-6 md:p-8 flex flex-col justify-center">
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center mb-2">
                    <span className="w-3 h-3 md:w-4 md:h-4 bg-blue-200 rounded-full mr-3"></span>
                    <h3 className="text-lg md:text-xl font-platypi font-semibold">
                      Amity University
                    </h3>
                  </div>
                  <p className="text-sm font-open-sans opacity-90 leading-relaxed ml-6 md:ml-7">
                    We believe art is a form of activism, emotion, and
                    connection. Through KalaDarpan, we aim to:
                  </p>
                </div>
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center mb-2">
                    <span className="w-3 h-3 md:w-4 md:h-4 bg-blue-200 rounded-full mr-3"></span>
                    <h3 className="text-lg md:text-xl font-platypi font-semibold">
                      Acropolis Institution
                    </h3>
                  </div>
                  <p className="text-sm font-open-sans opacity-90 leading-relaxed ml-6 md:ml-7">
                    We believe art is a form of activism, emotion, and
                    connection. Through KalaDarpan, we aim to:
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="w-3 h-3 md:w-4 md:h-4 bg-gray-400 rounded-full mr-3"></span>
                    <h3 className="text-lg md:text-xl font-platypi font-semibold text-gray-400">
                      Acropolis Institution
                    </h3>
                  </div>
                  <p className="text-sm font-open-sans opacity-0 leading-relaxed ml-6 md:ml-7">
                    We believe art is a form of activism, emotion, and
                    connection. Through KalaDarpan, we aim to:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You Can Be Part of the Next Story Section */}
        <div className="py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-platypi font-bold mb-4 md:mb-6">
              You Can Be Part of the{" "}
              <span className="text-[#323E7E]">Next Story</span>
            </h2>
            <div className="mb-8 md:mb-10">
              <Link
                href="/get-involved"
                className="font-open-sans text-sm bg-[#E6E8F5] text-[#323E7E] px-5 py-2 md:px-6 rounded-full inline-block hover:bg-[#d1d5eb] transition-colors font-medium"
              >
                You can
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
              {/* Card 1 */}
              <div className="bg-white rounded-lg md:rounded-xl overflow-hidden border border-gray-100 flex flex-col">
                <div className="relative h-48 md:h-60 lg:h-52">
                  <Image
                    src="/wwd.png"
                    alt="Become a volunteer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col justify-center">
                  <p className="font-open-sans text-center text-gray-700 text-sm">
                    Become a volunteer
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg md:rounded-xl overflow-hidden border border-gray-100 flex flex-col">
                <div className="relative h-48 md:h-60 lg:h-52">
                  <Image
                    src="/wwd.png"
                    alt="Sponsor a campaign"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col justify-center">
                  <p className="font-open-sans text-center text-gray-700 text-sm">
                    Sponsor a campaign
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg md:rounded-xl overflow-hidden border border-gray-100 flex flex-col">
                <div className="relative h-48 md:h-60 lg:h-52">
                  <Image
                    src="/wwd.png"
                    alt="Start a fundraiser"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col justify-center">
                  <p className="font-open-sans text-center text-gray-700 text-sm">
                    Start a fundraiser
                  </p>
                </div>
              </div>

              {/* Text Card */}
              <div className="bg-white rounded-lg md:rounded-xl border border-gray-100 p-4 md:p-6 flex flex-col justify-center items-center text-center h-full">
                <p className="font-platypi text-base md:text-lg text-[#323E7E] font-semibold leading-tight">
                  The next number on this page could be because of you.
                </p>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}
