"use client";

import Image from "next/image";
import { MovieCard } from "./components/MovieCard";
import { NavigationBar } from "./components/NavigationBar";
import { HeroMovieItem } from "./components/HeroMovieItem";
import { useEffect } from "react";
import { useState } from "react";
import { MovieList } from "./components/MovieList";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8",
    },
  };

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options,
        );
        const data = await res.json();

        setMovies(data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPopular();
  }, []);
  console.log(movies);

  return (
    <div className="mb-40">
      <NavigationBar />
      <HeroMovieItem
        image={"hero-mock.jpg"}
        title={"Wicked"}
        desc={
          "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "
        }
        rating={"6.9"}
      />
      <MovieList />
      <div className="grid grid-cols-5 ml-20 ">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              imgSrc={movie.poster_path}
              rating={movie.vote_average}
              title={movie.original_title}
            />
          );
        })}
      </div>
    </div>
  );
}
