"use client";

import React, { useState } from "react";
import Header from "../../component/header";
import UnderHeader from "../../component/UnderHeader";
import Footer from "../../component/Footer";

const categories = [
  {
    title: "News & Storytelling",
    image: "/images/breakingnews.jpeg",
  },
  {
    title: "Health & Fitness",
    image: "/images/breaking.jpeg",
  },
  {
    title: "Business & Finance",
    image: "/images/podcastii.jpeg",
  },
  {
    title: "Arts & Culture",
    image: "/images/techentertainment.jpeg",
  },
];


const episodesData = [
  {
    id: 1,
    title: "Fitness Focus",
    date: "AUG 29, 2023",
    min: "28 MINS",
    image: "/images/trending.jpeg",
    subtitle: "EP12: Cardio Vascular Exercise Part 3",
  },
  {
    id: 2,
    title: "Fitness Focus",
    date: "AUG 29, 2023",
    min: "28 MINS",
    image: "/images/trending.jpeg",
    subtitle: "EP12: Cardio Vascular Exercise Part 3",
  },
  {
    id: 3,
    title: "Fitness Focus",
    date: "AUG 29, 2023",
    min: "28 MINS",
    image: "/images/trending.jpeg",
    subtitle: "EP12: Cardio Vascular Exercise Part 3",
  },
  {
    id: 4,
    title: "Fitness Focus",
    date: "AUG 29, 2023",
    min: "28 MINS",
    image: "/images/trending.jpeg",
    subtitle: "EP12: Cardio Vascular Exercise Part 3",
  },
  {
    id: 5,
    title: "Fitness Focus",
    date: "AUG 29, 2023",
    min: "28 MINS",
    image: "/images/trending.jpeg",
    subtitle: "EP12: Cardio Vascular Exercise Part 3",
  },
  {
    id: 6,
    title: "Fitness Focus",
    date: "AUG 29, 2023",
    min: "28 MINS",
    image: "/images/trending.jpeg",
    subtitle: "EP12: Cardio Vascular Exercise Part 3",
  },
  {
    id: 7,
    title: "Fitness Focus",
    date: "AUG 29, 2023",
    min: "28 MINS",
    image: "/images/trending.jpeg",
    subtitle: "EP12: Cardio Vascular Exercise Part 3",
  },
  {
    id: 8,
    title: "Fitness Focus",
    date: "AUG 29, 2023",
    min: "28 MINS",
    image: "/images/trending.jpeg",
    subtitle: "EP12: Cardio Vascular Exercise Part 3",
  },
  {
    id: 9,
    title: "Fitness Focus",
    date: "AUG 29, 2023",
    min: "28 MINS",
    image: "/images/trending.jpeg",
    subtitle: "EP12: Cardio Vascular Exercise Part 3",
  },
];

export default function Page() {
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
      <Header />
      <UnderHeader />
      <div className="p-10">
        <h1 className="font-bold">ALL PODCASTS</h1>
        <p className="mt-5">
          Sort by : Popular ... | Sort by category : All ...
        </p>

        <div className="mt-8">
          <div className="space-y-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {currentEpisodes.map((episode) => (
              <div key={episode.id} className="h-[442px] ">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="h-[288px] w-full object-cover"
                />
                <div className="flex flex-row gap-2 p-1 py-4">
                 
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
                
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-start gap-4">
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
      </div>
      <div>
      <div className="px-10">
      <h1 className="font-bold text-xl mb-4">Explore other categories</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-[177px] gap-4">
  {categories.map((category, index) => (
    <div
    key={index}
    className="relative rounded-lg overflow-hidden text-white text-lg font-semibold"
    style={{
      backgroundImage: `url(${category.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute bottom-0 w-full bg-black/50 px-4 py-2">
      <h1 className="text-white">{category.title}</h1>
    </div>
  </div>
  ))}
</div>

      </div>
        <div >

        </div>
      </div>
      <Footer/>
    </section>
  );
}
