import React from "react";
import { Film, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#4338ca] text-white py-10 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-sm">
        {/* Left Section: Logo & Copyright */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-lg font-bold italic tracking-wide">
            <Film className="w-5 h-5" />
            <span>Movie Z</span>
          </div>
          <p className="text-zinc-200 text-xs sm:text-sm">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>

        {/* Right Section: Contact & Socials */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          {/* Contact Information */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white">Contact Information</h4>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-1 text-zinc-200" />
              <div>
                <p className="text-zinc-200 font-medium">Email:</p>
                <a
                  href="mailto:support@movieZ.com"
                  className="hover:underline text-white">
                  support@movieZ.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 mt-1">
              <Phone className="w-4 h-4 mt-1 text-zinc-200" />
              <div>
                <p className="text-zinc-200 font-medium">Phone:</p>
                <a
                  href="tel:+976111234567"
                  className="hover:underline text-white">
                  +976 (11) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Follow us */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white">Follow us</h4>
            <div className="flex sm:flex-col flex-wrap gap-3 font-medium">
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                Twitter
              </a>
              <a href="#" className="hover:underline">
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
