import React from "react";

export const MovieCard = ({ imgSrc, title, rating }) => {
  return (
    <div className="mt-8  gap-10   ">
      <div>
        <img
          className="w-75 h-110   "
          src={`https://image.tmdb.org/t/p/original${imgSrc}`}
          alt="poster"
        />
        <div className=" bg-gray-100 w-75  text-2xl pb-25">
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
