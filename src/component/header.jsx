"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../constants";
import { logo } from "../assets";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const pathname = usePathname(); // Get current route
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center bg-primary">
      <div className="w-full flex justify-between items-center px-7 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.jpeg" className="h-[100px] w-auto" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center">
          <ul className="list-none hidden sm:flex flex-row gap-10 mr-3">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <Link
                  href={nav.id}
                  className={`text-[18px] font-medium cursor-pointer hover:text-red-700 ${
                    pathname === nav.id ? "text-red-800" : "text-secondary"
                  }`}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <FontAwesomeIcon
            icon={toggle ? faXmark : faBars}
            className="text-black text-2xl cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Navigation */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-white shadow-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.id}
                    className={`font-poppins font-medium text-[15px] cursor-pointer ${
                      pathname === link.id ? "text-black font-bold" : "text-secondary"
                    }`}
                    onClick={() => setToggle(false)} // Close menu
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
