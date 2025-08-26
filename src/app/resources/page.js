"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import PopupForm from "../components/PopupForm";

export default function Resources() {
  const [offset, setOffset] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
        <div className="info min-h-[400px] md:h-[60vh] w-full rounded-3xl flex-col -mt-0 md:-mt-10 h-full flex items-center justify-center px-6 md:px-8 py-10 md:py-0">
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-extrabold font-platypi text-[#323E7E] leading-tight">
              Tools, materials, and guides to <br /> help you do better.
            </h1>
            <p className="text-base md:text-xl font-open-sans font-normal mt-4 md:mt-5 text-[#323E7E] leading-relaxed max-w-3xl mx-auto">
              Whether you&apos;re a volunteer, educator, NGO, or curious
              citizen, here&apos;s everything you need to learn, support, and
              create impact.
            </p>
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
                Awareness Session Script
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                PDF format, For conducting awareness sessions with students
              </p>
              <Link
                href="/resources/Awareness Session Script for Students - Anantaman SWS.pdf"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
                target="_blank"
              >
                Download PDF
              </Link>
            </div>

            {/* Material 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                CAPP Session Script
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                PDF format, Cancer Awareness and Prevention Program guide
              </p>
              <Link
                href="/resources/CAPP Session Script - Anantaman SWS.pdf"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
                target="_blank"
              >
                Download PDF
              </Link>
            </div>

            {/* Material 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Impact Report
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                PDF format, Annual impact report Apr 2023 - Mar 2024
              </p>
              <Link
                href="/resources/Impact Report Apr 23 - Mar 24 - Anantaman SWS.pdf"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
                target="_blank"
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
                Volunteer Handbook
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                PDF format, Complete guide for volunteers
              </p>
              <Link
                href="/resources/Volunteer Handbook - Anantaman SWS.pdf"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
                target="_blank"
              >
                Download PDF
              </Link>
            </div>

            {/* Toolkit 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Babu Ki Rasoi Toolkit
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                PDF format, Guide for Babu Ki Rasoi initiative
              </p>
              <Link
                href="/resources/Babu Ki Rasoi Toolkit - Anantaman SWS.pdf"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
                target="_blank"
              >
                Download PDF
              </Link>
            </div>

            {/* Toolkit 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                CSR Partnership Proposal Kit
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                PDF format, Guide for corporate partnerships
              </p>
              <Link
                href="/resources/CSR Partnership Proposal Kit - Anantaman SWS.pdf"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
                target="_blank"
              >
                Download PDF
              </Link>
            </div>
          </div>
        </div>

        {/* Special Programs & Partnerships Section */}
        <div className="py-10 md:py-14 px-6 md:px-20 bg-gradient-to-r from-[#F8F9FF] to-[#F0F4FF] rounded-3xl my-6">
          <h2 className="text-2xl md:text-3xl font-platypi font-bold text-black text-center mb-10">
            Youth & Educators
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Program 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                Workshop Slides: Cancer Awareness in Schools
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                Simplified, engaging slides with voiceover (coming soon).
              </p>
              <Link
                href="/resources/Hospital Partnership Model - Anantaman SWS.pdf"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
                target="_blank"
              >
                Download PPT
              </Link>
            </div>

            {/* Program 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                FAA Youth Kit
              </h3>
              <p className="text-sm font-open-sans text-gray-600 mb-4">
                What FAA is, why it matters, and how to start a unit in your
                college
              </p>
              <Link
                href="/resources/FAA Youth Kit  - Anantaman SWS.pdf"
                className="text-sm font-open-sans bg-[#323E7E] text-white px-4 py-2 rounded-full inline-block hover:bg-opacity-90 transition-all"
                target="_blank"
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
                Colours, fonts, tone, use it right.
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
                  <p className="text-sm font-open-sans">
                    Something meaningful?
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#323E7E] flex-shrink-0"></div>
                  <p className="text-sm font-open-sans">
                    Certificate of Recognition
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#323E7E] flex-shrink-0"></div>
                  <p className="text-sm font-open-sans">Learn, Execute, Lead</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#323E7E] flex-shrink-0"></div>
                  <p className="text-sm font-open-sans">
                    Network with doctors, leaders, creators
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#323E7E] flex-shrink-0"></div>
                  <p className="text-sm font-open-sans">
                    Direct mentorship from core team
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="text-sm font-open-sans bg-[#323E7E] text-white px-8 py-3 rounded-full inline-block hover:bg-opacity-90 transition-all cursor-pointer"
                >
                  Be a Part
                </button>
              </div>
            </div>

            {/* Help */}
            <div className="bg-[#F8F9FF] rounded-2xl p-6 shadow-md">
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Image
                  src="/logo.png"
                  alt="Anant Aman Logo"
                  width={180}
                  height={180}
                  className="mb-4"
                />
                <h3 className="text-lg md:text-xl font-platypi font-bold text-[#323E7E] mb-2">
                  Not sure where to start?
                </h3>
                <p className="text-sm font-open-sans text-gray-600 mb-6">
                  Tell us who you are, and we&apos;ll find a place for you.
                </p>
                <div className="mb-4">
                  <button
                    onClick={() => setIsPopupOpen(true)}
                    className="text-sm font-open-sans bg-[#323E7E] text-white px-6 py-4 rounded-full inline-block hover:bg-opacity-90 transition-all"
                  >
                    Fill the form
                  </button>
                </div>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="w-fit">
                    <Link
                      href="https://wa.me/919007045281"
                      className="flex items-center justify-center gap-2 w-full text-center bg-green-500 text-white py-3 px-3 rounded-full hover:bg-green-600 transition duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Join WhatsApp Community
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </div>
    </>
  );
}
