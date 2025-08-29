"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">GlowRx</h3>
          <p className="text-gray-600">
            Clean, clinically formulated supplements and beauty products designed for everyday confidence.
       Subscribe for tips and updates.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between md:justify-center md:space-x-12">
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 mb-2">Products</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition">Hair</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Skin</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Health</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Newsletter */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 mb-2">Follow Us</h4>
          <div className="flex space-x-4 text-gray-600">
            <a href="#" className="hover:text-gray-900 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-900 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-900 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-900 transition"><FaLinkedinIn /></a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GlowRx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
