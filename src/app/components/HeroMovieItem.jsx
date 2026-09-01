import { Play, Star } from "lucide-react";
import React from "react";

export const HeroMovieItem = ({ image, title, rating, desc }) => {
  return (
    <div className="w-screen h-150 relative mt-7 ">
      <img
        src="Feature.png"
        layout="fill"
        alt="hero"
        className="z-8 w-screen "
      />
      <div className="z-2 absolute left-4 top-[30%] w-109 text-white flex flex-col gap-4 m-35">
        <p className="text-3xl ">Now Playing</p>
        <p className="text-5xl font-bold">{title}</p>
        <div className="flex">
          <Star color="yellow" fill="yellow" />
          <p className="text-3xl">{rating}/10</p>
        </div>
        <p className="text-[20px]">{desc}</p>
        <button className="bg-white text-black w-fit flex p-3 rounded-2xl text-[20px] gap-2 ">
          <Play />
          Watch Trailer
        </button>
      </div>
    </div>
  );
};
