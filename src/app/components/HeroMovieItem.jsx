import { Play, Star } from "lucide-react";
import React from "react";

export const HeroMovieItem = ({ title, rating, desc }) => {
  return (
    <div className="relative w-full h-250 overflow-hidden rounded-2xl bg-zinc-950">
      <img
        src="Feature.png"
        alt={title || "Hero poster"}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute left-6 bottom-16  px-35 py-40 z-20 flex max-w-xl flex-col gap-4 text-white">
        <p className="text-xl font-bold">Now Playing</p>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          {title}
        </h1>

        <div className="flex items-center gap-2">
          <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
          <p className="text-2xl font-bold">{rating}</p>
          <span className="text-2xl font-bold">/10</span>
        </div>

        <p className="text-xl">{desc}</p>

        <button className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-2xl text-lg hover:bg-zinc-200 transition active:scale-95 w-fit mt-2">
          <Play className="h-5 w-5 fill-current" />
          Watch Trailer
        </button>
      </div>
    </div>
  );
};
