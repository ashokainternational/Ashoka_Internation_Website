// components/FloatingWhatsApp.tsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = "256755968455";
  const message = "Hello Ashoka International! I have an enquiry.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50"
      aria-label="Chat on WhatsApp"
    >
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M380.9 97.1C339-13.4 272.3-23.9 224 0 175.7-23.9 109 13.4 67.1 97.1c-26.1 49.2-22.5 109.7 9.1 156.6l-38.6 115.3 118.1-38.6c46.9 31.6 107.4 35.2 156.6 9.1 83.7-41.9 110.4-108.6 86.5-156.6-23.9-48.3-47.8-75.6-47.8-75.6zm-58 170c-3.2 8.8-17.8 17.4-25.6 18.7-6.9 1.1-14.3 1.5-28.1-2.5-31.5-8.8-51.9-40.6-54.1-43.6-2.2-3-18-27.4-18-52.4 0-24.9 12.7-37 17.2-41.6 4.4-4.5 9.5-5.7 13.5-5.7 3.5 0 6.8 0 9.8 0 3.2 0 4.8 0 6.9 0 2 0 5.1-3.1 7.7-5.1 2.6-2 5.7-2.6 8.3-2.6 2.6 0 5.7.3 8.7 2.6 2.6 2.1 5.1 5.1 6 6.3 1 1.2 1 2.5 1 3.7 0 1.2-.3 2-1.2 3.6-.8 1.5-3.3 6-4.5 8.1-1.2 2.2-2.3 2.9-3.8 4.5-1.5 1.7-3 3.8-5.1 6.1-2.1 2.3-4.3 4.8-5.7 6.4-1.4 1.5-3.7 3.6-6.2 5.7-2.5 2-4.8 3.5-6.5 4.7-1.7 1.2-4.2 3.1-7.2 4.7-3 1.6-6 2.6-7.7 3.2-1.7.7-5.7 1.6-10.5 1.6-4.8 0-8.6-1.4-12-4.3-3.3-2.9-5.8-8.4-5.8-14.5 0-6.2 1.6-9.4 4.4-12.7 2.9-3.3 6.6-6.4 11.3-11.3 4.7-4.9 9.2-10.2 10.2-11.3 1-1.1 2-2.2 3.1-3.2 1.1-1 2.3-1.8 3.7-2.4 1.4-.6 3.2-.8 4.8-.8 1.6 0 3.4.2 5 .8 1.6.6 3 1.6 4.1 3 1.1 1.4 1.6 3.3 1.6 5.3 0 2-.4 4.1-1.2 6.3z" />
      </svg> */}
      <FaWhatsapp className="h-6 w-6" />
    </a>
  );
};

export default FloatingWhatsApp;
