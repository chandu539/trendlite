"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from '../sanity/lib/client';// Adjust the path to your sanity client
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const HeroBanner = () => {
  const [posts, setPosts] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // GROQ query to fetch featured posts
    const query = `*[_type == "post" && defined(mainImage)] | order(publishedAt desc)[0..3]{
      _id,
      title,
      "slug": slug.current,
      "category": category->slug.current,
      mainImage
    }`;


    client
      .fetch(query)
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
      });
  }, []);

  useEffect(() => {
    if (posts.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % posts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [posts]);

  if (posts.length === 0) {
    return (
      <div className="w-full h-72 md:h-[20rem] flex items-center justify-center rounded-2xl shadow-lg mb-10 bg-gray-200">
        <p className="text-gray-600">Loading featured posts...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-72 md:h-[20rem] overflow-hidden rounded-2xl shadow-lg mb-10">
      {posts.map((post, index) => (
        <div
          key={post._id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
            index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
          }`}
        >
          {/* Image */}
          <div className="relative w-full h-full">
            <Image
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.title}
              fill
              priority={index === current} // prioritize only current image
              style={{ objectFit: "cover" }}
              className="brightness-75"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>

          {/* Overlay with title and link */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
            <Link href={`/${post.slug}`}>
              <h2 className="text-white text-2xl md:text-4xl font-semibold hover:underline cursor-pointer drop-shadow-lg">
                {post.title}
              </h2>
            </Link>
          </div>
        </div>
      ))}

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {posts.map((_, index) => (
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
