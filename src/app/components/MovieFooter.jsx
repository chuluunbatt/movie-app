import React from "react";
import { Film, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#4338ca] mt-15 text-white py-10    ">
      <div className=" mx-20 px-20   flex flex-col md:flex-row justify-between gap-8 text-sm">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-lg font-bold italic tracking-wide">
            <Film className="w-7 h-7" />
            <span className="text-2xl">Movie Z</span>
          </div>
          <p className="text-zinc-200 text-3xl ">
            © 2026 Movie Z. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-20">
          <div className="flex flex-col text-xl  gap-3">
            <h4 className="font-semibold text-white text-2xl  ">
              Contact Information
            </h4>

            <div className="flex items-start gap-3">
              <Mail className="w-7 h-7 mt-1 text-zinc-200" />
              <div>
                <p className="text-zinc-200 font-medium">Email:</p>
                <a
                  href="chuluunbatbatochir96@gmail.com"
                  className="hover:underline text-white">
                  chuluunbatbatochir96gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-1">
              <Phone className="w-6 h-6 mt-1 pb-22 text-zinc-200" />
              <div>
                <p className="text-zinc-200 font-medium ">Phone:</p>
                <a
                  href="tel:+97688802337"
                  className="hover:underline text-white">
                  +976 88802337
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white text-2xl">Follow us</h4>
            <div className="flex  flex-wrap gap-3 text-xl  font-medium">
              <a href="https://www.facebook.com/" className="hover:underline">
                Facebook
              </a>
              <a href="https://www.instagram.com/" className="hover:underline">
                Instagram
              </a>
              <a href="https://x.com/" className="hover:underline">
                Twitter X
              </a>
              <a href="https://www.youtube.com/" className="hover:underline">
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
