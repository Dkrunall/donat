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
      <div className="p-1.5">
        <div className="gif-hero relative overflow-hidden h-screen rounded-3xl">
          <div
            className="absolute w-full h-[120%] top-0 left-0 transform"
            style={{
              transform: `translate3d(0, ${offset}px, 0) scale(1.1)`,
              transition: "transform 0.2s cubic-bezier(0.2, 0, 0.3, 1)",
            }}
          >
            <Image
              src="/herogif.png"
              alt="Next.js Logo"
              width={1920}
              height={1080}
              sizes="100vw"
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="px-14 absolute bottom-0 left-0 w-full p-6 text-white z-10">
            <h1 className="text-4xl font-extrabold font-platypi mb-10">
              We were born from pain.
              <br /> And built from hope.
            </h1>
            <p className="text-lg font-open-sans font-light mb-10">
              Let&apos;ld Together
            </p>
          </div>
        </div>

        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>

        <div className="hero h-[500px] w-full flex items-center justify-between px-20 bg-[url(/hero-main.png)] bg-bottom bg-cover">
          <div className="hero-content w-full flex items-center justify-between lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-extrabold font-platypi text-[#323E7E]">
                India for Everyone
              </h1>
              <p className="text-2xl font-open-sans font-normal mt-2 mb-8">
                Dream without fear
              </p>
              <Link
                href="/"
                className="font-platypi text-base bg-white px-6 py-2 rounded-full"
              >
                Become Part
              </Link>
            </div>
            <Image src="/hearth.png" alt="hero" height={500} width={450} />
          </div>
        </div>

        <div className="info h-[90vh] w-full bg-[url(/info.png)] bg-center bg-cover rounded-3xl mt-2">
          <div className="info-content w-full h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold font-platypi text-white">
                Millions sleep hungry. <br /> Many fights cancer, alone.
              </h1>
              <p className="text-2xl font-open-sans font-normal mt-5 text-white">
                And these are just the known stories. So many others suffer.{" "}
                <br /> Without food. Without care. Without anyone knowing.
              </p>
            </div>
          </div>
        </div>

        <div className="join-section relative mt-2">
          <Image
            src="/join.png"
            alt="Next.js Logo"
            width={1920}
            height={500}
            sizes="100vw"
          />
          <div className="px-14 absolute bottom-0 left-0 w-full p-6 text-[#323E7E]">
            <h1 className="text-4xl font-extrabold font-platypi mb-5">
              The future <br /> depends on us.
            </h1>
            <p className="text-lg font-open-sans font-light mb-10 text-[#323E7E]">
              Every small action matters. Every delay costs a life. <br /> We
              can&apos;t wait. We won&apos;t.
            </p>
            <div className="mb-16">
              <Link
                href="/"
                className="font-platypi text-base bg-white px-6 py-2 rounded-full"
              >
                Do Together
              </Link>
            </div>
          </div>
        </div>

        <div className="our-work mt-2">
          <div className="bg-[#FFF6E2] rounded-t-3xl rounded-tr-3xl py-8">
            <h3 className="text-2xl font-platypi font-bold text-[#96693F] text-center">
              We work for those who <br /> are forgotten.
            </h3>
          </div>
          <div className="bg-[#E6DDC9] rounded-b-3xl rounded-br-3xl roun py-20 px-10">
            <div className="w-full flex items-center gap-2">
              <Image
                src="/work.png"
                alt="Next.js Logo"
                width={355}
                height={296}
                sizes="100vw"
              />
              <div className="w-full flex items-center justify-evenly">
                <h3 className="text-lg font-open-sans font-normal text-[#323E7E] text-center">
                  -- A child without school. --
                </h3>
                <h3 className="text-lg font-open-sans font-normal text-[#323E7E] text-center">
                  -- A grandma without medicine --
                </h3>
                <h3 className="text-lg font-open-sans font-normal text-[#323E7E] text-center">
                  -- A family with no home. --
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="campings">
          <div className="flex items-center justify-center flex-col py-20">
            <h3 className="text-3xl font-platypi font-bold text-black text-center">
              This is what we do
              <br /> <i>Every day</i>
            </h3>
            <p className="text-center bg-[#E0E5FF] py-1 px-3 mt-4 rounded-full text-base text-open-sans font-normal text-[#323E7E] mb-10">
              Daily Drives For..
            </p>
            <Campings />
          </div>
        </div>

        <div className="support">
          <div className="flex items-center justify-center flex-col py-20">
            <h3 className="text-3xl font-platypi font-bold text-black text-center">
              Support one more
              <br /> <i className="text-[#1F9446]">today</i>
            </h3>

            <div className="flex gap-4 mt-8">
              {/* Meals Served Card */}
              <div className="bg-[#1F9446] p-6 rounded-2xl text-white w-[250px]">
                <div className="mb-4">
                  <Image src="/icon1.png" alt="meals" width={50} height={50} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold mb-2">55k +</h4>
                  <p className="text-lg">Meals Served</p>
                </div>
              </div>

              {/* Lives Reached Card */}
              <div className="bg-[#8B6144] p-6 rounded-2xl text-white w-[250px]">
                <div className="mb-4">
                  <Image src="/icon2.png" alt="lives" width={50} height={50} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold mb-2">50k +</h4>
                  <p className="text-lg">Lives reached</p>
                </div>
              </div>

              {/* Kids Educated Card */}
              <div className="bg-[#323E7E] p-6 rounded-2xl text-white w-[250px]">
                <div className="mb-4">
                  <Image src="/icon3.png" alt="education" width={50} height={50} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold mb-2">3.5k +</h4>
                  <p className="text-lg">Kids Educated</p>
                </div>
              </div>

              {/* Support Card */}
        
                  <Image src="/ss.png" alt="logo" width={200} height={200} className="mb-4" />
            </div>
          </div>
        </div>

        <div className="info">
          <div className="info grid grid-cols-2 gap-6 mt-2">
            {/* Left Column - Stories */}
            <div className="bg-[#F8F9FF] rounded-3xl p-8 text-center flex flex-col justify-evenly items-center overflow-hidden">
              <div className="mb-8">
                <h2 className="text-3xl text-black font-bold text-center font-platypi">
                  Some stories can&apos;t <br /><span className="text-[#323E7E] italic">wait</span>
                </h2>
              </div>

              <div className="space-y-4 inline-block overflow-hidden">
                {/* Story Items */}
                <div className="story-container mb-4">
                  <div className="story-slider">
                    {/* First set of items */}
                    <div className="story-item flex items-center gap-3 bg-[#EEF0FF] rounded-full w-80">
                      <Image src="/p1.png" alt="profile" width={50} height={50} className="rounded-full" />
                      <span className="text-sm">Armaan needs cancer treatment</span>
                    </div>

                    <div className="story-item flex items-center gap-3 bg-[#EEF0FF] rounded-full w-80">
                      <Image src="/p1.png" alt="profile" width={50} height={50} className="rounded-full" />
                      <span className="text-sm">Seema needs books for school</span>
                    </div>

                    <div className="story-item flex items-center gap-3 bg-[#EEF0FF] rounded-full w-80">
                      <Image src="/p1.png" alt="profile" width={50} height={50} className="rounded-full" />
                      <span className="text-sm">Seema needs books for school</span>
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="story-item flex items-center gap-3 bg-[#EEF0FF] rounded-full w-80">
                      <Image src="/p1.png" alt="profile" width={50} height={50} className="rounded-full" />
                      <span className="text-sm">Armaan needs cancer treatment</span>
                    </div>

                    <div className="story-item flex items-center gap-3 bg-[#EEF0FF] rounded-full w-80">
                      <Image src="/p1.png" alt="profile" width={50} height={50} className="rounded-full" />
                      <span className="text-sm">Seema needs books for school</span>
                    </div>

                    <div className="story-item flex items-center gap-3 bg-[#EEF0FF] rounded-full w-80">
                      <Image src="/p1.png" alt="profile" width={50} height={50} className="rounded-full" />
                      <span className="text-sm">Seema needs books for school</span>
                    </div>
                  </div>
                </div>
                <div className="story-container mb-4">
                  <div className="story-slider">
                    {/* First set of items */}
                    <div className="story-item flex items-center gap-3 bg-[#EEF0FF] rounded-full w-80">
                      <Image src="/p1.png" alt="profile" width={50} height={50} className="rounded-full" />
                      <span className="text-sm">Armaan needs cancer treatment</span>
                    </div>

                    <div className="story-item flex items-center gap-3 bg-[#EEF0FF] rounded-full w-80">
                      <Image src="/p1.png" alt="profile" width={50} height={50} className="rounded-full" />
                      <span className="text-sm">Seema needs books for school</span>
                    </div>

                    <div className="story-item flex items-center gap-3 bg-[#EEF0FF] rounded-full w-80">
                      <Image src="/p1.png" alt="profile" width={50} height={50} className="rounded-full" />
                      <span className="text-sm">Seema needs books for school</span>
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="story-item flex items-center gap-3 bg-[#EEF0FF] rounded-full w-80">
                      <Image src="/p1.png" alt="profile" width={50} height={50} className="rounded-full" />
                      <span className="text-sm">Armaan needs cancer treatment</span>
                    </div>

                    <div className="story-item flex items-center gap-3 bg-[#EEF0FF] rounded-full w-80">
                      <Image src="/p1.png" alt="profile" width={50} height={50} className="rounded-full" />
                      <span className="text-sm">Seema needs books for school</span>
                    </div>

                    <div className="story-item flex items-center gap-3 bg-[#EEF0FF] rounded-full w-80">
                      <Image src="/p1.png" alt="profile" width={50} height={50} className="rounded-full" />
                      <span className="text-sm">Seema needs books for school</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-40 mt-8 bg-white border border-gray-200 rounded-full px-6 py-4 text-sm hover:bg-gray-50 transition-colors">
                Let&apos;s help them
              </button>
            </div>

            {/* Right Column - Faces */}
            <div className="bg-white rounded-3xl overflow-hidden relative">
              <Image
                src="/info1.png"
                alt="Next.js Logo"
                width={1920}
                height={500}
                sizes="100vw"
              />
              <div className="px-14 absolute top-0 text-center w-full p-6 text-black">
                <h1 className="text-4xl font-extrabold font-platypi mb-5">
                  Faces <span className="text-[#323E7E]">we</span> <i>can&apos;t <br /> <span className="text-[#1F9446]">forget</span></i>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="partnership mt-2">
          <div className="py-20">
            <h3 className="text-3xl font-platypi font-bold text-black text-center">
              They believed in us.
              <br /> And
            </h3>
            <p className="text-center text-[24px] text-open-sans font-normal text-[#323E7E] mb-10">
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