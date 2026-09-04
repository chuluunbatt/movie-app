import React from "react";

export const SelectedMovie = () => {
  return (
    <div>
      <div className="flex gap-5 my-10">
        <button className="border rounded-2xl text-2xl px-2 ">
          Fairy Tail
        </button>
        <button className="border rounded-2xl text-2xl px-2 ">
          Pop Musical
        </button>
        <button className="border rounded-2xl text-2xl px-2 ">Fantasy</button>

        <button className="border rounded-2xl text-2xl px-2 ">Musical</button>
        <button className="border rounded-2xl text-2xl px-2 ">Romance</button>
      </div>
    </div>
  );
};
