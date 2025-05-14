"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";  // Import Image from next/image

const featuredPosts = [
  {
    id: 1,
    title: "టాప్ 5 బెస్ట్ ఫోన్లు ₹20,000 లో (Top 5 Best Phones)",
    image: "/images/phone.jpg",
    link: "/tech/top-phones-under-20000",
  },
  {
    id: 2,
    title: "హీరో మహేష్ బాబు కొత్త మూవీ రివ్యూ",
    image: "/images/mahesh.jpg",
    link: "/movies/mahesh-babu-new-movie",
  },
  {
    id: 3,
    title: "కూరగాయలు తినడం వల్ల ఆరోగ్య ప్రయోజనాలు",
    image: "/images/vegetables.jpg",
    link: "/health/vegetable-benefits",
  },
  {
    id: 4,
    title: "2025 లో కొత్తగా వచ్చిన AI గాడ్జెట్లు",
    image: "/images/ai-gadgets.jpg",
    link: "/inventions/latest-ai-gadgets-2025",
  },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-72 md:h-[20rem] overflow-hidden rounded-2xl shadow-lg mb-10">
      {featuredPosts.map((post, index) => (
        <div
          key={post.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out transform ${
            index === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-95 z-0"
          }`}
        >
          <div className="w-full h-full relative">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              priority
              className="brightness-75"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
            <Link href={post.link}>
              <h2 className="text-white text-2xl md:text-4xl font-semibold hover:underline cursor-pointer drop-shadow-lg">
                {post.title}
              </h2>
            </Link>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white" : "bg-gray-400/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
