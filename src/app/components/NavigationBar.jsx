import { Button } from "@base-ui/react";
import { ChevronDown, MoonIcon } from "lucide-react";
import React from "react";

export const NavigationBar = () => {
  return (
    <div className=" flex justify-around w-screen p-4 items-center  ">
      <img src="logo.png" className="h-8" alt="logo" />
      <div>
        <Button>
          <ChevronDown />
        </Button>
        <input
          placeholder="Search..."
          className="w-95 border border-gray-300 rounded-2xl p-3 "
        />
      </div>
      <button>
        <MoonIcon className="border size-10" />
      </button>
    </div>
  );
};
