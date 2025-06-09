"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function WhoWeAre() {
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

        <div className="info min-h-[700px] md:h-[90vh] w-full bg-[url(/wwr.png)] bg-center bg-cover rounded-3xl flex flex-col justify-center -mt-10">
          <div className="info-content w-full h-full flex items-center justify-center px-6 md:px-8 py-10 md:py-0">
            <div className="text-center">
              <h1 className="text-2xl md:text-5xl font-extrabold font-platypi text-white leading-tight">
                We were born from pain. <br /> And built from hope.
              </h1>
              <p className="text-base md:text-2xl font-open-sans font-normal mt-4 md:mt-5 text-white leading-relaxed">
                And these are just the known stories. So many others suffer.{" "}
                <br className="hidden md:block" /> Without food. Without care. Without anyone knowing.
              </p>
            </div>
          </div>
        </div>

        {/* What We Stand For Section */}
        <div className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-platypi font-bold text-black text-center mb-10">
            What We Stand For
          </h2>
          <p className="text-base md:text-lg font-open-sans text-center max-w-3xl mx-auto mb-12">
            We work in the areas where help is most needed and least available. Our core mission is simple yet urgent.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-20">
            {/* Card 1 */}
            <div className="rounded-2xl overflow-hidden shadow-md relative">
              <div className="relative h-48 md:h-64">
                <Image 
                  src="/wwsf1.png" 
                  alt="Feed the hungry" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-top pt-5 justify-center">
                  <h3 className="text-lg md:text-xl font-platypi font-bold text-white px-4 text-center">
                    Feed the hungry
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="rounded-2xl overflow-hidden shadow-md relative">
              <div className="relative h-48 md:h-64">
                <Image 
                  src="/wwsf2.png" 
                  alt="Educate the forgotten" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-top pt-5 justify-center">
                  <h3 className="text-lg md:text-xl font-platypi font-bold text-white px-4 text-center">
                    Educate the forgotten
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="rounded-2xl overflow-hidden shadow-md relative">
              <div className="relative h-48 md:h-64">
                <Image 
                  src="/wwsf3.png" 
                  alt="Prevent what can be cured" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-top pt-5 justify-center">
                  <h3 className="text-lg md:text-xl font-platypi font-bold text-white px-4 text-center">
                    Prevent what can be cured
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="rounded-2xl overflow-hidden shadow-md relative">
              <div className="relative h-48 md:h-64">
                <Image 
                  src="/wwsf4.png" 
                  alt="Empower the youth to care" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-top pt-5 justify-center">
                  <h3 className="text-lg md:text-xl font-platypi font-bold text-white px-4 text-center">
                    Empower the youth to care
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* We Believe Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          {/* Left Column */}
          <div className="bg-[#F8F9FF] rounded-3xl p-8 md:p-12 flex flex-col justify-center text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-platypi font-bold mb-6">
              We believe <span className="text-[#323E7E]">real change isn&apos;t</span> <br className="hidden md:block" />
              made by policies alone
            </h2>
            <p className="text-base md:text-lg font-open-sans text-[#323E7E] mb-8">
              It&apos;s made by people who care enough to act. That&apos;s <br className="hidden md:block" />
              why we&apos;ve been on the ground, every single day, <br className="hidden md:block" />
              for over a decade.
            </p>
            <div>
              <Link
                href="/our-impact"
                className="font-platypi text-sm md:text-base bg-white border border-gray-200 px-8 py-3 rounded-full inline-block hover:shadow-md transition-all"
              >
                Our Impact
              </Link>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-platypi font-bold text-[#323E7E] mb-4">
              We&apos;re registered under <br className="hidden md:block" />
              12A, 80G, Niti Aayog & CSR-1.
            </h2>
            <p className="text-base md:text-lg font-open-sans text-gray-700 mb-8">
              Because transparency matters — <br className="hidden md:block" />
              and so does trust.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                <Image src="/partners/1.png" alt="Amity University" width={120} height={60} className="object-contain" />
              </div>
              <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                <Image src="/partners/2.png" alt="Acropolis" width={120} height={60} className="object-contain" />
              </div>
              <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                <Image src="/partners/3.png" alt="Symbiosis" width={120} height={60} className="object-contain" />
              </div>
              <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                <Image src="/partners/4.png" alt="Medi-Caps University" width={120} height={60} className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Founder's Story Section */}
        <div className="py-12 md:py-16">
          <div className="bg-[#E6DDC9] rounded-3xl p-6 md:p-10">          
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="rounded-2xl overflow-hidden">
                  <Image 
                    src="/founder.png" 
                    alt="Founder" 
                    width={400} 
                    height={500} 
                    className="object-cover w-full"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-platypi font-bold text-black mb-4">
              Founder&apos;s Story
            </h2>
            <p className="text-lg md:text-xl font-platypi italic text-[#323E7E] mb-6">
              It began with a vision — and became a movement.
            </p>
                <p className="text-base md:text-lg font-open-sans mb-4">
                  In 2013, Mr. Hemant Agarwal was walking home when he saw 7 children hungry, often scrounging for leftover food.
                </p>
                <p className="text-base md:text-lg font-open-sans mb-4">
                  Moved by their plight, he didn&apos;t just help them. He rolled up his sleeves and created Anant Aman Social Welfare Society — a home for hope, action, and dignity.
                </p>
                <p className="text-base md:text-lg font-open-sans mb-4">
                  Born in a small village in Madhya Pradesh, his belief — <span className="italic">"If not us, who?"</span> — still drives every child fed, every life touched, and every hand held today.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the People Section */}
        <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Person 1 */}
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="relative h-[450px]">
                  <Image 
                    src="/founder.png" 
                    alt="Mr. Hemant Gupta" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-platypi font-bold mb-1">Mr. Hemant Gupta</h3>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full py-1 px-4 inline-block mb-4">
                    <p className="text-sm font-open-sans">Founder & President</p>
                  </div>
                  <p className="text-base font-open-sans italic">"Compassion without action is wasted."</p>
                </div>
              </div>
              
              {/* Person 2 */}
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="relative h-[450px]">
                  <Image 
                    src="/partners/2.png" 
                    alt="Mr. Bhushan Pungliya" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-platypi font-bold mb-1">Mr. Bhushan Pungliya</h3>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full py-1 px-4 inline-block mb-4">
                    <p className="text-sm font-open-sans">Joint Secretary</p>
                  </div>
                  <p className="text-base font-open-sans italic">"Every life deserves a chance."</p>
                </div>
              </div>
              
              {/* Person 3 - Volunteers */}
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="relative h-[450px]">
                  <Image 
                    src="/join.png" 
                    alt="Our Volunteers" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-platypi font-bold mb-1">Our Volunteers</h3>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full py-1 px-4 inline-block mb-4">
                    <p className="text-sm font-open-sans">The heart & hands of our work (that's you!)</p>
                  </div>
                  <p className="text-base font-open-sans italic">"Join us, change lives."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}