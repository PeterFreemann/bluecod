"use client";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faBoxes } from "@fortawesome/free-solid-svg-icons";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";

function UnderHeader() {
  return (
    <div className="under grid grid-cols-1 lg:grid-cols-2 justify-end items-center bg-black ">
      {/* Left Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start h-full">
        <div className="header justify-between flex items-center md:w-[770px]  px-4">
          {/* Left Content */}
          <div className="flex align-center justify-center">
            {/* Icon */}
            <div className="bg-red-600 rounded-full flex items-center justify-center h-[50px] w-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            <div className="flex align-center justify-center flex-col ml-4">
              <h1 className="md:text-[18px text-[12px] font-[800] text-white text-left">
                Listen to ABR Live Radio
              </h1>
              <h1 className="text-green-900 text-[13px] font-[800] flex items-center gap-2 mt-1">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                </span>
                On Air
              </h1>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-end">
            <h1 className="text-white text-[13px] font-[600] flex items-center">
              <FontAwesomeIcon
                icon={faCalendar}
                className="text-white-500 mr-2"
              />
              View schedules
            </h1>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="py-4 bg-black flex justify-end items-center h-full">
        <ul className="text-[15px] text-white flex gap-4 font-bold font-[700] font-montserrat">
          <li className="font-montserrat pr-4 pl-4 md:pl-0 border-r border-white last:border-0">
            <Link href="/latest-news" className="flex items-center">
              <span className="hidden sm:inline">
                <FontAwesomeIcon
                  icon={faBook}
                  className="text-white text-xl mr-2"
                />
              </span>
              Latest News
            </Link>
          </li>
          <li className="pr-4 border-r border-white last:border-0">
            <Link href="/new-episode" className="flex items-center">
              <span className="hidden sm:inline">
                <FontAwesomeIcon
                  icon={faMicrophone}
                  className="text-white text-xl mr-2"
                />
              </span>
              New Episode
            </Link>
          </li>
          <li className="pr-4 border-r border-white last:border-0">
            <Link href="/services" className="flex items-center">
              <span className="hidden sm:inline">
                <FontAwesomeIcon icon={faBoxes} className="text-white mr-2" />
              </span>
              Our Services
            </Link>
          </li>
          <li className="pr-4 last:border-0">
            <Link href="/podcasts" className="flex items-center">
              <span className="hidden sm:inline">
                <FontAwesomeIcon icon={faPodcast} className="text-white mr-2" />
              </span>
              All Podcast
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UnderHeader;
