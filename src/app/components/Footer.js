import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-2 rounded-3xl">
      {/* Mobile-only footer */}
      <div className="block md:hidden px-4 py-6">
        {/* Main navigation links */}
        <div className="flex flex-col items-start w-full mb-6">
          <Link href="/" className="text-sm font-open-sans font-normal text-[#323E7E] py-3">Home</Link>
          <hr className="w-full border-[#efefef]" />
          <Link href="/who-we-are" className="text-sm font-open-sans font-normal text-[#323E7E] py-3">Who We Are</Link>
          <hr className="w-full border-[#efefef]" />
          <Link href="/what-we-do" className="text-sm font-open-sans font-normal text-[#323E7E] py-3">What We Do</Link>
          <hr className="w-full border-[#efefef]" />
          <Link href="/capp" className="text-sm font-open-sans font-normal text-[#323E7E] py-3">Cancer Awareness & Prevention Program (CAPP)</Link>
          <hr className="w-full border-[#efefef]" />
          <Link href="/" className="text-sm font-open-sans font-normal text-[#323E7E] py-3">Get Involved</Link>
          <hr className="w-full border-[#efefef]" />
          <Link href="/" className="text-sm font-open-sans font-normal text-[#323E7E] py-3">Media & Highlights</Link>
          <hr className="w-full border-[#efefef]" />
          <Link href="/" className="text-sm font-open-sans font-normal text-[#323E7E] py-3">Blog</Link>
        </div>

        {/* Contact and policy links */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Link href="/" className="text-sm font-open-sans font-normal text-[#323E7E]">Contact Us</Link>
          <Link href="/" className="text-sm font-open-sans font-normal text-[#323E7E]">Privacy Policy</Link>
          <Link href="/" className="text-sm font-open-sans font-normal text-[#323E7E]">Terms & Conditions</Link>
        </div>

        <div className="flex justify-center mb-4">
          <Image src="/logo.png" alt="hero" height={60} width={200} />
        </div>

        {/* Horizontal line */}
        <hr className="w-full mb-4" />

        {/* Copyright */}
        <div className="text-center mt-2">
          <p className="text-sm font-open-sans font-semibold text-[#323E7E]">
            Design & Developed By Varlyq Technologies 2025
          </p>
        </div>
      </div>

      <div className="footer-info hidden md:flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-4 md:px-20 py-6 md:py-10 gap-8 md:gap-20">
        <div className="footer-column-1 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <Image src="/footer-logo.png" alt="hero" height={40} width={120} className="mb-4" />
          <p className="text-sm md:text-md font-open-sans font-normal mb-6 md:mb-10">
            Anant Aman Social Welfare Society isn’t just an NGO. We are a movement, built from 11+ years of walking with those who were left behind. We fight hunger. We spread awareness. We empower people. But more than anything — we show up when no one else does.
          </p>
          <hr className="w-full mb-4 md:mb-0" />
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full mt-4 md:mt-5 gap-2 md:gap-0">
            <Link href="/contact-us" className="text-sm md:text-md font-open-sans font-normal">Contact Us</Link>
            <Link href="/" className="text-sm md:text-md font-open-sans font-normal">Privacy Policy</Link>
            <Link href="/" className="text-sm md:text-md font-open-sans font-normal">Terms & Conditions</Link>
          </div>
          <p className="text-xs md:text-sm font-open-sans font-normal mt-6 md:mt-10">
            Design & Developed By Varlyq Technologies 2025
          </p>
        </div>

        <div className="footer-column-2 w-full md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0">
          <h1 className="text-lg md:text-[20px] font-open-sans font-normal text-[#323E7E] mb-4 md:mb-8">Social Buzz</h1>
          <div className="flex flex-col md:flex-row items-center gap-3 mb-3 md:mb-5">
            <Link href="https://instagram.com/anantamansws" className="w-32 md:w-40 text-center font-open-sans text-normal px-4 md:px-6 py-2 text-[14px] md:text-[16px] text-[#323E7E] border border-[#323E7E] rounded-lg">Instagram</Link>
            <Link href="https://facebook.com/AnantAmanSws" className="w-32 md:w-40 text-center font-open-sans text-normal px-4 md:px-6 py-2 text-[14px] md:text-[16px] text-[#323E7E] border border-[#323E7E] rounded-lg">Facebook</Link>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Link href="https://www.linkedin.com/company/anantamansws/" className="w-32 md:w-40 text-center font-open-sans text-normal px-4 md:px-6 py-2 text-[14px] md:text-[16px] text-[#323E7E] border border-[#323E7E] rounded-lg">Linkedin</Link>
            <Link href="https://www.youtube.com/@anantamansws" className="w-32 md:w-40 text-center font-open-sans text-normal px-4 md:px-6 py-2 text-[14px] md:text-[16px] text-[#323E7E] border border-[#323E7E] rounded-lg">Youtube</Link>
          </div>
        </div>

        <div className="footer-column-3 w-full md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0">
          <Link href="/" className="text-sm md:text-md font-open-sans font-normal">Home</Link>
          <hr className="w-full mb-2 mt-2" />
          <Link href="/who-we-are" className="text-sm md:text-md font-open-sans font-normal mb-2">Who We Are</Link>
          <hr className="w-full mb-2 mt-2" />
          <Link href="/what-we-do" className="text-sm md:text-md font-open-sans font-normal mb-2">What We Do</Link>
          <hr className="w-full mb-2 mt-2" />
          <Link href="/capp" className="text-sm md:text-md font-open-sans font-normal mb-2">Cancer Awareness & Prevention Program (CAPP)</Link>
          <hr className="w-full mb-2 mt-2" />
          <Link href="/" className="text-sm md:text-md font-open-sans font-normal mb-2">Get Involved</Link>
          <hr className="w-full mb-2 mt-2" />
          <Link href="/" className="text-sm md:text-md font-open-sans font-normal mb-2">Media & Highlights</Link>
          <hr className="w-full mb-2 mt-2" />
          <Link href="/" className="text-sm md:text-md font-open-sans font-normal mb-2">Blog</Link>
        </div>
      </div>
    </footer>
  );
}
