import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-2 rounded-3xl">
      <div className="join-section relative mt-2">
        <Image
          src="/footer.png"
          alt="Next.js Logo"
          width={1920}
          height={500}
          sizes="100vw"
        />
        <div className="px-14 absolute top-14 left-0 w-full p-6 text-[#323E7E]">
          <h1 className="text-4xl font-extrabold font-platypi mb-5 text-white text-center">
            Help for their beautiful <br /> future.
          </h1>
          <div className="mb-16 mt-10 text-center">
            <Link
              href="/"
              className="font-platypi text-base bg-white px-6 py-2 rounded-full"
            >
              Show Some Support
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-info flex item-center justify-between px-20 py-10 gap-20">
        <div className="footer-column-1 w-1/2">
          <Image src="/footer-logo.png" alt="hero" height={60} width={200} />
          <p className="text-md font-open-sans font-normal mb-10">
            Anant Aman Social Welfare Society isn’t just an NGO. We are a
            movement, built from 11+ years of walking with those who were left
            behind. We fight hunger. We spread awareness. We empower people. But
            more than anything — we show up when no one else does.
          </p>
          <hr></hr>
          <div className="flex items-center justify-between mt-5">
            <Link href="/" className="text-md font-open-sans font-normal">
              Contact Us
            </Link>
            <Link href="/" className="text-md font-open-sans font-normal">
              Privacy Policy
            </Link>
            <Link href="/" className="text-md font-open-sans font-normal">
              Terms & Conditions
            </Link>
          </div>
          <p className="text-sm font-open-sans font-normal mt-10">
            Design & Developed By Varlyq Technologies 2025
          </p>
        </div>

        <div className="footer-column-2 w-1/2">
          <h1 className="text-[20px] font-open-sans font-normal text-[#323E7E] mb-8">
            Social Buzz
          </h1>
          <div className="flex items-center gap-3 mb-5">
            <Link
              href="/"
              className="w-40 text-center font-open-sans text-normal px-6 py-2 text-[16px] text-[#323E7E] border border-[#323E7E] rounded-lg"
            >
              Instagram
            </Link>
            <Link
              href="/"
              className="w-40 text-center font-open-sans text-normal px-6 py-2 text-[16px] text-[#323E7E] border border-[#323E7E] rounded-lg"
            >
              Facebook
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="w-40 text-center font-open-sans text-normal px-6 py-2 text-[16px] text-[#323E7E] border border-[#323E7E] rounded-lg"
            >
              Linkedin
            </Link>
            <Link
              href="/"
              className="w-40 text-center font-open-sans text-normal px-6 py-2 text-[16px] text-[#323E7E] border border-[#323E7E] rounded-lg"
            >
              Youtube
            </Link>
          </div>
        </div>

        <div className="footer-column-3 w-1/2">
          <Link href="/" className="text-md font-open-sans font-normal">
            Home
          </Link>
          <hr className="mb-2 mt-2"></hr>
          <Link href="/" className="text-md font-open-sans font-normal mb-2">
            Who We Are
          </Link>
          <hr className="mb-2 mt-2"></hr>
          <Link href="/" className="text-md font-open-sans font-normal mb-2">
            What We Do
          </Link>
          <hr className="mb-2 mt-2"></hr>
          <Link href="/" className="text-md font-open-sans font-normal mb-2">
            Cancer Awareness & Prevention Program (CAPP)
          </Link>
          <hr className="mb-2 mt-2"></hr>
          <Link href="/" className="text-md font-open-sans font-normal mb-2">
            Get Involved
          </Link>
          <hr className="mb-2 mt-2"></hr>
          <Link href="/" className="text-md font-open-sans font-normal mb-2">
            Media & Highlights
          </Link>
          <hr className="mb-2 mt-2"></hr>
          <Link href="/" className="text-md font-open-sans font-normal mb-2">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}
