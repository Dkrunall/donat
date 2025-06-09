"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function BabuKiRasoi() {
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
        <div className="info min-h-[700px] md:h-[90vh] w-full bg-[url(/bkr.png)] bg-center bg-cover rounded-3xl flex flex-col justify-center -mt-10 relative overflow-hidden">
          <div className="info-content w-full h-full flex items-center justify-center px-6 md:px-8 py-10 md:py-0 relative z-10">
            <div className="text-center max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold font-platypi text-white leading-tight z-20">
                One plate. One purpose.
              </h1>
              <p className="text-base md:text-xl font-open-sans font-normal mt-4 md:mt-5 text-white leading-relaxed">
                Launched on <span className="font-extrabold">Guru Purnima - July 13, 2013</span>, Babu Ki Rasoi began with a simple question: <span className="font-extrabold">"Why should anyone sleep hungry?"</span>
              </p>
            </div>
          </div>
          
          {/* Positioned text at bottom right */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 max-w-md text-white z-10">
            <p className="text-sm md:text-base font-open-sans leading-relaxed text-right">
              Babu Ki Rasoi started as a <span className="font-semibold">humble initiative</span> but has <span className="font-semibold">grown to serve 45,000+ meals</span>. When people are hungry, they don&apos;t need words — they need food. This is not just food. This is <span className="font-semibold">dignity on a plate</span>.
            </p>
          </div>
        </div>

        {/* How It Works & Why It Matters Section */}
        <div className="py-10 md:py-16 px-6 md:px-20">
          <div className="flex flex-col md:flex-row gap-8">
            {/* How It Works */}
            <div className="w-full md:w-1/2 bg-[#F8F9FF] rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-platypi font-bold mb-8">
                How It <span className="text-[#323E7E]">Works</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#323E7E] rounded-full h-6 w-6 mt-1 flex items-center justify-center">
                    <div className="bg-white rounded-full h-2.5 w-2.5"></div>
                  </div>
                  <p className="text-sm md:text-base font-open-sans">
                    Daily meal distribution in urban slums and underserved communities
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#323E7E] rounded-full h-5 w-5 mt-1 flex items-center justify-center">
                    <div className="bg-white rounded-full h-2 w-2"></div>
                  </div>
                  <p className="text-sm md:text-base font-open-sans">
                    Fresh, nutritious, simple food
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#323E7E] rounded-full h-5 w-5 mt-1 flex items-center justify-center">
                    <div className="bg-white rounded-full h-2 w-2"></div>
                  </div>
                  <p className="text-sm md:text-base font-open-sans">
                    Fully managed by Anant Aman volunteers
                  </p>
                </div>
              </div>
            </div>
            
            {/* Why It Matters */}
            <div className="w-full md:w-1/2 border border-[#E3E3E3] rounded-3xl p-8 md:p-10 shadow-sm text-center">
              <div className="text-center mb-6">
                <div className="text-yellow-400 text-5xl">★</div>
                <h2 className="text-xl md:text-2xl font-platypi font-bold">
                  Why It <span className="text-[#323E7E]">Matters</span>
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-sm md:text-base font-open-sans text-gray-700">
                  Hunger isn&apos;t just physical — it&apos;s emotional, it&apos;s psychological, it&apos;s dehumanizing.
                </p>
                
                <p className="text-sm md:text-base font-open-sans text-gray-700">
                  Every meal we serve = one less child begging, one more elder smiling, one more family feeling seen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Campaigns That Create Change Section */}
        <div className="py-10 md:py-16 px-6 md:px-20">
          <h2 className="text-2xl md:text-4xl font-platypi font-bold text-black mb-12 text-center">
            Campaigns That <span className="text-[#323E7E] italic">Create Change</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Campaign 1 */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-60 md:h-80">
                <Image 
                  src="/cc1.png" 
                  alt="55,000+ meals served" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-8 text-white">
                  <p className="text-sm md:text-2xl font-bold font-open-sans">55,000+ meals served</p>
                </div>
              </div>
            </div>
            
            {/* Campaign 2 */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-60 md:h-80">
                <Image 
                  src="/cc2.png" 
                  alt="1000+ families supported" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-8 text-white">
                  <p className="text-sm md:text-2xl font-bold font-open-sans">1000+ families supported</p>
                </div>
              </div>
            </div>
            
            {/* Campaign 3 */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-60 md:h-80">
                <Image 
                  src="/cc3.png" 
                  alt="2+ years of consistent operations" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-8 text-white">
                  <p className="text-sm md:text-2xl font-bold font-open-sans">2+ years of consistent operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How You Can Help Section */}
        <div className="py-12 md:py-20 px-1">
          <div className="rounded-3xl overflow-hidden">
            <div className="flex gap-4 flex-col md:flex-row">
              {/* Left side - Testimonial and How You Can Help */}
              <div className="bg-[#F0F3FF] w-full md:w-1/2 p-8 md:p-12 rounded-3xl">
                {/* Testimonial */}
                <div className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-platypi font-bold text-[#323E7E] mb-6 leading-tight">
                    "We hadn&apos;t eaten in two days. Then someone said, &apos;Babu Ki Rasoi is coming.&apos; That was the first full meal my children had that week.
                  </h2>
                  <p className="text-lg font-medium text-gray-700 mb-2">Seema, mother of 3</p>
                  <span className="inline-block bg-[#E6E9F5] text-[#323E7E] text-sm font-medium px-4 py-1 rounded-full">Real Story</span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-platypi font-bold text-black mb-6">How You Can Help:</h3>                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#323E7E] rounded-full h-6 w-6 mt-1 flex items-center justify-center flex-shrink-0">
                        <div className="bg-white rounded-full h-2.5 w-2.5"></div>
                      </div>
                      <p className="text-base md:text-lg font-open-sans">
                        ₹30 = 1 full meal
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-[#323E7E] rounded-full h-6 w-6 mt-1 flex items-center justify-center flex-shrink-0">
                        <div className="bg-white rounded-full h-2.5 w-2.5"></div>
                      </div>
                      <p className="text-base md:text-lg font-open-sans">
                        ₹900 = Meals for 1 person for 1 month
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-[#323E7E] rounded-full h-6 w-6 mt-1 flex items-center justify-center flex-shrink-0">
                        <div className="bg-white rounded-full h-2.5 w-2.5"></div>
                      </div>
                      <p className="text-base md:text-lg font-open-sans">
                        ₹5,000 = Community meal distribution drive
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/"
                      className="font-platypi text-sm md:text-base bg-white text-[#323E7E] px-6 py-2.5 rounded-full inline-block hover:bg-gray-100 transition-colors duration-300 shadow-sm"
                    >
                      Sponsor a Meal
                    </Link>
                    <Link
                      href="/"
                      className="font-platypi text-sm md:text-base bg-white text-[#323E7E] px-6 py-2.5 rounded-full inline-block hover:bg-gray-100 transition-colors duration-300 shadow-sm"
                    >
                      Volunteer in BKR
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Right side - Image */}
              <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                <Image 
                  src="/ccc4.png" 
                  alt="Child with food" 
                  fill 
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}