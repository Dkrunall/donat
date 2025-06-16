import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="mt-2 rounded-3xl relative hidden md:block">
      <div className="bg-gradient-to-br from-[#E0E5FF] to-[#B3BFFF] h-20 flex items-center justify-between rounded-t-3xl rounded-tr-3xl px-14">
        <Link href="/">
        <Image src="/logo.png" alt="hero" height={60} width={200} />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="font-platypi text-base bg-white px-6 py-2 rounded-full hover:bg-gray-50 transition-colors"
        >
          Menu
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute right-14 top-24 w-[1000px] bg-white rounded-3xl shadow-lg p-8 z-50">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold font-platypi">Quick Links</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="bg-black text-white px-4 py-2 rounded-full text-sm"
            >
              Close
            </button>
          </div>

          <div className="flex items-center gap-5 h-80">
            <div className="w-1/2 space-y-4 border border-[#E3E3E3] rounded-2xl p-4">
              <Link href="/" className="block text-[16px] hover:text-blue-600">Home</Link>
              <Link href="/who-we-are" className="block text-[16px] hover:text-blue-600">Who We Are</Link>
              <Link href="/what-we-do" className="block text-[16px] hover:text-blue-600">What We Do</Link>
              <Link href="/babu-ki-rasoi" className="block text-[16px] hover:text-blue-600">Babu Ki Rasoi (BKR)</Link>
              <Link href="/capp" className="block text-[16px] hover:text-blue-600">Cancer Awareness & Prevention Program (CAPP)</Link>
              <Link href="/get-involved" className="block text-lg bg-[#39447B] text-white px-6 py-2 rounded-lg hover:bg-[#2C3462] transition-colors mt-4">Get Involved</Link>
            </div>

            <div className="w-1/2 grid grid-cols-2 gap-4">
              <Link href="/join-us" className="bg-white rounded-xl p-4 border border-[#E3E3E3] shadow-md hover:shadow-lg transition-shadow relative h-[132px]">
                <h3 className="text-[#39447B] text-xl font-bold mb-2">Join Us <br /> (Intern/Volunteer)</h3>
                <div className="absolute bottom-4 right-4">
                  <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                </div>
              </Link>

              <Link href="/contact-us" className="bg-white rounded-xl p-4 border border-[#E3E3E3] shadow-md hover:shadow-lg transition-shadow relative h-[132px]">
                <h3 className="text-[#39447B] text-xl font-bold mb-2">Contact Us</h3>
                <div className="absolute bottom-4 right-4">
                  <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                </div>
              </Link>

              <Link href="/resources" className="bg-white rounded-xl p-4 border border-[#E3E3E3] shadow-md hover:shadow-lg transition-shadow relative h-[132px]">
                <h3 className="text-[#39447B] text-xl font-bold mb-2">Resources</h3>
                <div className="absolute bottom-4 right-4">
                  <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                </div>
              </Link>

              <Link href="/our-impact" className="bg-white rounded-xl p-4 border border-[#E3E3E3] shadow-md hover:shadow-lg transition-shadow relative h-[132px]">
                <h3 className="text-[#39447B] text-xl font-bold mb-2">Insights</h3>
                <div className="absolute bottom-4 right-4">
                  <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
