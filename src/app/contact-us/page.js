"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function ContactUs() {
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

        {/* Main Content */}
        <div className="py-12 md:py-20">
          {/* Let's Connect Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold font-platypi text-[#323E7E] mb-4">
              Let's connect — your next
              <br />
              message might change a life.
            </h1>
            <p className="text-lg md:text-xl font-open-sans text-gray-600">
              Have a question? An idea? A heart that wants to help?
            </p>
          </div>

          {/* Contact Information and Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 md:px-0">
            {/* Contact Information Card */}
            <div className="bg-[#F0F4FF] rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-platypi font-bold text-[#323E7E] mb-8">
                Contact Us
              </h2>

              {/* Phone Numbers */}
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-1">
                <div className="flex items-center">
                  <div className="bg-[#E8EDFF] rounded-full flex items-center gap-3">
                    <div className="h-12 w-12 bg-[#fff] rounded-full"></div>
                    <p className="text-sm text-gray-700 pr-3">
                      +91-99070-46281 (President)
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#E8EDFF] rounded-full flex items-center gap-3">
                    <div className="h-12 w-12 bg-[#fff] rounded-full"></div>
                    <p className="text-sm text-gray-700 pr-3">
                      +91-77719-97475 (Office)
                    </p>
                  </div>
                </div>

                <div className="flex items-center mt-0 md:mt-6">
                  <div className="bg-[#E8EDFF] rounded-full flex items-center gap-3">
                    <div className="h-12 w-12 bg-[#fff] rounded-full"></div>
                    <p className="text-sm text-gray-700 pr-3">
                      +91-93405-31409 (Joint Secretary)
                    </p>
                  </div>
                </div>

                <div className="flex items-center mt-0 md:mt-6">
                  <Link
                    href="https://wa.me/919007045281"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </Link>
                </div>
              </div>

              <div className="relative text-center text-sm text-gray-500 mb-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-px before:w-[30%] before:bg-gray-300 after:content-[''] after:absolute after:right-0 after:top-1/2 after:h-px after:w-[30%] after:bg-gray-300">
                Also Available
              </div>

              {/* Email and Website */}
              <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
                <div className="flex items-center">
                  <div className="bg-[#E8EDFF] rounded-full flex items-center gap-3">
                    <div className="h-12 w-12 bg-[#fff] rounded-full"></div>
                    <p className="text-sm text-gray-700 pr-3">
                      anantaman.sws@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center mt-2 md:mt-2">
                  <div className="bg-[#E8EDFF] rounded-full flex items-center gap-3">
                    <div className="h-12 w-12 bg-[#fff] rounded-full"></div>
                    <p className="text-sm text-gray-700 pr-3">
                      www.anantamansws.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative text-center text-sm text-gray-500 mb-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-px before:w-[30%] before:bg-gray-300 after:content-[''] after:absolute after:right-0 after:top-1/2 after:h-px after:w-[30%] after:bg-gray-300">
                Office Address
              </div>

              {/* Address */}
              <div className="flex items-center">
                <div className="bg-[#E8EDFF] rounded-full flex items-center gap-3">
                  <div className="h-12 w-12 bg-[#fff] rounded-full"></div>
                  <p className="text-sm text-gray-700 pr-3">
                    Anant Aman SWS, Indore, Madhya Pradesh
                  </p>
                </div>
              </div>
            </div>

            {/* Ready to Take the First Step */}
            <div className="bg-[#F0F4FF] rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center">
              <div className="mb-6">
                  <Image
                    src="/jusf.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
              </div>

              <h2 className="text-2xl md:text-3xl font-platypi font-bold text-[#323E7E] mb-4 text-center">
                Ready to Take
                <br />
                the First Step?
              </h2>

              <p className="text-center text-gray-600 mb-8">
                Want to write to us directly?
              </p>
              <div className="flex items-center justify-center flex-col md:flex-row gap-5 w-full">
                <div className="w-fit">
                  <Link
                    href="/contact-form"
                    className="block w-full text-center bg-white text-[#323E7E] py-3 px-3 rounded-full hover:bg-gray-100 transition duration-300 font-medium"
                  >
                    Fill the Form
                  </Link>
                </div>

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

          {/* Social Media Section */}
          <div className="mt-16 md:mt-24 relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/wwd2.png"
                alt="Social Media"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-white p-6">
                <h2 className="text-2xl md:text-4xl font-platypi font-bold mb-8 text-center">
                  Active on Social
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  <Link
                    href="/"
                    className="bg-white text-[#273373] py-2 px-8 rounded-full text-center "
                  >
                    Instagram
                  </Link>
                  <Link
                    href="/"
                    className="bg-white text-[#273373] py-2 px-8 rounded-full text-center "
                  >
                    Facebook
                  </Link>
                  <Link
                    href="/"
                    className="bg-white text-[#273373] py-2 px-8 rounded-full text-center "
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="/"
                    className="bg-white text-[#273373] py-2 px-8 rounded-full text-center "
                  >
                    Youtube
                  </Link>
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
