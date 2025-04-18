import React from "react";

export default function GetUpdates() {
  return (
    <section className=" md:px-12 bg-[#F6E8E8] md:h-[986px] lg:h-[486px] h-[850px]  ">
      <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
        <div className="h-[486px] flex items-center justify-start px-10">
          <div className="flex flex-col max-w-xl">
            <h1 className="text-[32px] font-bold mb-2 text-left">
              Never stop listening!
            </h1>
            <h1 className="text-[24px]  mb-4 text-left font-[300] text-[#282828]">
              Every episode is a journey <br />
              you don’t wanna miss out on.
            </h1>
            <h1 className="text-[16px] text-left mt-15 mb-5  ">
              Get the latest headlines and unique ABR stories, sent every
              weekday.
            </h1>

            <div className="flex w-[auto] h-[49px]">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow text-sm px-4 rounded-l-md border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500 md:w-[467px] w-auto"
              />
              <button className=" bg-red-600 text-white text-sm  hover:bg-red-700 transition ml-2 w-[auto] px-4 h-[50px] font-bold">
                Get Me In
              </button>
            </div>
          </div>
        </div>

        <div className="flex  justify-center items-center  ">
          <div className="flex  justify-center items-center  ">
            <img
              src="/images/updates.jpeg"
              alt=""
              className="md:w-[200px] md:h-[200px] w-[100px] h-[100px] rounded-full  relative md:left-30 md:top-22 top-[100px] left-20 "
            />
            <img
              src="/images/update.png"
              alt=""
              className="md:w-[404px] md:h-[404px] h-[250px] w-[250px] rounded-full mr-20 md:mr-30 lg:mr-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
