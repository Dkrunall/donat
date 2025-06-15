"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';

export default function MobileNavigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    // Adjust isActive for the toggle button if needed, for now, it can be based on a dummy path or always false
    if (path === '/get-involved-trigger') return isMenuOpen; 
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#F8F7FF] shadow-[0_-2px_5px_rgba(0,0,0,0.05)] md:hidden z-50 p-2 m-2 rounded-full">
      <div className="flex justify-around items-center">
        <Link href="/" className={`relative flex flex-col items-center py-1 ${isActive('/') ? 'text-[#6C5DD3]' : 'text-gray-500'}`}>
          <div className="w-6 h-6 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${isActive('/') ? 'text-[#6C5DD3]' : 'text-gray-400'}`}>
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
          </div>
          <span className={`text-xs mt-1 ${isActive('/') ? 'text-[#6C5DD3]' : 'text-gray-400'}`}>Home</span>
          {isActive('/') && <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-6 h-1 bg-[#3F3D56] rounded-t-sm"></div>}
        </Link>
        
        <Link href="/babu-ki-rasoi" className={`relative flex flex-col items-center py-1 ${isActive('/babu-ki-rasoi') ? 'text-[#6C5DD3]' : 'text-gray-500'}`}>
          <div className="w-6 h-6 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${isActive('/babu-ki-rasoi') ? 'text-[#6C5DD3]' : 'text-gray-400'}`}>
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <span className={`text-xs mt-1 ${isActive('/babu-ki-rasoi') ? 'text-[#6C5DD3]' : 'text-gray-400'}`}>BKR</span>
          {isActive('/babu-ki-rasoi') && <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-6 h-1 bg-[#3F3D56] rounded-t-sm"></div>}
        </Link>
        
        <Link href="/capp" className={`relative flex flex-col items-center py-1 ${isActive('/capp') ? 'text-[#6C5DD3]' : 'text-gray-500'}`}>
          <div className="w-6 h-6 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${isActive('/capp') ? 'text-[#6C5DD3]' : 'text-gray-400'}`}>
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v8"></path>
              <path d="M8 12h8"></path>
            </svg>
          </div>
          <span className={`text-xs mt-1 ${isActive('/capp') ? 'text-[#6C5DD3]' : 'text-gray-400'}`}>CAPP</span>
          {isActive('/capp') && <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-6 h-1 bg-[#3F3D56] rounded-t-sm"></div>}
        </Link>
        
        <button onClick={toggleMenu} className={`relative flex flex-col items-center py-1 ${isActive('/get-involved-trigger') ? 'text-[#6C5DD3]' : 'text-gray-500'}`}>
          <div className="w-6 h-6 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${isActive('/get-involved-trigger') ? 'text-[#6C5DD3]' : 'text-gray-400'}`}>
              {/* Using a different icon or keeping the same for now, can be updated based on design */}
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <span className={`text-xs mt-1 ${isActive('/get-involved-trigger') ? 'text-[#6C5DD3]' : 'text-gray-400'}`}>Get Involved</span>
          {isActive('/get-involved-trigger') && <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-6 h-1 bg-[#3F3D56] rounded-t-sm"></div>}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute bottom-full left-0 right-0 mb-2 p-3 bg-[#F8F7FF] shadow-lg rounded-xl border border-gray-200">
          <div className="grid grid-cols-2 gap-3">
            <Link href="/join-us" className="bg-white p-4 rounded-2xl shadow flex flex-col justify-between relative h-24">
              <span className="text-base font-bold text-[#3F3D56]">Join Us<br/>(Intern/<br/>Volunteer)</span>
              <div className="absolute bottom-3 right-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </Link>
            <Link href="/contact-us" className="bg-white p-4 rounded-2xl shadow flex flex-col justify-between relative h-24">
              <span className="text-base font-bold text-[#3F3D56]">Contact Us</span>
              <div className="absolute bottom-3 right-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </Link>
            <Link href="/resources" className="bg-white p-4 rounded-2xl shadow flex flex-col justify-between relative h-24">
              <span className="text-base font-bold text-[#3F3D56]">Resources</span>
              <div className="absolute bottom-3 right-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </Link>
            <Link href="/our-impact" className="bg-white p-4 rounded-2xl shadow flex flex-col justify-between relative h-24">
              <span className="text-base font-bold text-[#3F3D56]">Insights</span>
              <div className="absolute bottom-3 right-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}