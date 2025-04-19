import React from "react";




export default function Footer() {
  return (
    <div className="py-10 px-4 bg-[#282828] text-white mt-15">
      {/* Logo */}
      <div className="flex mb-6 justify-center md:justify-start">
        <img
          src="/images/darklogo.png"
          alt="Logo"
          className="h-[64px] w-[140px] object-cover filter grayscale"
        />
      </div>

      {/* Menu Grid */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-1 gap-4 text-[14px] font-[700] text-center">
        {[
          "HOME",
          "ABOUT US",
          "CONTACT US",
          "ALL PODCAST",
          "ADVERTISE",
          "RESOURCES",
          "CONNECT WITH ABR",
        ].map((item, index, array) => (
          <div
            key={index}
            className={`relative px-2 ${
              index !== array.length - 1
                ? "sm:after:content-[''] sm:after:absolute sm:after:top-1/2 sm:after:translate-y-[-50%] sm:after:right-0 sm:after:h-5 sm:after:w-[1px] sm:after:bg-gray-400"
                : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-6xl  mt-10 flex flex-col md:flex-row gap-4 items-start text-gray-400">
        <p className="mb-2 md:mb-0 text-[14px]">© 2025 Africa Business Radio. All rights reserved.</p>

        {/* Optional: Right side like social icons or links */}
        <div className="flex gap-4 text-[14px]">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Use</a>
        </div>
      </div>
    </div>
  );
}
