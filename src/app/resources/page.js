"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Resources() {
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
        <div className="info min-h-[400px] md:h-[60vh] w-full rounded-3xl flex flex-col justify-center -mt-10">
          <div className="info-content w-full h-full flex items-center justify-center px-6 md:px-8 py-10 md:py-0">
            <div className="text-center">
              <h1 className="text-2xl md:text-5xl font-extrabold font-platypi text-[#323E7E] leading-tight">
                Tools, materials, and guides to <br /> help you do better.
              </h1>
              <p className="text-base md:text-xl font-open-sans font-normal mt-4 md:mt-5 text-[#323E7E] leading-relaxed max-w-3xl mx-auto">
                Whether you&apos;re a volunteer, educator, NGO, or curious citizen — here&apos;s everything you need to learn, support, and create impact.
              </p>
            </div>
          </div>
        </div>

        {/* Awareness Materials Section */}
        <div className="py-10 md:py-14 px-6 md:px-20 bg-[#F8F9FF] rounded-3xl my-6">
          <h2 className="text-2xl md:text-3xl font-platypi font-bold text-black text-center mb-10">
            Awareness Materials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Material 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Cancer Early Detection Poster
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                PDF format, 5MB, Size: 8.5in x 11in
              </p>
              <Link
                href="/"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
              >
                Download PDF
              </Link>
            </div>
            
            {/* Material 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Cancer Early Detection Poster
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                PDF format, 5MB, Size: 8.5in x 11in
              </p>
              <Link
                href="/"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
              >
                Download PDF
              </Link>
            </div>
            
            {/* Material 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Cancer Early Detection Poster
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                PDF format, 5MB, Size: 8.5in x 11in
              </p>
              <Link
                href="/"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
              >
                Download PDF
              </Link>
            </div>
          </div>
        </div>

        {/* Volunteer Toolkit Section */}
        <div className="py-10 md:py-14 px-6 md:px-20 bg-[#F8F9FF] rounded-3xl my-6">
          <h2 className="text-2xl md:text-3xl font-platypi font-bold text-black text-center mb-10">
            Volunteer Toolkit
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Toolkit 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Cancer Early Detection Poster
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                PDF format, 5MB, Size: 8.5in x 11in
              </p>
              <Link
                href="/"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
              >
                Download PDF
              </Link>
            </div>
            
            {/* Toolkit 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Cancer Early Detection Poster
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                PDF format, 5MB, Size: 8.5in x 11in
              </p>
              <Link
                href="/"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
              >
                Download PDF
              </Link>
            </div>
            
            {/* Toolkit 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Cancer Early Detection Poster
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                PDF format, 5MB, Size: 8.5in x 11in
              </p>
              <Link
                href="/"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
              >
                Download PDF
              </Link>
            </div>
          </div>
        </div>

        {/* Workshop Slides Section */}
        <div className="py-10 md:py-14 px-6 md:px-20 my-6">
          <h2 className="text-2xl md:text-3xl font-platypi font-bold text-black text-center mb-10">
            Volunteer Toolkit
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Workshop 1 */}
            <div className="bg-[#F8F9FF] rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Workshop Slides: Cancer Awareness in Schools
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                Simplified, engaging slides with volunteer training (soon).
              </p>
              <Link
                href="/"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
              >
                Download PDF
              </Link>
            </div>
            
            {/* Workshop 2 */}
            <div className="bg-[#F8F9FF] rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Join FAA Club (Youth Kit)
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                What FAA is, why it matters, and how to start a unit in your college.
              </p>
              <Link
                href="/"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
              >
                Download Kit
              </Link>
            </div>
          </div>
        </div>

        {/* CSR, NGOs & Institutions Section */}
        <div className="py-10 md:py-14 px-6 md:px-20 bg-[#F8F9FF] rounded-3xl my-6">
          <h2 className="text-2xl md:text-3xl font-platypi font-bold text-black text-center mb-10">
            CSR, NGOs & Institutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CSR 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Anant Aman CSR Proposal Kit
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                Complete proposal toolkit for institutional partnerships.
              </p>
              <Link
                href="/"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
              >
                Download PDF
              </Link>
            </div>
            
            {/* CSR 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                MoU Template for Collaboration
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                Legal & full MoU template, articles, and guidelines.
              </p>
              <Link
                href="/"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
              >
                Download PDF
              </Link>
            </div>
            
            {/* CSR 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Hospital Partnership Model (CAPP)
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                How to build CAPP donation drives with hospitals.
              </p>
              <Link
                href="/"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
              >
                Download guide
              </Link>
            </div>
          </div>
        </div>

        {/* Visual Identity & Branding Kit Section */}
        <div className="py-10 md:py-14 px-6 md:px-20 bg-[#F8F9FF] rounded-3xl my-6">
          <h2 className="text-2xl md:text-3xl font-platypi font-bold text-black text-center mb-10">
            Visual Identity & Branding Kit
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Branding 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Anant Aman Logo Pack
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                PNG | JPG | SVG
              </p>
              <Link
                href="/"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
              >
                Download ZIP
              </Link>
            </div>
            
            {/* Branding 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Brand Guidelines
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                Colours, fonts, tone — use it right.
              </p>
              <Link
                href="/"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
              >
                Download PDF
              </Link>
            </div>
          </div>
        </div>

        {/* FAQs or Help Section */}
        <div className="py-10 md:py-14 px-6 md:px-20 my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FAQs */}
            <div className="bg-[#F8F9FF] rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-6">
                FAQs or Help
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#323E7E] flex-shrink-0"></div>
                  <p className="text-sm font-open-sans">Something meaningful</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#323E7E] flex-shrink-0"></div>
                  <p className="text-sm font-open-sans">Certificate of Recognition</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#323E7E] flex-shrink-0"></div>
                  <p className="text-sm font-open-sans">Learn, Execute, Lead</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#323E7E] flex-shrink-0"></div>
                  <p className="text-sm font-open-sans">Network with doctors, leaders, creators</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#323E7E] flex-shrink-0"></div>
                  <p className="text-sm font-open-sans">Direct mentorship from core team</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Link
                  href="/"
                  className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
                >
                  Be a Part
                </Link>
              </div>
            </div>
            
            {/* Help */}
            <div className="bg-[#F8F9FF] rounded-2xl p-6 shadow-md">
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Image 
                  src="/logo.png" 
                  alt="Anant Aman Logo" 
                  width={80} 
                  height={80}
                  className="mb-4" 
                />
                <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                  Not sure where to start?
                </h3>
                <p className="text-sm font-open-sans text-gray-600 mb-6">
                  Tell us who you are, and we&apos;ll find a place for you.
                </p>
                <div className="mb-4">
                  <Link
                    href="/"
                    className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
                  >
                    Fill the form
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-open-sans text-green-600">Join WhatsApp Community</span>
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