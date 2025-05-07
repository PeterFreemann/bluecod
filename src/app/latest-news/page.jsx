"use client";

import React, { useState } from "react";
import Headers from "../../component/header";
import UnderHeader from "../../component/UnderHeader";
import Footer from "../../component/Footer";

const Episodes = [
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
  // Add more episodes as needed
];

const EPISODES_PER_PAGE = 2;

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Episodes.length / EPISODES_PER_PAGE);

  const currentEpisodes = Episodes.slice(
    (currentPage - 1) * EPISODES_PER_PAGE,
    currentPage * EPISODES_PER_PAGE
  );

  return (
    <section>
      <div>
        <Headers />
        <UnderHeader />
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-10 bg-gradient-to-b from-[#2B3221] to-[#F2F2F200] mb-12">
          {/* Hero section */}
          <div className="flex justify-center items-center md:col-span-2">
            <img
              src="/images/trending.jpeg"
              className="object-cover w-full h-auto"
              alt=""
            />
          </div>
          <div className="md:col-span-4 flex flex-col justify-center text-white">
            <h1 className="text-2xl font-bold mb-5">PODCAST</h1>
            <h1 className="text-xl font-semibold">Hope For the Widow</h1>
            <p className="text-base">
              The show aims to shed light on the challenges faced by less
              privileged widows...
            </p>
            <div className="mt-4">
              <h2 className="text-lg font-medium mb-2">Available On</h2>
              <div className="flex gap-4">
                <img src="/images/spotify.png" className="h-[30px] w-[30px]" alt="Apple Podcasts" />
                <img src="/images/spoti.png" className="h-[30px] w-[30px]" alt="Google Podcasts" />
                <img src="/images/spotiii.png" className="h-[30px] w-[30px]" alt="Spotify" />
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Episodes section */}
      <div className="px-8">
        <h1>ALL EPISODES ({Episodes.length} AVAILABLE)</h1>
        <div className="mt-10 space-y-10">
          {currentEpisodes.map((episode) => (
            <div key={episode.id} className="grid md:grid-cols-12 gap-4">
              <div className="md:col-span-1">
                <img src={episode.image} alt={episode.title} />
              </div>

              <div className="md:col-span-7">
                <p className="mb-1 text-[13px]">
                  {episode.date} <span className="mx-1">•</span> {episode.min}
                </p>
                <h1 className="mb-1 text-[20px]">{episode.title}</h1>
                <p className="mb-1 text-[15px]">{episode.subtitle}</p>
                <div className="flex gap-2 mt-4">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="bg-red-600 rounded-full flex items-center justify-center h-[30px] w-[30px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
      {/* Pagination */}
      <div className="mt-12 flex justify-start gap-3 px-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-4 py-2 border rounded ${
                currentPage === num
                  ? "bg-[#2B3221] text-white"
                  : "bg-white text-black"
              }`}
            >
              {num}
            </button>
          ))}
        </div>

      <Footer />
    </section>
  );
}
