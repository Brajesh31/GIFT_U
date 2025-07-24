import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-100 text-gray-700 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold">
             <img src ="/assets/logo.png" alt="Logo" className="h-10 w-auto" />
          </h2>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#footer" className="cursor-pointer">About Us</a></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/gift-ideas">Gift Ideas</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-2">
            <li><Link to="/gift-guides">Gift Guides</Link></li>
            <li><Link to="/support">Customer Support</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="font-semibold mb-2">Subscribe</h3>
          <p className="text-sm">Join our newsletter for updates & exclusive offers.</p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border rounded-l w-full focus:outline-none"
            />
            <button className="px-4 py-2 bg-black text-white rounded-r">Subscribe</button>
          </div>
          <p className="text-xs mt-2">
            By subscribing, you agree to our{" "}
            <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-t pt-4 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>© 2025 Gift Suggestions. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms-of-service">Terms of Service</Link>
          <span>|</span>
          <Link to="/cookie-settings">Cookie Settings</Link>
        </div>
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-700 hover:text-black"><FaFacebookF /></a>
          <a href="#" className="text-gray-700 hover:text-black"><FaInstagram /></a>
          <a href="#" className="text-gray-700 hover:text-black"><FaLinkedinIn /></a>
          <a href="#" className="text-gray-700 hover:text-black"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
