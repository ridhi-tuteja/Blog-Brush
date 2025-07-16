import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4 md:px-6 font-sans">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around gap-x-8 gap-y-10">
        {/* Company Column */}
        {/* Changed text-left to text-center for all sizes */}
        <div className="flex-1 min-w-[150px] text-center">
          <h4 className="text-white font-bold text-lg mb-4">COMPANY</h4>
          <ul className="space-y-2">
            <li><a href="/features" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Features</a></li>
            <li><a href="/pricing" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Pricing</a></li>
            <li><a href="/affiliate-program" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Affiliate Program</a></li>
            <li><a href="/press-kit" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Press Kit</a></li>
          </ul>
        </div>

        {/* Support Column */}
        {/* Changed text-left to text-center for all sizes */}
        <div className="flex-1 min-w-[150px] text-center">
          <h4 className="text-white font-bold text-lg mb-4">SUPPORT</h4>
          <ul className="space-y-2">
            <li><a href="/account" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Account</a></li>
            <li><a href="/help" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Help</a></li>
            <li><a href="/contact-us" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Contact Us</a></li>
            <li><a href="/customer-support" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Customer Support</a></li>
          </ul>
        </div>

        {/* Legals Column */}
        {/* Changed text-left to text-center for all sizes */}
        <div className="flex-1 min-w-[150px] text-center">
          <h4 className="text-white font-bold text-lg mb-4">LEGALS</h4>
          <ul className="space-y-2">
            <li><a href="/terms-conditions" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Terms & Conditions</a></li>
            <li><a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Privacy Policy</a></li>
            <li><a href="/licensing" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Licensing</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 pt-5 border-t border-gray-700 text-sm text-gray-500">
        <p>&copy; Copyright 2023. All Rights Reserved by DevUI.</p>
      </div>
    </footer>
  );
};

export default Footer;