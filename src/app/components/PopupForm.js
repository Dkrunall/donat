'use client';

import { useState } from 'react';

export default function PopupForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-[#F8F9FF] to-[#E6EAFF] rounded-3xl p-8 max-w-lg w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-black hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-platypi font-bold mb-2">Want to write to us directly?</h2>
        <p className="text-gray-600 mb-6">Fill the form and we&apos;ll get back to you shortly.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-6 py-4 rounded-full border-none shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#323E7E] focus:border-transparent"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full px-6 py-4 rounded-full border-none shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#323E7E] focus:border-transparent"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-6 py-4 rounded-full border-none shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#323E7E] focus:border-transparent"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="w-full px-6 py-4 rounded-3xl border-none shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#323E7E] focus:border-transparent resize-none"
              required
            ></textarea>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-auto bg-[#323E7E] text-white font-semibold px-10 py-3 rounded-full hover:bg-opacity-90 transition-all mx-auto block"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}