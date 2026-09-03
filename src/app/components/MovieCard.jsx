"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const MovieCard = ({ imgSrc, title, rating, id }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movie/${id}`)}
      className="mt-8  gap-10   ">
      <div>
        <img
          className="w-105 h-160   "
          src={`https://image.tmdb.org/t/p/original${imgSrc}`}
          alt="poster"
        />
        <div className=" bg-gray-100 w-105  text-3xl pb-25">
          <div className="flex  ">
            <img src="star.svg" alt="od" className="size-7" />

            <p>{rating}/10</p>
          </div>
          <h1 className="mt-2"> {title} </h1>
        </div>
      </div>
    </div>
  );
};
