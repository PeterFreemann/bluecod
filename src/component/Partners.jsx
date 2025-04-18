import React from 'react'

const partners = [
  { id: 1, image: "/images/worldbank.png" },
  { id: 2, image: "/images/workspace.png" },
  { id: 3, image: "/images/sapna.png" },
  { id: 4, image: "/images/southafrican.png" },
  { id: 5, image: "/images/nedbank.png" },
  { id: 6, image: "/images/pan.png" },
  { id: 7, image: "/images/mental.jpeg" },
  { id: 8, image: "/images/absa.png" },
  { id: 9, image: "/images/h.png" },
  { id: 10, image: "/images/embassy.png" }, // changed from 9 to 10
  { id: 11, image: "/images/mic.png" },
  { id: 12, image: "/images/africandevelopment.png" },
  { id: 13, image: "/images/impacthub.png" },
  { id: 14, image: "/images/businesssunday.png"},
  { id: 15, image: "/images/fledge.png" }, // added new unique ID
]


export default function Partners() {
  return (
    <section className=" flex flex-col justify-center items-center px-4 py-8 bg-white">
      <h1 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">
        OUR GLOBAL PARTNERS
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl w-full">
        {partners.map((partner) => (
          <div key={partner.id} className="w-24 sm:w-32 md:w-40">
            <img 
  src={partner.image} 
  alt={`Partner ${partner.id}`} 
  className="w-full h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
/>
          </div>
        ))}
      </div>
    </section>
  )
}
