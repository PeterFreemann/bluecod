"use client";

import Footer from "@/component/Footer";
import GetUpdates from "@/component/GetUpdates";
import Header from "@/component/header";
import UnderHeader from "@/component/UnderHeader";
import React, { useState } from "react";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";


const episodesData = [
  {
    id: 1,
    title: "The Funeral Experience – the Good, the Bad, and the Ugly",
    date: "SEPT 3, 2023",
    min: "28 MINS",
    image: "/images/trending.jpeg",
    subtitle: "Inspiring Talk",
  },
  {
    id: 2,
    title: "Relationship Button - Starting Afresh as a Widow",
    date: "AUG 29, 2023",
    min: "45 MINS",
    image: "/images/trending.jpeg",
    subtitle:
      "We respect and appreciate peoples’ decisions regarding relationships and love life...",
  },
  {
    id: 3,
    title: "Coping with Grief (Survival Tips)",
    date: "AUG 7, 2023",
    min: "30 MINS",
    image: "/images/trending.jpeg",
    subtitle:
      "The challenges widows go through especially the less privileged ones...",
  },
  {
    id: 4,
    title: "Widow Support Systems",
    date: "JULY 15, 2023",
    min: "35 MINS",
    image: "/images/trending.jpeg",
    subtitle: "Navigating life with the right community...",
  },
  {
    id: 5,
    title: "Life After Loss",
    date: "JUNE 21, 2023",
    min: "25 MINS",
    image: "/images/trending.jpeg",
    subtitle: "Exploring how widows find new meaning and strength...",
  },
  {
    id: 6,
    title: "Breaking Cultural Myths",
    date: "MAY 30, 2023",
    min: "40 MINS",
    image: "/images/trending.jpeg",
    subtitle: "Challenging age-old traditions affecting widows...",
  },
  {
    id: 7,
    title: "Parenting Alone",
    date: "APRIL 9, 2023",
    min: "38 MINS",
    image: "/images/trending.jpeg",
    subtitle: "Real-life experiences of solo parenting as a widow...",
  },
  {
    id: 8,
    title: "Healing through Art",
    date: "MAR 15, 2023",
    min: "33 MINS",
    image: "/images/trending.jpeg",
    subtitle: "Using creativity to process grief and heal...",
  },
  {
    id: 9,
    title: "Finding Faith Again",
    date: "FEB 5, 2023",
    min: "29 MINS",
    image: "/images/trending.jpeg",
    subtitle: "Rediscovering spirituality after loss...",
  },
];

export default function EpisodesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const episodesPerPage = 7;

  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = episodesData.slice(
    indexOfFirstEpisode,
    indexOfLastEpisode
  );
  const totalPages = Math.ceil(episodesData.length / episodesPerPage);

  return (
    <section>
      {/* Hero Section */}
      <Header />
      <UnderHeader />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-10 md:px-10 px-5  bg-gradient-to-b from-[#2B3221] to-[#F2F2F200] mb-12">
        <div className="flex justify-center items-center md:col-span-2">
          <img
            src="/images/trending.jpeg"
            className="object-cover w-full h-auto"
            alt="The Funeral Experience – Podcast"
          />
        </div>
        <div className="md:col-span-4 flex flex-col justify-center text-white">
          <p className="text-sm">SEPT 3, 2023</p>
          <h1 className="text-[20px] font-bold mb-5">
            The Funeral Experience – the Good, the Bad, and the Ugly
          </h1>
          <p className="text-[15px] font-medium">
            The struggles of a widow begin immediately when her husband dies;
            she is immediately made to go through various traditional rites,
            disregarding her pain and process of grieving. Most people in Africa
            argue that those rituals are intended to protect widows and not to
            harm them. This doesn’t appear to be the case as some of these
            practices and beliefs tend to dehumanise the very essence of their
            womanhood. In this episode, we will talk about these rites, possible
            solutions to the bad sides, and how to manage the ugly sides. The
            guest on this episode is Ms Grace Udodong.
          </p>
          <div>
          <div>
          <div className="mt-4">
            <div className="flex justify-between text-white text-sm mb-1">
              <span>00:15</span>
              <div>
              <span>28:04</span>
              <FontAwesomeIcon icon={faVolumeUp} className="ml-2" />

              </div>
              

            </div>
            
            <div className="w-full h-2 bg-white/30 rounded-full">
              <div className="h-full bg-white rounded-full w-[25%]"></div>
            </div>
          </div>
          <div>
            
          </div>
          <div>
           <div className="mt-4 flex justify-between ">
           <div >
           <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11 19V5l-9 7 9 7zm1-14v14l9-7-9-7z" />
              </svg>
            </button>
            <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition mr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
    <button className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4 5v14l8.5-7L4 5zm9 0v14l8.5-7L13 5z" />
      </svg>
    </button>
           </div>
           <div>
            <div>
                              <FontAwesomeIcon
                                icon={faShare}
                                className="text-black h-[16px] w-[16px] mr-4"
                              />
                              <FontAwesomeIcon
                                icon={faGift}
                                className="text-black h-[16px] w-[16px]"
                              />
                            </div>

           </div>
           </div>
          </div>
          <div>

          </div>
          </div>
          </div>
        </div>
      </div>

      {/* Episodes List */}
      <div className="md:px-5 px-3">
        <h2 className="text-xl font-semibold mb-6">Next Episode in Queue</h2>

        <div className="space-y-10 grid grid-cols-1 md:grid-cols-4 gap-4">
          {currentEpisodes.map((episode) => (
            <div key={episode.id} className="h-[442px]">
              <img
                src={episode.image}
                alt={episode.title}
                className="h-[288px] w-full object-cover"
              />
              <div className="flex flex-row gap-2 p-1 py-4">
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
                <div className="flex-[3]">
                  <h3 className="text-[18px] font-bold text-black">
                    {episode.title}
                  </h3>
                  <div className="py-2 text-sm text-gray-700 flex gap-2">
                    <span>{episode.date}</span> | <span>{episode.min}</span>
                  </div>
                  <p className="text-[14px] text-black">{episode.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        

        
        
      </div>
      {/* Get Updates Section */}

      <GetUpdates />

      
      <div className="mt-10 flex justify-center gap-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-[#2B3221] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}
