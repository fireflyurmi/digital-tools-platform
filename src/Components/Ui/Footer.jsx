import React from 'react';
import facebookIcon from "../../assets/Facebook.png";
import instagramIcon from "../../assets/Instagram.png";
import twitterIcon from "../../assets/Twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-gray-400 py-10 px-6 w-full">
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-20 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-white text-3xl font-bold mb-6">DigiTools</h2>
            <p className="leading-relaxed text-[15px] max-w-xs">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Product</h4>
            <ul className="space-y-4 text-[14px]">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-4 text-[14px]">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Resources</h4>
            <ul className="space-y-4 text-[14px]">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <div className="flex flex-row gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition p-2"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition p-2"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition p-2"
              >
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-500 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px]">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
