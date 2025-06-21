import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showGetInvolved, setShowGetInvolved] = useState(false);
  const [showWhatWeDo, setShowWhatWeDo] = useState(false);
  
  const isActive = (path) => {
    return pathname === path;
  };

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
              onClick={() => {
                setIsMenuOpen(false);
                setShowGetInvolved(false);
                setShowWhatWeDo(false);
              }}
              className="bg-black text-white px-4 py-2 rounded-full text-sm"
            >
              Close
            </button>
          </div>

          <div className="flex items-center gap-5 h-80">
            <div className="w-1/2 space-y-6 border border-[#E3E3E3] rounded-2xl p-4">
              <Link href="/" className={`block text-[16px] px-6 py-2 rounded-lg ${isActive('/') ? 'bg-[#39447B] text-white' : 'text-[#39447B] hover:text-white hover:bg-[#39447B]'}`}>Home</Link>
              <Link href="/who-we-are" className={`block text-[16px] px-6 py-2 rounded-lg ${isActive('/who-we-are') ? 'bg-[#39447B] text-white' : 'text-[#39447B] hover:text-white hover:bg-[#39447B]'}`}>Who We Are</Link>
              <Link 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setShowWhatWeDo(!showWhatWeDo);
                  setShowGetInvolved(false); // Hide Get Involved when What We Do is clicked
                }}
                className={`block text-[16px] px-6 py-2 rounded-lg ${showWhatWeDo ? 'bg-[#39447B] text-white' : 'text-[#39447B] hover:text-white hover:bg-[#39447B]'}`}
              >
                What We Do
              </Link>
              <Link 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setShowGetInvolved(!showGetInvolved);
                  setShowWhatWeDo(false); // Hide What We Do when Get Involved is clicked
                }}
                className={`block text-[16px] px-6 py-2 rounded-lg ${showGetInvolved ? 'bg-[#39447B] text-white' : 'text-[#39447B] hover:text-white hover:bg-[#39447B]'}`}
              >
                Get Involved
              </Link>
            </div>

            {/* what we do click items */}
            <div className={`w-1/2 grid grid-cols-2 gap-4 ${!showWhatWeDo ? 'hidden' : ''}`}>
              <Link href="/babu-ki-rasoi" className={`bg-white rounded-xl p-4 border ${isActive('/babu-ki-rasoi') ? 'border-[#39447B] shadow-lg bg-[#39447B] text-white' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                <h3 className={`${isActive('/babu-ki-rasoi') ? 'text-white' : 'text-[#39447B]'} text-lg font-bold mb-2`}>Babu Ki Rasoi</h3>
                <div className="absolute bottom-4 right-4">
                  <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                </div>
              </Link>

              <Link href="/capp" className={`bg-white rounded-xl p-4 border ${isActive('/capp') ? 'border-[#39447B] shadow-lg bg-[#39447B] text-white' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                <h3 className={`${isActive('/capp') ? 'text-white' : 'text-[#39447B]'} text-lg font-bold mb-2`}>Cancer Awareness & <br/> Prevention Program (CAPP)</h3>
                <div className="absolute bottom-4 right-4">
                  <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                </div>
              </Link>

              <Link href="/friend-of-anat-aman" className={`bg-white rounded-xl p-4 border ${isActive('/friend-of-anat-aman') ? 'border-[#39447B] shadow-lg bg-[#39447B] text-white' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                <h3 className={`${isActive('/friend-of-anat-aman') ? 'text-white' : 'text-[#39447B]'} text-lg font-bold mb-2`}>Friends of Anant Aman</h3>
                <div className="absolute bottom-4 right-4">
                  <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                </div>
              </Link>

              <Link href="/kala-darpan" className={`bg-white rounded-xl p-4 border ${isActive('/kala-darpan') ? 'border-[#39447B] shadow-lg bg-[#39447B] text-white' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                <h3 className={`${isActive('/kala-darpan') ? 'text-white' : 'text-[#39447B]'} text-lg font-bold mb-2`}>Kala Darpan</h3>
                <div className="absolute bottom-4 right-4">
                  <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                </div>
              </Link>
            </div>

            {/* get involved click items */}
            <div className={`w-1/2 grid grid-cols-2 gap-4 ${!showGetInvolved ? 'hidden' : ''}`}>
              <Link href="/join-us" className={`bg-white rounded-xl p-4 border ${isActive('/join-us') ? 'border-[#39447B] shadow-lg bg-[#39447B] text-white' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                <h3 className={`${isActive('/join-us') ? 'text-white' : 'text-[#39447B]'} text-lg font-bold mb-2`}>Join Us <br /> (Intern/Volunteer)</h3>
                <div className="absolute bottom-4 right-4">
                  <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                </div>
              </Link>

              <Link href="/contact-us" className={`bg-white rounded-xl p-4 border ${isActive('/contact-us') ? 'border-[#39447B] shadow-lg bg-[#39447B] text-white' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                <h3 className={`${isActive('/contact-us') ? 'text-white' : 'text-[#39447B]'} text-lg font-bold mb-2`}>Contact Us</h3>
                <div className="absolute bottom-4 right-4">
                  <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                </div>
              </Link>

              <Link href="/resources" className={`bg-white rounded-xl p-4 border ${isActive('/resources') ? 'border-[#39447B] shadow-lg bg-[#39447B] text-white' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                <h3 className={`${isActive('/resources') ? 'text-white' : 'text-[#39447B]'} text-lg font-bold mb-2`}>Resources</h3>
                <div className="absolute bottom-4 right-4">
                  <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                </div>
              </Link>

              <Link href="/our-impact" className={`bg-white rounded-xl p-4 border ${isActive('/our-impact') ? 'border-[#39447B] shadow-lg bg-[#39447B] text-white' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                <h3 className={`${isActive('/our-impact') ? 'text-white' : 'text-[#39447B]'} text-lg font-bold mb-2`}>Insights</h3>
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
