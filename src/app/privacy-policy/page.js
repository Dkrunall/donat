'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-platypi text-center mb-8">We respect your privacy. And we protect it.</h1>
        
        <p className="font-open-sans text-sm md:text-base mb-6">Last Updated: {currentDate}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-platypi mb-4">1. Introduction</h2>
          <p className="font-open-sans text-sm md:text-base">Anant Aman Social Welfare Society is committed to safeguarding your personal information. This policy explains how we collect, use, and protect your data when you interact with our website, donate, or join our community.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-platypi mb-4">2. What We Collect</h2>
          <p className="font-open-sans text-sm md:text-base">We may collect the following information:</p>
          <ul className="font-open-sans text-sm md:text-base list-disc pl-6 mt-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>City, state, or location</li>
            <li>Donation/payment details (secured & encrypted)</li>
            <li>Volunteer or contact form responses</li>
            <li>Social media handles (optional)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-platypi mb-4">3. How We Use Your Information</h2>
          <p className="font-open-sans text-sm md:text-base">Your data helps us:</p>
          <ul className="font-open-sans text-sm md:text-base list-disc pl-6 mt-2">
            <li>Process donations</li>
            <li>Issue receipts (especially for 80G)</li>
            <li>Share event or campaign updates</li>
            <li>Contact you if you apply to volunteer or intern</li>
            <li>Respond to your queries or feedback</li>
            <li>Improve our services and outreach</li>
          </ul>
          <p className="font-open-sans text-sm md:text-base mt-4">We will never sell or rent your personal information.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-platypi mb-4">4. Security of Your Data</h2>
          <p className="font-open-sans text-sm md:text-base">We use secure platforms for processing donations and managing data. Sensitive information (like bank or UPI details) is handled through trusted payment gateways (e.g., Razorpay, PayU) and is not stored by us.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-platypi mb-4">5. Use of Cookies</h2>
          <p className="font-open-sans text-sm md:text-base">Our website may use cookies to improve user experience. You can manage or block cookies anytime in your browser settings.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-platypi mb-4">6. Third-Party Services</h2>
          <p className="font-open-sans text-sm md:text-base">In some cases, we may use third-party tools (e.g., WhatsApp, email marketing platforms, analytics) to improve our services. These platforms have their own privacy policies, which we recommend reviewing.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-platypi mb-4">7. Your Rights</h2>
          <p className="font-open-sans text-sm md:text-base">You have the right to:</p>
          <ul className="font-open-sans text-sm md:text-base list-disc pl-6 mt-2">
            <li>Request a copy of your data</li>
            <li>Ask us to update or delete your data</li>
            <li>Opt out of emails or contact at any time</li>
          </ul>
          <p className="font-open-sans text-sm md:text-base mt-4">To exercise these rights, email us at: anantaman.sws@gmail.com</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-platypi mb-4">8. Policy Updates</h2>
          <p className="font-open-sans text-sm md:text-base">We may update this privacy policy periodically. Please check this page for the latest version. Your continued use of the website indicates acceptance of this policy.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-platypi mb-4">9. Contact Us</h2>
          <p className="font-open-sans text-sm md:text-base">If you have questions about this Privacy Policy or how we handle your data:</p>
          <p className="font-open-sans text-sm md:text-base mt-2">📧 Email: anantaman.sws@gmail.com</p>
          <p className="font-open-sans text-sm md:text-base">📞 Phone: +91-77719-97475</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}