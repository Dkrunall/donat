"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function KalaDarpan() {
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
        <div className="info min-h-[700px] md:h-[90vh] w-full bg-[url(/kdm.png)] bg-center bg-cover rounded-3xl flex flex-col justify-center -mt-10 relative overflow-hidden">
          <div className="info-content w-full h-full flex items-center justify-center px-6 md:px-8 py-10 md:py-0 relative z-10">
            <div className="text-center max-w-3xl">
              <h1 className="text-3xl md:text-6xl font-extrabold font-platypi text-white leading-tight">
                Where art speaks, and society listens.
              </h1>
              <p className="text-base md:text-xl font-open-sans font-normal mt-4 md:mt-5 text-white leading-relaxed">
              KalaDarpan is not just an art exhibition — it’s a celebration of expression, identity, and culture. Organized annually by Anant Aman Social Welfare Society, KalaDarpan brings together artists from across the country to showcase their creativity and perspectives through various forms of art
              </p>
            </div>
          </div>

          {/* Positioned text at bottom right */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 max-w-md text-white z-10">
            <p className="text-sm md:text-base font-open-sans leading-relaxed text-right">
            From bold brushstrokes to subtle stories, from traditional to modern — every piece displayed under KalaDarpan holds a voice. And we are here to listen.
            </p>
          </div>
        </div>

        {/* Our Purpose Section with Image */}
        <div className="py-12 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#F6F6F6] py-5">
            {/* Left side - Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-[350px] md:h-[450px]">
                <Image
                  src="/kd1.png"
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
                We believe art is a form of activism, emotion, and connection.
                Through KalaDarpan, we aim to:
              </p>

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
                    Create a platform for emerging and established artists
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
                    Encourage dialogue through creativity
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
                    Celebrate diversity in expression and technique
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
                    Build a community where art meets empathy and impact
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* By the Numbers Section */}
        <div className="py-12 md:py-12">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-platypi font-bold text-gray-800 text-center mb-12">
              By the <span className="text-green-600">Numbers</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {/* Stat 1 */}
              <div className="bg-[#1F9446] rounded-xl p-6 text-white shadow-lg flex flex-col">
                <svg
                  className="h-10 w-10 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div className="text-2xl font-extrabold mb-1 font-open-sans">
                  4 editions
                </div>
                <p className="text-sm font-open-sans">successfully organized</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#96693F] rounded-xl p-6 text-white shadow-lg flex flex-col">
                <svg
                  className="h-10 w-10 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div className="text-2xl font-extrabold mb-1 font-open-sans">
                  200+ artists
                </div>
                <p className="text-sm font-open-sans">70+ CITIES</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-[#323E7E] rounded-xl p-6 text-white shadow-lg flex flex-col">
                <svg
                  className="h-10 w-10 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div className="text-2xl font-extrabold mb-1 font-open-sans">
                  1000+ visitors
                </div>
                <p className="text-sm font-open-sans">ACROSS GENRES</p>
              </div>

              {/* Stat 4 */}
              <div className="bg-white rounded-xl p-6 text-gray-700 border border-gray-200 shadow-lg flex flex-col">
                <Image
                  src="/jusf.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-full mb-1"
                />
                <p className="text-xl text-[#323E7E] font-open-sans font-extrabold">
                  Themes ranging from identity, inequality, nature, to freedom
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* whyy matters Section */}
        <div id="why-matters" className="my-12">
          <div className="flex flex-col md:flex md:flex-row items-center gap-2">
            {/* Left Column - Image */}
            <div className="w-full bg-[#F8F9FF] h-[470px] p-8 md:p-12 lg:p-16 flex flex-col justify-center rounded-3xl md:w-3/5">
              <div className="md:pr-8">
                <h2 className="text-3xl md:text-4xl font-platypi font-bold text-gray-800 mb-6">
                  Why It Matters
                </h2>
                <p className="text-lg md:text-xl font-open-sans text-gray-700 mb-6">
                  In a world divided by opinions, art unites by emotion.
                  KalaDarpan gives a stage to untold stories, unheard voices,
                  and unseen talents - especially from youth and
                  underrepresented communities.
                </p>
                <p className="text-lg md:text-xl font-open-sans text-gray-700 italic font-semibold">
                  It&apos;s not just an art show. It&apos;s a movement to place
                  creativity at the centre of social change.
                </p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="w-full relative h-[400px] md:h-[470px] rounded-3xl overflow-hidden md:w-2/5">
              <Image
                src="/kd2.png"
                alt="Join Us"
                fill
                className="object-cover"
              />
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
                    &quot;I joined for a certificate, I stayed because I found
                    purpose.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <h3 className="font-platypi font-bold text-gray-800">
                        Ananya Sharma
                      </h3>
                      <p className="text-sm text-gray-600">
                        Visual Artist, Mumbai
                      </p>
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
                    &quot;The platform helped me connect with like-minded
                    artists.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <h3 className="font-platypi font-bold text-gray-800">
                        Rajesh Kumar
                      </h3>
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
                    &quot;KalaDarpan gave me a voice when I needed it
                    most.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <h3 className="font-platypi font-bold text-gray-800">
                        Maya Patel
                      </h3>
                      <p className="text-sm text-gray-600">
                        Performance Artist, Bangalore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section with Filters */}
        <div className="md:px-0 mb-16">
          <h2 className="text-2xl md:text-3xl font-platypi font-bold text-center mb-12">
            Are you an artist, curator,
            <br />
            or just an art{" "}
            <span className="text-[#273373] italic"> lover?</span>
          </h2>

          <div className="text-center mb-12">
            <Link
              href="/join-us"
              className="bg-gray-200 text-[#323E7E] px-6 py-3 rounded-full font-open-sans hover:bg-gray-300 transition duration-300"
            >
              You Can
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Option 1 */}
            <div className="flex flex-col items-center">
              <div className="relative h-[250px] md:h-[350px] w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src="/wol1.png"
                  alt="Become a volunteer"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Become a volunteer
              </p>
            </div>

            {/* Option 2 */}
            <div className="flex flex-col items-center">
              <div className="relative h-[250px] md:h-[350px] w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src="/wol1.png"
                  alt="Sponsor a campaign"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Sponsor a campaign
              </p>
            </div>

            {/* Option 3 */}
            <div className="flex flex-col items-center">
              <div className="relative h-[250px] md:h-[350px] w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src="/wol1.png"
                  alt="Start a fundraiser"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Start a fundraiser
              </p>
            </div>

            {/* Option 4 */}
            <div className="flex flex-col items-center">
              <div className="relative h-[250px] md:h-[350px] w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src="/wol1.png"
                  alt="Start a fundraiser"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Start a fundraiser
              </p>
            </div>
          </div>
        </div>

        {/* Past Events Section */}
        <div className="bg-[url(/kd3.png)] bg-center bg-cover rounded-3xl h-[700px] text-white overflow-hidden">
          <div className="h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-platypi font-bold mb-6">
                Past Events
              </h2>
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
