"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function CancerAwarenessProgram() {
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
      <div className="px-1.5 md:px-1.5">
        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>

        {/* Hero Section */}
        <div className="info min-h-[700px] md:h-[90vh] w-full bg-[url(/capp.png)] bg-center bg-cover rounded-3xl flex flex-col justify-center -mt-0 md:-mt-10 relative overflow-hidden">
          <div className="info-content w-full h-full flex items-center justify-center px-6 md:px-8 py-10 md:py-0 relative z-10">
            <div className="text-center max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-extrabold font-platypi text-white leading-tight z-20">
                Because awareness should come before diagnosis.
              </h1>
              <p className="text-base md:text-xl font-open-sans font-normal mt-4 md:mt-5 text-white leading-relaxed">
                Fighting Cancer with <span className="font-extrabold">Early Awareness</span>
              </p>
            </div>
          </div>
          
          {/* Positioned text at bottom right */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 max-w-md text-white z-10">
            <p className="text-sm md:text-base font-open-sans leading-relaxed text-right">
              Every year in India, over <span className="font-semibold">14 lakh people are diagnosed with cancer</span>. 10 lakh die — many because it was detected too late. It&apos;s our fight to change that.
            </p>
          </div>
        </div>

        {/* What We Do & Why It Matters Section */}
        <div className="py-10 md:py-16">
          <div className="flex flex-col md:flex-row gap-2">
            {/* What We Do */}
            <div className="w-full md:w-1/2 bg-[#F8F9FF] rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-platypi font-bold mb-8">
                What we <span className="text-[#323E7E]">Do:</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#323E7E] rounded-full h-6 w-6 mt-1 flex items-center justify-center">
                    <div className="bg-white rounded-full h-2.5 w-2.5"></div>
                  </div>
                  <p className="text-sm md:text-base font-open-sans">
                    Free health camps for early detection
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#323E7E] rounded-full h-5 w-5 mt-1 flex items-center justify-center">
                    <div className="bg-white rounded-full h-2 w-2"></div>
                  </div>
                  <p className="text-sm md:text-base font-open-sans">
                    Awareness workshops with medical professionals
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#323E7E] rounded-full h-5 w-5 mt-1 flex items-center justify-center">
                    <div className="bg-white rounded-full h-2 w-2"></div>
                  </div>
                  <p className="text-sm md:text-base font-open-sans">
                    One-on-one support and referral to trusted hospitals
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#323E7E] rounded-full h-5 w-5 mt-1 flex items-center justify-center">
                    <div className="bg-white rounded-full h-2 w-2"></div>
                  </div>
                  <p className="text-sm md:text-base font-open-sans">
                    Survivor stories to inspire courage and early action
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
                  95% of cancer deaths in India happen due to late diagnosis
                </p>
                
                <p className="text-sm md:text-base font-open-sans text-gray-700">
                  Lack of awareness is as deadly as the disease itself
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact So Far Section */}
        <div className="py-10 md:py-16">
          <h2 className="text-2xl md:text-4xl font-platypi font-bold text-black mb-12 text-center">
            Impact <span className="text-[#323E7E] italic">So far</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4">
            {/* Impact 1 */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-60 md:h-80">
                <Image 
                  src="/cc1.png" 
                  alt="100+ awareness camps" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-8 text-white">
                  <p className="text-sm md:text-2xl font-bold font-open-sans">100+ awareness camps</p>
                </div>
              </div>
            </div>
            
            {/* Impact 2 */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-60 md:h-80">
                <Image 
                  src="/cc2.png" 
                  alt="1,500+ early detections" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-8 text-white">
                  <p className="text-sm md:text-2xl font-bold font-open-sans">1,500+ early detections</p>
                </div>
              </div>
            </div>
            
            {/* Impact 3 */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-60 md:h-80">
                <Image 
                  src="/cc3.png" 
                  alt="50,000+ people reached" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-8 text-white">
                  <p className="text-sm md:text-2xl font-bold font-open-sans">50,000+ people reached</p>
                </div>
              </div>
            </div>

            {/* Impact 4 */}
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-60 md:h-80">
                <Image 
                  src="/ccc4.png" 
                  alt="10,000+ given emotional & medical guidance" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-8 text-white">
                  <p className="text-sm md:text-xl font-bold font-open-sans">10,000+ given emotional & medical guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial and How You Can Help Section */}
        <div className="py-12 md:py-20 px-1">
          <div className="rounded-3xl overflow-hidden">
            <div className="flex gap-4 flex-col md:flex-row">
              {/* Left side - Testimonial and How You Can Help */}
              <div className="bg-[#F0F3FF] w-full md:w-1/2 p-8 md:p-12 rounded-3xl">
                {/* Testimonial */}
                <div className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-platypi font-bold text-[#323E7E] mb-6 leading-tight">
                    &quot;Because of the free camp, my mother got diagnosed in stage 1. We didn&apos;t even know she had cancer. You saved her.
                  </h2>
                  <p className="text-lg font-medium text-gray-700 mb-2">Rahul, 21</p>
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
                        Volunteer at your school / college / community
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-[#323E7E] rounded-full h-6 w-6 mt-1 flex items-center justify-center flex-shrink-0">
                        <div className="bg-white rounded-full h-2.5 w-2.5"></div>
                      </div>
                      <p className="text-base md:text-lg font-open-sans">
                        Sponsor a workshop or awareness camp
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-[#323E7E] rounded-full h-6 w-6 mt-1 flex items-center justify-center flex-shrink-0">
                        <div className="bg-white rounded-full h-2.5 w-2.5"></div>
                      </div>
                      <p className="text-base md:text-lg font-open-sans">
                        Share our resources on social media
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/"
                      className="font-platypi text-sm md:text-base bg-white text-[#323E7E] px-6 py-2.5 rounded-full inline-block hover:bg-gray-100 transition-colors duration-300 shadow-sm"
                    >
                      Write a CAPP Testimonial
                    </Link>
                    <Link
                      href="/"
                      className="font-platypi text-sm md:text-base bg-white text-[#323E7E] px-6 py-2.5 rounded-full inline-block hover:bg-gray-100 transition-colors duration-300 shadow-sm"
                    >
                      Contribute to Early Diagnosis
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Right side - Image */}
              <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                <Image 
                  src="/capp2.png" 
                  alt="Cancer awareness program" 
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