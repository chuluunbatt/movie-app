"use client";
import { SelectedMovie } from "@/app/components/SelectedMovie";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export const page = ({ rating, title }) => {
  const [movie, setMovie] = useState();
  const [similar, setSimilar] = useState();

  const params = useParams();
  const movieId = params.id;
  // /movie/${movieId}?language=en-US
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8",
    },
  };
  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const detailRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          options,
        );
        const creditsRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          options,
        );
        const similarRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US`,
          options,
        );

        const detailData = await detailRes.json();
        setMovie(detailData);
        const creditsData = await creditsRes.json();

        const similarData = await similarRes.json();
        setSimilar(similarData.results);

        // console.log("creditsDate", creditsData);
        console.log("SIMILAR", similarData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovieDetail();
  }, []);
  console.log("SIMILAR", similar);
  return (
    <div className="mx-45 mt-15">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold">{movie?.original_title}</h1>
          <p className="text-2xl">{movie?.release_date}</p>
        </div>
        <div className="  text-3xl ">
          <div className="">
            <h1 className="text-xs font-bold">Rating</h1>
            <div className="flex">
              {" "}
              <img src="/star.svg " alt="od" className="size-7" />
              <p>{movie?.vote_average}/10</p>
            </div>
          </div>
          <h1 className="mt-2"> {title} </h1>
        </div>
      </div>
      <div className="flex gap-12 mt-6">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          className="w-150 h-220"
        />
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          className="w-full h-220 "
        />
      </div>
      <SelectedMovie />
      <div className="text-xl mt-10">{movie?.overview}</div>
      <div className="my-8">
        <h1 className="text-3xl  font-semibold  ">
          Director{movie?.character}
        </h1>
        <div className="border my-4 w-full"></div>
        <h1 className="text-3xl font-semibold    ">
          Writers{movie?.character}
        </h1>
        <div className="border my-4 w-full"></div>
        <h1 className="text-3xl font-semibold  ">
          Stars{movie?.characters}
        </h1>{" "}
        <div className="border my-4 w-full"></div>
      </div>

      <div className="flex justify-between p-8">
        <h1 className="text-5xl">More like this</h1>
        <button className="text-2xl">See More</button>
      </div>
      <div className="grid grid-cols-5 gap-10 mt-6 mb-30">
        {similar?.slice(0, 5).map((amka) => {
          return (
            <div
              key={amka.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-sm">
              <img
                className="w-full h-150  object-cover"
                src={`https://image.tmdb.org/t/p/w500${amka?.poster_path}`}
                alt={amka?.original_title || "poster"}
              />
              <div className="bg-gray-500 p-4 flex-1 flex flex-col justify-between">
                <div className="flex items-center gap-1">
                  <img src="/star.svg" alt="od" className="w-7 h-7" />
                  <p className="font-bold text-3xl ">
                    {amka?.vote_average ? amka.vote_average.toFixed(1) : "N/A"}
                    /10
                  </p>
                </div>
                <h1 className="mt-2  font-bold text-2xl">
                  {amka?.original_title}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default page;
``;
