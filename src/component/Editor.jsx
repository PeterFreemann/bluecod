import React from "react";

const cards = [
  {
    id: 1,
    name: "The Future of Work: Embracing Remote and Hybrid Workforces",
    images: "/images/africabusinessradio.png",
    date: "Sept 7, 2023",
    min: "35 mins",
  },
  {
    id: 2,
    name: "ACES DESIGN oversized striped t-shirt with sports graphic in black",
    images: "/images/first.jpeg",
    date: "Sept 5, 2023",
    min: "55 mins",
  },
];

export default function Editor() {
  return (
    <section className="bg-[#f6f6f6] px-4 md:px-12 py-8">
      <div>
        <div className=" text-left mb-8">
          <h1 className="text-[24px] font-bold">EDITOR’S PICKS</h1>
          <p className="text-[16px] mt-2 text-gray-500 font-bold">
            Featured Episodes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="feature-episode flex flex-col justify-end">
            <div className="py-9  bg-[rgba(0,0,0,0.6)] px-5">
              <h1 className="flex flex-col text-left text-white text-[24px] font-bold font-[800]">
                Bridging the Financing Gap in Nigeria’s off-grid sector
              </h1>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cards.map((card) => (
                <div key={card.id} className=" h-[442px] ">
                  <img
                    src={card.images}
                    alt={card.name}
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
                      <h1 className="text-xl font-bold text-left text-black text-[18px]">
                        {card.name}
                      </h1>

                      <div className="py-3 text-black text-sm flex gap-1 ">
                        <p>{card.date}</p> | <p>{card.min}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex">
              <img
                src="/images/giftcards.jpeg"
                alt=""
                className="w-full mt-[20px] h-[99px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
