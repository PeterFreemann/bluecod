"use client";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faGift } from "@fortawesome/free-solid-svg-icons";

import React, { useRef } from "react";

const cards = [
  {
    id: 1,
    title: "Fitness focus",
    date: "AUG 29, 2023",
    min: "45 MINS",
    image: "/images/news.jpeg",
    subtitle: "Inspiring Talk",
  },
  {
    id: 2,
    title: "Fitness focus",
    date: "AUG 29, 2023",
    min: "45 MINS",
    image: "/images/hubcast.jpeg",
    subtitle: "Deep Dive",
  },
  {
    id: 3,
    title: "Fitness focus",
    date: "AUG 29, 2023",
    min: "45 MINS",
    image: "/images/nextgen.jpeg",
    subtitle: "Creative Minds",
  },
  {
    id: 4,
    title: "Fitness focus",
    date: "AUG 29, 2023",
    min: "45 MINS",
    image: "/images/mun.jpeg",
    subtitle: "Tech Hour",
  },
  {
    id: 5,
    title: "Fitness focus",
    date: "AUG 29, 2023",
    min: "45 MINS",
    image: "/images/sphere.jpeg",
    subtitle: "Business Chats",
  },
  
];

export default function Prodcast() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="px-4 md:px-12 py-8 relative">
      <div className="text-left mb-10">
        <h1 className="text-[24px] font-bold">Other Prodcast</h1>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div ref={scrollRef} className="flex gap-4 w-max scroll-smooth">
          {cards.map((card) => (
            <div
            key={card.id}
            className="w-[265px] h-[367px] rounded-lg overflow-hidden shadow-md group relative"
          >
            <div className="flex justify-center items-center w-full h-[234px]">
              <img
                src={card.image}
                alt={card.title}
                className="w-[223px] h-[234px] object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-gray-400 font-semibold text-lg text-[13px] text-left">
                {card.date} {card.min}
              </h2>
              <p className="text-black text-sm mt-1 text-[15px] text-left">
                {card.title}
              </p>
              <div className="flex items-center justify-between mt-2">
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
                {/* Show this only on hover */}
                <div className="hidden group-hover:flex bg-red-600 rounded-full items-center justify-center h-[50px] w-[50px] transition-all duration-300">
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
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
}
