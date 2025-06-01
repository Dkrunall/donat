"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import InfiniteCarousel from "./components/InfiniteCarousel";
import Campings from './components/Campings';

export default function Home() {
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
        <div className="gif-hero relative overflow-hidden h-[85vh] md:h-screen rounded-3xl">
          <div
            className="absolute w-full h-[120%] top-0 left-0 transform"
            style={{
              transform: `translate3d(0, ${offset}px, 0) scale(1.1)`,
              transition: "transform 0.2s cubic-bezier(0.2, 0, 0.3, 1)",
            }}
          >
            <Image
              src="/herogif.gif"
              alt="Next.js Logo"
              width={1920}
              height={1080}
              sizes="100vw"
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="px-6 md:px-14 absolute bottom-0 left-0 w-full p-6 md:p-6 text-white z-10">
            <h1 className="text-2xl md:text-4xl text-center md:text-left font-extrabold font-platypi mb-6 md:mb-10">
              We were born from pain.
              <br /> And built from hope.
            </h1>
            <p className="text-base md:text-lg font-open-sans font-normal mb-6 md:mb-10 text-center md:text-left">
              Let&apos;s Together
            </p>
          </div>
        </div>

        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>

        <div className="hero min-h-[500px] md:h-[550px] w-full flex flex-col items-center justify-between px-6 md:px-20 bg-[url(/hero-main.png)] bg-bottom bg-cover md:py-0 md:flex-row relative"> {/* Added relative positioning */}
          <div className="hero-content w-full h-full flex flex-col items-center justify-between md:flex-row">
            <div className="text-center md:text-left pt-4 md:pt-0 mb-6 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-extrabold font-platypi text-[#323E7E] pt-10 mb-2 md:mb-0">
                India for Everyone
              </h1>
              <p className="text-2xl md:text-2xl font-open-sans font-normal mt-2 mb-6 md:mb-8">
                Dream without fear
              </p>
              <div className="hidden md:block"> {/* Only show on desktop */}
                <Link
                  href="/"
                  className="font-platypi text-lg md:text-base bg-white px-10 py-4 md:px-6 md:py-2 rounded-full inline-block"
                >
                  Become Part
                </Link>
              </div>
            </div>
            <Image src="/hearth.png" alt="hero" height={430} width={500} className="" />
          </div>
          
          {/* Mobile-only link positioned at the bottom */}
          <div className="block md:hidden absolute bottom-8 w-full text-center">
            <Link
              href="/"
              className="font-platypi text-lg bg-white px-10 py-4 rounded-full inline-block"
            >
              Become Part
            </Link>
          </div>
        </div>

        <div className="info min-h-[700px] md:h-[90vh] w-full bg-[url(/info.png)] bg-center bg-cover rounded-3xl mt-2 flex flex-col justify-center">
          <div className="info-content w-full h-full flex items-center justify-center px-6 md:px-8 py-10 md:py-0">
            <div className="text-center">
              <h1 className="text-2xl md:text-5xl font-extrabold font-platypi text-white leading-tight">
                Millions sleep hungry. <br /> Many fights cancer, alone.
              </h1>
              <p className="text-base md:text-2xl font-open-sans font-normal mt-4 md:mt-5 text-white leading-relaxed">
                And these are just the known stories. So many others suffer.{" "}
                <br className="hidden md:block" /> Without food. Without care. Without anyone knowing.
              </p>
            </div>
          </div>
        </div>

        <div className="join-section relative mt-2 min-h-[500px] md:h-[600px]">
          <Image
            src="/join.png"
            alt="Next.js Logo"
            width={1920}
            height={800}
            sizes="100vw"
            className="object-cover w-full h-full hidden md:block"
          />
          <Image
            src="/join-mobile.png"
            alt="Next.js Logo"
            width={768}
            height={700}
            sizes="100vw"
            className="object-cover w-full h-full md:hidden"
          />
          <div className="px-6 md:px-14 absolute bottom-0 left-0 w-full p-6 md:p-6 text-[#323E7E] flex flex-col items-center justify-center h-full md:items-start md:justify-end">
            <h1 className="text-2xl md:text-4xl text-center md:text-left font-extrabold font-platypi mb-4 md:mb-5 mt-20 md:mt-28">
              The future <br /> depends on us.
            </h1>
            <p className="text-sm md:text-lg text-center md:text-left font-open-sans font-light mb-4 md:mb-5 text-[#323E7E]">
              Every small action matters. Every delay costs a life. <br className="hidden md:block" /> We can&apos;t wait. We won&apos;t.
            </p>
            <div className="mb-8 md:mb-16">
              <Link
                href="/"
                className="font-platypi text-sm md:text-base bg-white px-6 py-2.5 md:px-6 md:py-2 rounded-full inline-block"
              >
                Do Together
              </Link>
            </div>
          </div>
        </div>

        <div className="our-work mt-2">
          <div className="bg-[#FFF6E2] rounded-t-3xl py-8">
            <h3 className="text-xl md:text-2xl font-platypi font-bold text-[#96693F] text-center">
              We work for those who <br /> are forgotten.
            </h3>
          </div>
          <div className="bg-[#E6DDC9] rounded-b-3xl py-8 md:py-20 px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-2">
              <div className="w-full md:w-auto flex justify-center">
                <Image
                  src="/work.png"
                  alt="Next.js Logo"
                  width={280}
                  height={312}
                  sizes="100vw"
                  className="md:w-[550px] md:h-[330px]"
                />
              </div>
              <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-4 md:gap-2">
                <h3 className="text-sm md:text-lg font-open-sans font-normal text-[#323E7E] text-center px-2">
                  -- A child without school. --
                </h3>
                <h3 className="text-sm md:text-lg font-open-sans font-normal text-[#323E7E] text-center px-2">
                  -- A grandma without medicine --
                </h3>
                <h3 className="text-sm md:text-lg font-open-sans font-normal text-[#323E7E] text-center px-2">
                  -- A family with no home. --
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="campings py-10 md:py-20">
          <div className="flex items-center justify-center flex-col py-12 md:py-20 md:px-4 e max-h-[70vh]">
            <h3 className="text-2xl md:text-3xl font-platypi font-bold text-black text-center mb-4">
              This is what we do
              <br /> <i>Every day</i>
            </h3>
            <p className="text-center bg-[#E0E5FF] py-2 px-6 mt-2 md:mt-4 rounded-full text-sm md:text-base font-open-sans font-normal text-[#323E7E] mb-8 md:mb-10">
              Daily Drives For..
            </p>
            <div className="campings-carousel w-full overflow-x-auto whitespace-nowrap scrollbar-hide md:overflow-x-hidden md:overflow-y-visible md:whitespace-normal md:hidden">
                <div className="inline-flex md:flex md:flex-wrap md:justify-start md:gap-4">
                  <Campings />
                </div>
            </div>
            <div className="hidden md:block">
              <Campings/>
            </div>
          </div>
        </div>

        <div className="support">
          <div className="flex items-center justify-center flex-col py-8 md:py-20 px-6 md:px-4">
            <h3 className="text-xl md:text-3xl font-platypi font-bold text-black text-center mb-6">
              Support one more
              <br /> <i className="text-[#1F9446]">today</i>
            </h3>
            <div className="grid grid-cols-2 gap-4 mt-6 md:flex md:flex-row md:gap-4 md:mt-8">
              {/* Meals Served Card */}
              <div className="bg-[#1F9446] p-4 rounded-2xl text-white w-full aspect-square flex flex-col justify-center items-center md:w-[250px] md:h-auto md:p-6">
                <div className="mb-2">
                  <Image src="/icon1.png" alt="meals" width={30} height={30} className="md:w-[50px] md:h-[50px]" />
                </div>
                <div class="text-center">
                  <h4 className="text-lg font-bold mb-1 md:text-3xl md:mb-2">55k +</h4>
                  <p className="text-xs md:text-lg">Meals Served</p>
                </div>
              </div>
              {/* Lives Reached Card */}
              <div className="bg-[#8B6144] p-4 rounded-2xl text-white w-full aspect-square flex flex-col justify-center items-center md:w-[250px] md:h-auto md:p-6">
                <div className="mb-2">
                  <Image src="/icon2.png" alt="lives" width={30} height={30} className="md:w-[50px] md:h-[50px]" />
                </div>
                <div class="text-center">
                  <h4 className="text-lg font-bold mb-1 md:text-3xl md:mb-2">50k +</h4>
                  <p className="text-xs md:text-lg">Lives reached</p>
                </div>
              </div>
              {/* Kids Educated Card */}
              <div className="bg-[#323E7E] p-4 rounded-2xl text-white w-full aspect-square flex flex-col justify-center items-center md:w-[250px] md:h-auto md:p-6">
                <div className="mb-2">
                  <Image src="/icon3.png" alt="education" width={30} height={30} className="md:w-[50px] md:h-[50px]" />
                </div>
                <div class="text-center">
                  <h4 className="text-lg font-bold mb-1 md:text-3xl md:mb-2">3.5k +</h4>
                  <p className="text-xs md:text-lg">Kids Educated</p>
                </div>
              </div>
              {/* Support Card */}
            
                <Image src="/ss.png" alt="logo" width={250} height={300} />
            </div>
          </div>
        </div>

        <div className="info md:px-4">
          <div className="info grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-2">
            {/* Left Column - Stories */}
            <div className="bg-[#F8F9FF] rounded-3xl p-6 md:p-8 text-center flex flex-col justify-evenly items-center overflow-hidden min-h-[400px]">
              <div className="mb-4 md:mb-8">
                <h2 className="text-xl md:text-3xl text-black font-bold text-center font-platypi">
                  Some stories can&apos;t <br /><span className="text-[#323E7E] italic">wait</span>
                </h2>
              </div>

              <div className="space-y-4 inline-block overflow-hidden">
                {/* Story Items */}
                <div className="story-container mb-4">
                  <div className="story-slider">
                    {/* First set of items */}
                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full md:w-80 p-2">
                      <Image src="/p1.png" alt="profile" width={40} height={40} className="rounded-full md:w-[50px] md:h-[50px]" />
                      <span className="text-xs md:text-sm">Armaan needs cancer treatment</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full md:w-80 p-2">
                      <Image src="/p1.png" alt="profile" width={40} height={40} className="rounded-full md:w-[50px] md:h-[50px]" />
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full md:w-80 p-2">
                      <Image src="/p1.png" alt="profile" width={40} height={40} className="rounded-full md:w-[50px] md:h-[50px]" />
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full md:w-80 p-2">
                      <Image src="/p1.png" alt="profile" width={40} height={40} className="rounded-full md:w-[50px] md:h-[50px]" />
                      <span className="text-xs md:text-sm">Armaan needs cancer treatment</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full md:w-80 p-2">
                      <Image src="/p1.png" alt="profile" width={40} height={40} className="rounded-full md:w-[50px] md:h-[50px]" />
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full md:w-80 p-2">
                      <Image src="/p1.png" alt="profile" width={40} height={40} className="rounded-full md:w-[50px] md:h-[50px]" />
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>
                  </div>
                </div>
                <div className="story-container mb-4">
                  <div className="story-slider">
                    {/* First set of items */}
                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full md:w-80 p-2">
                      <Image src="/p1.png" alt="profile" width={40} height={40} className="rounded-full md:w-[50px] md:h-[50px]" />
                      <span className="text-xs md:text-sm">Armaan needs cancer treatment</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full md:w-80 p-2">
                      <Image src="/p1.png" alt="profile" width={40} height={40} className="rounded-full md:w-[50px] md:h-[50px]" />
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full md:w-80 p-2">
                      <Image src="/p1.png" alt="profile" width={40} height={40} className="rounded-full md:w-[50px] md:h-[50px]" />
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full md:w-80 p-2">
                      <Image src="/p1.png" alt="profile" width={40} height={40} className="rounded-full md:w-[50px] md:h-[50px]" />
                      <span className="text-xs md:text-sm">Armaan needs cancer treatment</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full md:w-80 p-2">
                      <Image src="/p1.png" alt="profile" width={40} height={40} className="rounded-full md:w-[50px] md:h-[50px]" />
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>

                    <div className="story-item flex items-center gap-2 md:gap-3 bg-[#EEF0FF] rounded-full w-full md:w-80 p-2">
                      <Image src="/p1.png" alt="profile" width={40} height={40} className="rounded-full md:w-[50px] md:h-[50px]" />
                      <span className="text-xs md:text-sm">Seema needs books for school</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-32 md:w-40 mt-4 md:mt-8 bg-white border border-gray-200 rounded-full px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm hover:bg-gray-50 transition-colors">
                Let&apos;s help them
              </button>
            </div>

            {/* Right Column - Faces */}
            <div className="bg-white rounded-3xl overflow-hidden relative min-h-[300px] md:h-auto">
              <Image
                src="/info1.png"
                alt="Next.js Logo"
                width={1920}
                height={500}
                sizes="100vw"
                className="object-cover w-full h-full"
              />
              <div className="px-4 md:px-14 absolute top-0 text-center w-full p-4 md:p-6 text-black">
                <h1 className="text-2xl md:text-4xl font-extrabold font-platypi mb-3 md:mb-5">
                  Faces <span className="text-[#323E7E]">we</span> <i>can&apos;t <br /> <span className="text-[#1F9446]">forget</span></i>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="partnership mt-2">
          <div className="py-12 md:py-20 px-6 md:px-4">
            <h3 className="text-2xl md:text-3xl font-platypi font-bold text-black text-center">
              They believed in us.
              <br /> And
            </h3>
            <p className="text-center text-lg md:text-[24px] font-open-sans font-normal text-[#323E7E] mb-8 md:mb-10">
              With us in this journey.
            </p>
            <InfiniteCarousel direction="forward" />
            <InfiniteCarousel direction="reverse" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}