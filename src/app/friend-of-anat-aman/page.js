"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function FriendOfAnatAman() {
  const [offset, setOffset] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

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

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <div className="p-1.5 md:p-1.5">
        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>

        {/* Hero Section */}
        <div className="info min-h-[700px] md:h-[90vh] w-full bg-[url(/foaa.png)] bg-center bg-cover rounded-3xl flex flex-col justify-center -mt-0 md:-mt-10 relative overflow-hidden">
          <div className="info-content w-full h-full flex items-center justify-center px-6 md:px-8 py-10 md:py-0 relative z-10">
            <div className="text-center max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold font-platypi text-white leading-tight z-20">
                Not just a club. A cause. A{""} community
              </h1>
              <p className="text-base md:text-xl font-open-sans font-normal mt-4 md:mt-5 text-white leading-relaxed">
                Friends of Anant Aman — Where Friendships Fuel Change
              </p>
            </div>
          </div>

          {/* Positioned text at bottom right */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 max-w-md text-white z-10">
            <p className="text-sm md:text-base font-open-sans leading-relaxed text-right">
              FAA is where young hearts and smart minds come together to change
              lives — not someday, but right now.
            </p>
          </div>
        </div>

        {/* Want to do something real Section */}
        <div className="py-12 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#F6F6F6] py-5">
            {/* Left side - Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-[350px] md:h-[450px]">
                <Image
                  src="/foaa1.png"
                  alt="Tree with many people"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-platypi font-bold text-gray-800 mb-6">
                Want to do something real? Something that matters?
              </h2>

              {/* Bullet points */}
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="text-base font-open-sans text-gray-600">
                    We don&apos;t just post
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="text-base font-open-sans text-gray-600">
                    We don&apos;t just plan
                  </p>
                </li>
              </ul>

              <p className="text-lg md:text-xl font-open-sans text-gray-700 mt-8">
                We show up. Speak up. And stand for something meaningful. The
                difference between talking about impact, and having impact —
                it&apos;s in your hands.
              </p>
            </div>
          </div>
        </div>

        {/* Why FAA Exists Section */}
        <div id="why-join" className="my-12">
          <div className="bg-[url(/foaa2.png)] bg-center bg-cover rounded-3xl h-[700px] text-white overflow-hidden">
            <div className="h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-platypi font-bold mb-6">
                  Past Events
                </h2>
              </div>
              <div className="text-center">
                <p className="text-lg md:text-xl font-open-sans">
                  Because the world doesn’t need more followers. It needs
                  leaders. <br />{" "}
                  <span className="font-extrabold">
                    And we believe leaders are born when they care.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-platypi font-bold text-center mb-12">
            What We Do <span className="text-blue-600 italic">Together</span>
          </h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-16">
            {/* Gallery Item 1 */}
            <div className="relative rounded-xl overflow-hidden group">
              <div className="relative h-[320px]">
                <Image
                  src="/wol.png"
                  alt="Gallery Image 1"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center p-10">
                <p className="text-lg text-white font-open-sans font-extrabold">
                  Host meetups, jam sessions, open mics & awareness events
                </p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="relative rounded-xl overflow-hidden group">
              <div className="relative h-[320px]">
                <Image
                  src="/wol.png"
                  alt="Gallery Image 2"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center p-10">
                  <p className="text-lg text-white font-open-sans font-extrabold">
                    Run fundraisers and ground campaigns
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="relative rounded-xl overflow-hidden group">
              <div className="relative h-[320px]">
                <Image
                  src="/wol.png"
                  alt="Gallery Image 3"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center p-10">
                <p className="text-lg text-white font-open-sans font-extrabold">
                  Shoot reels, content, and bring ideas to life
                </p>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="relative rounded-xl overflow-hidden group">
              <div className="relative h-[320px]">
                <Image
                  src="/wol.png"
                  alt="Gallery Image 4"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center p-10">
                <p className="text-lg text-white font-open-sans font-extrabold">
                  Visit schools, slums, hospitals — and create change
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Join FAA Section */}
        <div className="flex flex-col md:flex md:flex-row items-center gap-2">
          {/* Left Column - Image */}
          <div className="w-full bg-[#F8F9FF] h-[470px] p-8 md:p-12 lg:p-16 flex flex-col justify-center rounded-3xl md:w-3/5">
            <div>
              <h2 className="text-3xl md:text-4xl font-platypi font-bold mb-8">
                Why Join FAA?
              </h2>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#273373] flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-lg font-open-sans">
                    Be part of something bigger than yourself
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#273373] flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-lg font-open-sans">
                    Develop leadership, networking, and new skills
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#273373] flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-lg font-open-sans">
                    See the direct impact of your contribution
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#273373] flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-lg font-open-sans">
                    Connect with like-minded people who share your values
                  </p>
                </li>
              </ul>

              <div className="w-fit mt-10">
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

          {/* Right Column - Content */}
          <div className="w-full relative h-[400px] md:h-[470px] rounded-3xl overflow-hidden md:w-2/5">
            <Image src="/kd2.png" alt="Join Us" fill className="object-cover" />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-platypi font-bold text-gray-800 text-center mb-12">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="p-6">
                  <p className="text-lg font-open-sans text-gray-700 italic mb-4">
                    &quot;I joined to volunteer - I found a family.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <h3 className="font-platypi font-bold text-gray-800">
                        Rahul Mehta
                      </h3>
                      <p className="text-sm text-gray-600">Member since 2019</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="p-6">
                  <p className="text-lg font-open-sans text-gray-700 italic mb-4">
                    &quot;My first event was enough to make me stay.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <h3 className="font-platypi font-bold text-gray-800">
                        Priya Singh
                      </h3>
                      <p className="text-sm text-gray-600">Member since 2021</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="p-6">
                  <p className="text-lg font-open-sans text-gray-700 italic mb-4">
                    &quot;I joined to volunteer - I found a family.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <h3 className="font-platypi font-bold text-gray-800">
                        Amit Patel
                      </h3>
                      <p className="text-sm text-gray-600">Member since 2020</p>
                    </div>
                  </div>
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
