"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function JoinUs() {
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
        <div className="info min-h-[700px] md:h-[90vh] w-full bg-[url(/info.png)] bg-center bg-cover rounded-3xl flex flex-col justify-center -mt-10 relative overflow-hidden">
          <div className="info-content w-full h-full flex items-center justify-center px-6 md:px-8 py-10 md:py-0 relative z-10">
            <div className="text-center max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold font-platypi text-white leading-tight z-20">
                Want to make a real difference? Start here.
              </h1>
              <p className="text-base md:text-xl font-open-sans font-normal mt-4 md:mt-5 text-white leading-relaxed">
                You don’t need superpowers to save lives. Just heart.
              </p>
            </div>
          </div>

          {/* Positioned text at bottom right */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 max-w-md text-white z-10">
            <p className="text-sm md:text-base font-open-sans leading-relaxed text-right">
              Whether you’re a student, professional, creator, or dreamer — <span className="font-bold"> if
              you’ve got the will to help, we’ve got the work that needs you.</span>
            </p>
          </div>
        </div>

        {/* Why Join Us Section */}
        {/* Why Join Us Section */}
        <div id="why-join" className="my-12">
          <div className="flex flex-col md:flex md:flex-row items-center gap-2">
            {/* Left Column - Image */}
            <div className="w-full bg-[#F8F9FF] p-8 md:p-12 lg:p-16 flex flex-col justify-center rounded-3xl md:w-3/5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-platypi font-bold text-[#323E7E] mb-4">
                Why Join Us?
              </h2>
              <p className="text-base md:text-lg font-open-sans text-gray-700 mb-8">
                Because someone out there needs exactly what you have.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg font-open-sans text-gray-700">
                    Work on campaigns that actually save lives
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg font-open-sans text-gray-700">
                    Create content that creates awareness
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg font-open-sans text-gray-700">
                    Be on ground, in the middle of real change
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg font-open-sans text-gray-700">
                    Build leadership, event, PR, and strategy skills
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg font-open-sans text-gray-700">
                    Connect with a team that feels like family
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Content */}
            <div className="w-full relative h-[400px] md:h-[470px] rounded-3xl overflow-hidden md:w-2/5">
              <Image
                src="/jus.png"
                alt="Join Us"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Roles You Can Join As */}
        <div
          id="roles"
          className="py-12 md:py-16 bg-[#E9E2D0] rounded-3xl my-12 px-6 md:px-8 lg:px-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-platypi font-bold text-center mb-10">
            Roles You Can Join As
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Role 1 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-platypi font-bold text-[#323E7E] mb-6">
                Volunteer (Flexible, On-Call, or Ground)
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base font-open-sans text-gray-700">
                    Ration distribution
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base font-open-sans text-gray-700">
                    Event support
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base font-open-sans text-gray-700">
                    Awareness sessions
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base font-open-sans text-gray-700">
                    On-field experience
                  </p>
                </li>
              </ul>
              <div className="mt-auto text-center">
                <Link
                  href="#apply-volunteer"
                  className="text-base font-open-sans text-[#323E7E] bg-white px-6 py-3 rounded-full inline-block shadow-sm border border-[#323E7E]"
                >
                  Join as Volunteer
                </Link>
              </div>
            </div>

            {/* Role 2 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-platypi font-bold text-[#323E7E] mb-6">
                Intern (Structured 4–8 Weeks)
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base font-open-sans text-gray-700">
                    Social media / Outreach
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base font-open-sans text-gray-700">
                    Documentation & Research
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base font-open-sans text-gray-700">
                    Event coordination
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base font-open-sans text-gray-700">
                    Community management
                  </p>
                </li>
              </ul>
              <div className="mt-auto text-center">
                <Link
                  href="#apply-intern"
                  className="text-base font-open-sans text-[#323E7E] bg-white px-6 py-3 rounded-full inline-block shadow-sm border border-[#323E7E]"
                >
                  Join as Intern
                </Link>
              </div>
            </div>

            {/* Role 3 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-platypi font-bold text-[#323E7E] mb-6">
                Campaign Ambassador (Remote)
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base font-open-sans text-gray-700">
                    Help us promote initiatives online
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base font-open-sans text-gray-700">
                    Mobilize your college network
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-[#323E7E] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base font-open-sans text-gray-700">
                    Share the story, spread the cause
                  </p>
                </li>
              </ul>
              <div className="mt-auto text-center">
                <Link
                  href="#apply-ambassador"
                  className="text-base font-open-sans text-[#323E7E] bg-white px-6 py-3 rounded-full inline-block shadow-sm border border-[#323E7E]"
                >
                  Join as Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Perks Section and Ready to Take the First Step Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          {/* Perks Section */}
          <div id="perks" className="bg-[#F8F9FF] rounded-3xl p-8 md:p-10 overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-platypi font-bold text-center mb-8">
              <span className="text-[#323E7E]">Perks</span> of Being<br />
              With Us
            </h2>

            <div className="space-y-2 py-14 inline-block overflow-hidden">
                {/* Story Items */}
                <div className="story-container mb-4">
                  <div className="story-slider">
                    {/* First set of items */}
                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full p-2">
                      <span className="text-xs md:text-sm">Armaan needs cancer treatment</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full p-2">
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full p-2">
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full p-2">
                      <span className="text-xs md:text-sm">Armaan needs cancer treatment</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full p-2">
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full p-2">
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>
                  </div>
                </div>
                <div className="story-container mb-4">
                  <div className="story-slider">
                    {/* First set of items */}
                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full p-2">
                      <span className="text-xs md:text-sm">Armaan needs cancer treatment</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full p-2">
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full p-2">
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full p-2">
                      <span className="text-xs md:text-sm">Armaan needs cancer treatment</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full p-2">
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full p-2">
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>
                  </div>
                </div>
            </div>

            <div className="text-center">
              <Link
                href="#apply-form"
                className="font-platypi text-base bg-white border border-[#323E7E] text-[#323E7E] px-8 py-3 rounded-full inline-block hover:bg-gray-50 transition-all"
              >
                Be a Part
              </Link>
            </div>
          </div>

          {/* Ready to Take the First Step Section */}
          <div id="get-started" className="bg-[#F8F9FF] rounded-3xl p-8 md:p-10 flex flex-col justify-between">
            <div className="flex items-center flex-col">
              <div className="flex justify-center mb-6">
                <Image
                  src="/jusf.png"
                  alt="Globe"
                  width={60}
                  height={60}
                />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-platypi font-bold mb-4">
                Ready to Take<br />
                <span className="text-[#323E7E]">the First Step?</span>
              </h2>
              
              <p className="text-base md:text-lg font-open-sans mb-8">
                Tell us who you are, and we&apos;ll find a place for you.
              </p>
              <div className="flex flex-wrap gap-4">
              <Link
                href="#apply-form"
                className="font-platypi text-base bg-white border border-[#323E7E] text-[#323E7E] px-8 py-3 rounded-full inline-block hover:bg-gray-50 transition-all"
              >
                Fill the Form
              </Link>
              
              <Link
                href="https://chat.whatsapp.com/example"
                className="font-platypi text-base bg-[#25D366] text-white px-8 py-3 rounded-full inline-block hover:bg-opacity-90 transition-all flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Join WhatsApp Community
              </Link>
            </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="py-12 md:py-16 px-6 md:px-20">
          <h2 className="text-2xl md:text-3xl font-platypi font-bold text-black text-center mb-10">
            Volunteer Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-[#F8F9FF] rounded-2xl p-6">
              <div className="relative h-40 md:h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  src="/work.png"
                  alt="Volunteer"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-base font-open-sans italic mb-4">
                "I joined for a certificate, I stayed because I found purpose."
              </p>
              <h4 className="text-lg font-platypi font-bold text-[#323E7E]">
                Priya S.
              </h4>
              <p className="text-sm font-open-sans text-gray-600">
                Volunteer since 2021
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#F8F9FF] rounded-2xl p-6">
              <div className="relative h-40 md:h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  src="/work.png"
                  alt="Volunteer"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-base font-open-sans italic mb-4">
                "I had no idea what to expect, but I&apos;m leaving with a new
                perspective."
              </p>
              <h4 className="text-lg font-platypi font-bold text-[#323E7E]">
                Rahul M.
              </h4>
              <p className="text-sm font-open-sans text-gray-600">
                Intern, Summer 2022
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#F8F9FF] rounded-2xl p-6">
              <div className="relative h-40 md:h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  src="/work.png"
                  alt="Volunteer"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-base font-open-sans italic mb-4">
                "I joined for a certificate, I stayed because I found purpose."
              </p>
              <h4 className="text-lg font-platypi font-bold text-[#323E7E]">
                Ananya K.
              </h4>
              <p className="text-sm font-open-sans text-gray-600">
                Campaign Ambassador
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
