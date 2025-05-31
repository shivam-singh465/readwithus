import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Copyright } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 font-inter">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand/About */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">ReadWithUs</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Exploring the world of tech, creativity, and lifestyle. Join us on our journey of discovery.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-orange-400 transition-colors duration-300">Home</a></li>
              <li><a href="/blog" className="hover:text-orange-400 transition-colors duration-300">Blog</a></li>
              <li><a href="/about" className="hover:text-orange-400 transition-colors duration-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-orange-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Categories / Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="/categories/technology" className="hover:text-orange-400 transition-colors duration-300">Technology</a></li>
              <li><a href="/categories/productivity" className="hover:text-orange-400 transition-colors duration-300">Productivity</a></li>
              <li><a href="/privacy-policy" className="hover:text-orange-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-orange-400 transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Social Media & Newsletter (Optional) */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
            {/* Optional Newsletter Signup */}
{/*             
            <p className="text-sm text-gray-400 mb-2">Subscribe to our newsletter:</p>
            <form className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 rounded-l-md text-sm text-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md text-sm font-semibold transition-colors duration-300"
              >
                Go
              </button>
            </form>
            */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 flex items-center">
            <Copyright size={16} className="mr-1.5 inline" /> {currentYear} YourBlogName. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 text-sm text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center group"
            aria-label="Back to top"
          >
            Back to Top
            <ArrowUp size={18} className="ml-2 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;