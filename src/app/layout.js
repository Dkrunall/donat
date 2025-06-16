import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import MobileNavigation from "./components/MobileNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Import Open Sans font
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

// Import Platypi font locally
const platypi = localFont({
  src: '../fonts/Platypi.ttf',
  variable: '--font-platypi',
});

export const metadata = {
  title: "Anant Aman Social Welfare Society",
  description: "Social Welfare Society",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} ${platypi.variable} antialiased`}
      >
        {children}
        <MobileNavigation />
      </body>
    </html>
  );
}
