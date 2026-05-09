import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-[1500px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand & About */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold mb-3 text-white">
              CS — Ticket System
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Download Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Social Links</h3>
            <div className="flex gap-5 mb-6">
              <a
                href="#"
                className="text-2xl hover:text-gray-300 transition-colors"
              >
                𝕏
              </a>
              <a
                href="#"
                className="text-2xl hover:text-gray-300 transition-colors"
              >
                📘
              </a>
              <a
                href="#"
                className="text-2xl hover:text-gray-300 transition-colors"
              >
                📷
              </a>
              <a
                href="#"
                className="text-2xl hover:text-gray-300 transition-colors"
              >
                🔗
              </a>
            </div>

            <p className="text-sm mb-1 text-gray-400">Support</p>
            <a
              href="mailto:support@cst.com"
              className="text-blue-400 hover:text-blue-300 hover:underline"
            >
              support@cst.com
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2025 CS — Ticket System. All rights reserved.
          <span className="block md:inline mt-1 md:mt-0">
            {" "}
            Footer section created by Grok
          </span>
        </div>
      </div>
    </footer>
  );
};
React;
export default Footer;
