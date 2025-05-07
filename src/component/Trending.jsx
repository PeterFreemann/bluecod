"use client";

import React, { useRef } from "react";

const cards = [
  {
    id: 1,
    title: "Podcast 1",
    image: "/images/trending.jpeg",
    title: "Inspiring Talk",
    subtitle: "Episode 8",
    about:
      "The spelling mistakes in the text had been highlighted in green.,The text is finished, but the pictures will have to be pasted in later.You need to demonstrate to the examiners that you have more than a literal understanding of the text.",
  },
  {
    id: 2,
    title: "Podcast 2",
    image: "/images/trendingi.jpeg",
    title: "Inspiring Talk",
    subtitle: "Episode 8",
    about:
      "The spelling mistakes in the text had been highlighted in green.,The text is finished, but the pictures will have to be pasted in later.You need to demonstrate to the examiners that you have more than a literal understanding of the text.",
  },
  {
    id: 3,
    title: "Podcast 3",
    image: "/images/harmonize.jpeg",
    title: "Inspiring Talk",
    subtitle: "Episode 8",
    about:
      "The spelling mistakes in the text had been highlighted in green.,The text is finished, but the pictures will have to be pasted in later.You need to demonstrate to the examiners that you have more than a literal understanding of the text.",
  },
  {
    id: 4,
    title: "Podcast 4",
    image: "/images/lifestyle.jpeg",
    title: "Inspiring Talk",
    subtitle: "Episode 8",
    about:
      "The spelling mistakes in the text had been highlighted in green.,The text is finished, but the pictures will have to be pasted in later.You need to demonstrate to the examiners that you have more than a literal understanding of the text.",
  },
  {
    id: 5,
    title: "Podcast 5",
    image: "/images/willingness.jpeg",
    title: "Inspiring Talk",
    subtitle: "Episode 8",
    about:
      "The spelling mistakes in the text had been highlighted in green.,The text is finished, but the pictures will have to be pasted in later.You need to demonstrate to the examiners that you have more than a literal understanding of the text.",
  },
  {
    id: 6,
    title: "Podcast 6",
    image: "/images/trendingi.jpeg",
    title: "Inspiring Talk",
    subtitle: "Episode 8",
    about:
      "The spelling mistakes in the text had been highlighted in green.,The text is finished, but the pictures will have to be pasted in later.You need to demonstrate to the examiners that you have more than a literal understanding of the text.",
  },
  {
    id: 7,
    title: "Podcast 7",
    image: "/images/trending.jpeg",
    title: "Inspiring Talk",
    subtitle: "Episode 8",
    about:
      "The spelling mistakes in the text had been highlighted in green.,The text is finished, but the pictures will have to be pasted in later.You need to demonstrate to the examiners that you have more than a literal understanding of the text.",
  },
  
];

export default function Trending() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-4 md:px-12 py-8 relative">
      {/* Heading */}
      <div className="text-left mb-10">
        <h1 className="text-[24px] font-bold">Trending</h1>
        <p className="text-[16px] mt-2 text-gray-500 font-bold">
          Featured Podcasts
        </p>
      </div>

      {/* Left/Right Buttons */}
      <div className="absolute right-16 top-[90px] z-10 flex gap-2">
        <button
          onClick={() => handleScroll("left")}
          className="bg-white px-3 py-2 text-xl rounded-full shadow hover:bg-gray-100"
        >
          ←
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="bg-white px-3 py-2 text-xl rounded-full shadow hover:bg-gray-100"
        >
          →
        </button>
      </div>

      {/* Card Slider */}
      <div className="overflow-x-auto scrollbar-hide">
        <div ref={scrollRef} className="flex gap-4 w-max scroll-smooth">
        {cards.map((card) => (
  <div
    key={card.id}
    className="group relative w-[288px] h-[424px] overflow-hidden shadow-md rounded-lg"
  >
    <img
      src={card.image}
      alt={card.title}
      className="w-full h-full object-cover"
    />

    {/* Play Button on Hover in Top-Right Corner */}
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
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

    {/* Bottom Title Box */}
    <div className="absolute bottom-0 left-0 w-full bg-black/50 bg-opacity-100 px-4 py-3 transition-all duration-300 ease-in-out">
      <p className="text-gray-300 text-sm text-left">{card.subtitle}</p>
      <h2 className="text-white font-semibold text-lg mt-1 text-left">{card.title}</h2>

      {/* Hover-only Text */}
      <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 mt-2">
        <p className="text-gray-300 text-sm text-left leading-snug">
          {card.about}
        </p>

      </div>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
}
