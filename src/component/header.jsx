"use client";

import React, { useState } from "react";
import Link from "next/link";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="w-full flex items-center bg-primary">
      <div className="w-full flex justify-between items-center px-7 mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src="/images/logo.jpeg" className="h-[100px] w-auto" alt="Logo" />
        </Link>

        {/* Navigation Menu */}
        <div className="flex items-center">
          <ul className="list-none hidden sm:flex flex-row gap-10 mr-3">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-red-700 text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Search Input (Hidden on Small Screens) */}
         
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? faXmark : faBars}
            alt="menu"
            className="w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[15px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false); // Close the menu when a link is clicked
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
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
