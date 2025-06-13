"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function WhatWeDo() {
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
        <div className="info min-h-[700px] md:h-[90vh] w-full bg-center bg-cover rounded-3xl flex flex-col justify-center -mt-0 md:-mt-10 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/wwd.png" 
              alt="Hero background" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="info-content w-full h-full flex items-center justify-center px-6 md:px-8 py-10 md:py-0 bg-black bg-opacity-40 rounded-3xl relative z-10">
            <div className="text-center">
              <h1 className="text-2xl md:text-5xl font-extrabold font-platypi text-white leading-tight">
                We don&apos;t just care. <span className="text-yellow-400">We act.</span>
              </h1>
              <p className="text-base md:text-2xl font-open-sans font-normal mt-4 md:mt-5 text-white leading-relaxed max-w-4xl mx-auto">
                Every day, we&apos;re on the ground making real change happen.
                <br className="hidden md:block" />
                Because words without action are just empty promises.
              </p>
            </div>
          </div>
        </div>

        {/* Our Purpose Section */}
        <div className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-[350px] md:h-[450px]">
                <Image 
                  src="/wol1.png" 
                  alt="Colorful face paint art" 
                  fill 
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-platypi font-bold text-gray-800 mb-6">
                Our Purpose
              </h2>
              <p className="text-lg md:text-xl font-open-sans text-gray-700 mb-8">
                We believe art is a form of activism, emotion, and connection. Through our work, we aim to:
              </p>
              
              {/* Bullet points */}
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <p className="text-base font-open-sans text-gray-600">Create a platform for emerging and established artists</p>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <p className="text-base font-open-sans text-gray-600">Encourage dialogue through creativity</p>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <p className="text-base font-open-sans text-gray-600">Celebrate diversity in expression and technique</p>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <p className="text-base font-open-sans text-gray-600">Build a community where art meets empathy and impact</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* By the Numbers Section */}
        <div className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-platypi font-bold text-gray-800 text-center mb-12">
              By the <span className="text-green-600">Numbers</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {/* Stat 1 */}
              <div className="bg-green-500 rounded-xl p-6 text-white shadow-lg flex flex-col items-center text-center">
                <svg className="h-10 w-10 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div className="text-4xl font-bold mb-1">4 editions</div>
                <p className="text-sm font-open-sans">successfully organized</p>
              </div>
              
              {/* Stat 2 */}
              <div className="bg-yellow-600 rounded-xl p-6 text-white shadow-lg flex flex-col items-center text-center">
                <svg className="h-10 w-10 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                <div className="text-4xl font-bold mb-1">200+ artists</div>
                <p className="text-sm font-open-sans">70+ CITIES</p>
              </div>
              
              {/* Stat 3 */}
              <div className="bg-blue-700 rounded-xl p-6 text-white shadow-lg flex flex-col items-center text-center">
                <svg className="h-10 w-10 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <div className="text-4xl font-bold mb-1">1000+ visitors</div>
                <p className="text-sm font-open-sans">ACROSS GENRES</p>
              </div>
              
              {/* Stat 4 */}
              <div className="bg-white rounded-xl p-6 text-gray-700 border border-gray-200 shadow-lg flex flex-col items-center text-center">
                <svg className="h-10 w-10 mb-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                <p className="text-base font-open-sans font-semibold">Themes ranging from identity, inequality, nature, to freedom</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why It Matters Section */}
        <div className="py-12 md:py-20 bg-indigo-50 rounded-3xl mx-0 md:mx-0">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:pr-8">
                <h2 className="text-3xl md:text-4xl font-platypi font-bold text-gray-800 mb-6">
                  Why It Matters
                </h2>
                <p className="text-lg md:text-xl font-open-sans text-gray-700 mb-6">
                  In a world divided by opinions, art unites by emotion. We give a stage to untold stories, unheard voices, and unseen talents - especially from youth and underrepresented communities.
                </p>
                <p className="text-lg md:text-xl font-open-sans text-gray-700 italic font-semibold">
                  It&apos;s not just an art show. It&apos;s a movement to place creativity at the centre of social change.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/wwd2.png" 
                  alt="Why Art Matters - A person with flowing fabric"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Artist Testimonials */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-platypi font-bold text-gray-800 text-center mb-12">
              Artist Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Artist 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-[300px]">
                  <Image 
                    src="/p1.png" 
                    alt="Artist Testimonial 1" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-lg font-open-sans text-gray-700 italic mb-4">
                    &quot;I joined for a certificate, I stayed because I found purpose.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <h3 className="font-platypi font-bold text-gray-800">Ananya Sharma</h3>
                      <p className="text-sm text-gray-600">Visual Artist, Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Artist 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-[300px]">
                  <Image 
                    src="/founder.png" 
                    alt="Artist Testimonial 2" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-lg font-open-sans text-gray-700 italic mb-4">
                    &quot;The platform helped me connect with like-minded artists.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <h3 className="font-platypi font-bold text-gray-800">Rajesh Kumar</h3>
                      <p className="text-sm text-gray-600">Sculptor, Delhi</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Artist 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-[300px]">
                  <Image 
                    src="/p1.png" 
                    alt="Artist Testimonial 3" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-lg font-open-sans text-gray-700 italic mb-4">
                    &quot;KalaDarpan gave me a voice when I needed it most.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <h3 className="font-platypi font-bold text-gray-800">Maya Patel</h3>
                      <p className="text-sm text-gray-600">Performance Artist, Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section with Filters */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-platypi font-bold text-gray-800 mb-12">
              Are you an artist, curator,<br />or just an art lover?
            </h2>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="relative group">
                <div className="relative h-[200px] md:h-[250px] rounded-xl overflow-hidden">
                  <Image
                    src="/wwsf1.png"
                    alt="Art Gallery 1"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-left">
                  <p className="text-sm text-gray-600">Signup for free workshops</p>
                </div>
              </div>
              <div className="relative group">
                <div className="relative h-[200px] md:h-[250px] rounded-xl overflow-hidden">
                  <Image
                    src="/wwsf2.png"
                    alt="Art Gallery 2"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-left">
                  <p className="text-sm text-gray-600">Join our artist community</p>
                </div>
              </div>
              <div className="relative group">
                <div className="relative h-[200px] md:h-[250px] rounded-xl overflow-hidden">
                  <Image
                    src="/wwsf3.png"
                    alt="Art Gallery 3"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-left">
                  <p className="text-sm text-gray-600">Showcase your work</p>
                </div>
              </div>
              <div className="relative group">
                <div className="relative h-[200px] md:h-[250px] rounded-xl overflow-hidden">
                  <Image
                    src="/wwsf4.png"
                    alt="Art Gallery 4"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-left">
                  <p className="text-sm text-gray-600">Find more like this</p>
                </div>
              </div>
            </div>
            <Link
              href="/join-us"
              className="inline-block bg-indigo-600 text-white font-open-sans text-lg px-10 py-4 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg"
            >
              Join Today
            </Link>
          </div>
        </div>
        
        {/* Past Events Section */}
        <div className="relative py-24 md:py-32 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat bg-center"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-platypi font-bold mb-6">Past Events</h2>
              <p className="text-xl font-open-sans text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Explore our past events and see how we&apos;ve been making a difference in the art community through exhibitions, workshops, and cultural festivals.
              </p>
            </div>
            <div className="text-center">
              <Link
                href="/events"
                className="inline-block bg-white text-indigo-900 font-open-sans text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg"
              >
                View All
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
