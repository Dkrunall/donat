import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showGetInvolved, setShowGetInvolved] = useState(false);
  const [showWhatWeDo, setShowWhatWeDo] = useState(false);
  const [showWhoWeAre, setShowWhoWeAre] = useState(false);
  const [showHomeClickItems, setShowHomeClickItems] = useState(false);
  
  const isActive = (path) => {
    return pathname === path;
  };

  const whoWeArePaths = ['/who-we-are', '/wall-of-love', '/media-and-highlights'];
  const whatWeDoPaths = ['/babu-ki-rasoi', '/capp', '/friend-of-anat-aman', '/kala-darpan', '/what-we-do'];
  const getInvolvedPaths = ['/join-us', '/contact-us', '/resources', '/our-impact'];

  const handleMenuOpen = () => {
    if (!isMenuOpen) {
        if (whoWeArePaths.includes(pathname)) {
            setShowWhoWeAre(true);
            setShowWhatWeDo(false);
            setShowGetInvolved(false);
            setShowHomeClickItems(false);
        } else if (whatWeDoPaths.includes(pathname)) {
            setShowWhoWeAre(false);
            setShowWhatWeDo(true);
            setShowGetInvolved(false);
            setShowHomeClickItems(false);
        } else if (getInvolvedPaths.includes(pathname)) {
            setShowWhoWeAre(false);
            setShowWhatWeDo(false);
            setShowGetInvolved(true);
            setShowHomeClickItems(false);
        } else { // This includes '/' and any other pages not in the arrays
            setShowWhoWeAre(false);
            setShowWhatWeDo(false);
            setShowGetInvolved(false);
            setShowHomeClickItems(true);
        }
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="block md:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/">
            <Image src="/logo.png" alt="hero" height={80} width={160} />
          </Link>
        </div>

        {isMenuOpen && (
          <div className="bg-white px-4 py-2">
            <Link href="/" className="block py-2 text-[#39447B]">Home</Link>
            <Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                setShowWhoWeAre(!showWhoWeAre);
                setShowWhatWeDo(false);
                setShowGetInvolved(false);
              }}
              className="block py-2 text-[#39447B]"
            >
              About Us
            </Link>
            {showWhoWeAre && (
              <div className="pl-4">
                <Link href="/who-we-are" className="block py-2 text-[#39447B]">About Us</Link>
                <Link href="/wall-of-love" className="block py-2 text-[#39447B]">Wall of Love</Link>
                <Link href="/media-and-highlights" className="block py-2 text-[#39447B]">Media & Highlights</Link>
              </div>
            )}
            <Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                setShowWhatWeDo(!showWhatWeDo);
                setShowWhoWeAre(false);
                setShowGetInvolved(false);
              }}
              className="block py-2 text-[#39447B]"
            >
              What We Do
            </Link>
            {showWhatWeDo && (
              <div className="pl-4">
                <Link href="/babu-ki-rasoi" className="block py-2 text-[#39447B]">Babu Ki Rasoi</Link>
                <Link href="/capp" className="block py-2 text-[#39447B]">Cancer Awareness & Prevention Program (CAPP)</Link>
                <Link href="/friend-of-anat-aman" className="block py-2 text-[#39447B]">Friends of Anant Aman</Link>
                <Link href="/kala-darpan" className="block py-2 text-[#39447B]">Kala Darpan</Link>
              </div>
            )}
            <Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                setShowGetInvolved(!showGetInvolved);
                setShowWhatWeDo(false);
                setShowWhoWeAre(false);
              }}
              className="block py-2 text-[#39447B]"
            >
              Get Involved
            </Link>
            {showGetInvolved && (
              <div className="pl-4">
                <Link href="/join-us" className="block py-2 text-[#39447B]">Join Us (Intern/Volunteer)</Link>
                <Link href="/contact-us" className="block py-2 text-[#39447B]">Contact Us</Link>
                <Link href="/resources" className="block py-2 text-[#39447B]">Resources</Link>
                <Link href="/our-impact" className="block py-2 text-[#39447B]">Insights</Link>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Desktop Header */}
      <header className="rounded-3xl relative hidden md:block">
        <div className="bg-gradient-to-br from-[#E0E5FF] to-[#B3BFFF] h-20 flex items-center justify-between rounded-t-3xl rounded-tr-3xl px-14">
          <Link href="/">
            <Image src="/logo.png" alt="hero" height={60} width={200} />
          </Link>
          <button
            onClick={handleMenuOpen}
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
                  setShowWhoWeAre(false);
                  setShowHomeClickItems(false);
                }}
                className="bg-black text-white px-4 py-2 rounded-full text-sm"
              >
                Close
              </button>
            </div>

            <div className="flex gap-5 h-72">
              <div className="w-1/2 space-y-5 border border-[#E3E3E3] rounded-2xl p-4">
                <Link href="/" onClick={() => {
                    setShowHomeClickItems(true);
                    setShowWhoWeAre(false);
                    setShowWhatWeDo(false);
                    setShowGetInvolved(false);
                  }}
                  className={`block text-[16px] px-6 py-2 rounded-lg ${showHomeClickItems ? 'bg-[#39447B] text-white' : 'text-[#39447B] hover:text-white hover:bg-[#39447B]'}`}>
                    Home
                </Link>
                <Link 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setShowWhoWeAre(true);
                    setShowWhatWeDo(false);
                    setShowGetInvolved(false);
                    setShowHomeClickItems(false);
                  }}
                  className={`block text-[16px] px-6 py-2 rounded-lg ${showWhoWeAre ? 'bg-[#39447B] text-white' : 'text-[#39447B] hover:text-white hover:bg-[#39447B]'}`}
                >
                  About Us
                </Link>
                <Link 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setShowWhatWeDo(true);
                    setShowWhoWeAre(false);
                    setShowGetInvolved(false);
                    setShowHomeClickItems(false);
                  }}
                  className={`block text-[16px] px-6 py-2 rounded-lg ${showWhatWeDo ? 'bg-[#39447B] text-white' : 'text-[#39447B] hover:text-white hover:bg-[#39447B]'}`}
                >
                  What We Do
                </Link>
                <Link 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setShowGetInvolved(true);
                    setShowWhatWeDo(false);
                    setShowWhoWeAre(false);
                    setShowHomeClickItems(false);
                  }}
                  className={`block text-[16px] px-6 py-2 rounded-lg ${showGetInvolved ? 'bg-[#39447B] text-white' : 'text-[#39447B] hover:text-white hover:bg-[#39447B]'}`}
                >
                  Get Involved
                </Link>
              </div>

              {/* who we are click items */}
              <div className={`w-1/2 grid grid-cols-2 gap-4 ${showWhoWeAre ? '' : 'hidden'}`}>
                <Link href="/who-we-are" className={`bg-white rounded-xl p-4 border ${isActive('/who-we-are') ? 'border-[#39447B] shadow-lg' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                  <h3 className="text-[#39447B] text-lg font-bold mb-2">About Us</h3>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                  </div>
                </Link>

                <Link href="/wall-of-love" className={`bg-white rounded-xl p-4 border ${isActive('/wall-of-love') ? 'border-[#39447B] shadow-lg' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                  <h3 className="text-[#39447B] text-lg font-bold mb-2">Wall of Love</h3>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                  </div>
                </Link>

                <Link href="/media-and-highlights" className={`bg-white rounded-xl p-4 border ${isActive('/media-and-highlights') ? 'border-[#39447B] shadow-lg' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                  <h3 className="text-[#39447B] text-lg font-bold mb-2">Media & Highlights</h3>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                  </div>
                </Link>

                <Link href="/what-we-do" className={`bg-white rounded-xl p-4 border ${isActive('/what-we-do') ? 'border-[#39447B] shadow-lg' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                  <h3 className="text-[#39447B] text-lg font-bold mb-2">What We Do</h3>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                  </div>
                </Link>
              </div>

              {/* what we do click items */}
              <div className={`w-1/2 grid grid-cols-2 gap-4 ${showWhatWeDo ? '' : 'hidden'}`}>
                <Link href="/babu-ki-rasoi" className={`bg-white rounded-xl p-4 border ${isActive('/babu-ki-rasoi') ? 'border-[#39447B] shadow-lg' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                  <h3 className="text-[#39447B] text-lg font-bold mb-2">Babu Ki Rasoi</h3>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                  </div>
                </Link>

                <Link href="/capp" className={`bg-white rounded-xl p-4 border ${isActive('/capp') ? 'border-[#39447B] shadow-lg' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                  <h3 className="text-[#39447B] text-lg font-bold mb-2">Cancer Awareness & <br/> Prevention Program (CAPP)</h3>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                  </div>
                </Link>

                <Link href="/friend-of-anat-aman" className={`bg-white rounded-xl p-4 border ${isActive('/friend-of-anat-aman') ? 'border-[#39447B] shadow-lg' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                  <h3 className="text-[#39447B] text-lg font-bold mb-2">Friends of Anant Aman</h3>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                  </div>
                </Link>

                <Link href="/kala-darpan" className={`bg-white rounded-xl p-4 border ${isActive('/kala-darpan') ? 'border-[#39447B] shadow-lg' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                  <h3 className="text-[#39447B] text-lg font-bold mb-2">Kaladarpan</h3>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                  </div>
                </Link>
              </div>

              {/* get involved click items */}
              <div className={`w-1/2 grid grid-cols-2 gap-4 ${showGetInvolved ? '' : 'hidden'}`}>
                <Link href="/join-us" className={`bg-white rounded-xl p-4 border ${isActive('/join-us') ? 'border-[#39447B] shadow-lg' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                  <h3 className="text-[#39447B] text-lg font-bold mb-2">Join Us <br /> (Intern/Volunteer)</h3>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                  </div>
                </Link>

                <Link href="/contact-us" className={`bg-white rounded-xl p-4 border ${isActive('/contact-us') ? 'border-[#39447B] shadow-lg' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                  <h3 className="text-[#39447B] text-lg font-bold mb-2">Contact Us</h3>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                  </div>
                </Link>

                <Link href="/resources" className={`bg-white rounded-xl p-4 border ${isActive('/resources') ? 'border-[#39447B] shadow-lg' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                  <h3 className="text-[#39447B] text-lg font-bold mb-2">Resources</h3>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                  </div>
                </Link>

                <Link href="/our-impact" className={`bg-white rounded-xl p-4 border ${isActive('/our-impact') ? 'border-[#39447B] shadow-lg' : 'border-[#E3E3E3] shadow-md hover:shadow-lg'} transition-all relative h-[132px]`}>
                  <h3 className="text-[#39447B] text-lg font-bold mb-2">Insights</h3>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-2xl bg-black h-10 w-10 rounded-full text-white flex items-center justify-center">→</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
