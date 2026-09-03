import React from "react";

export const MovieRecList = ({ imgSrc, title, rating, id }) => {
  return (
    <div>
      <img src={`movie/${id}/similar?language=en-US&page=1${imgSrc}`} alt="" />
    </div>
  );
};
