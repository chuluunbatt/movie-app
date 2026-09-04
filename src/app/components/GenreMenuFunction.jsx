import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const GenreMenuFunction = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-4  p-5">
          <span className="  text-2xl ">Genre</span>
          <ChevronDown className="h-7 w-7" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuItem>Action</DropdownMenuItem>
        <DropdownMenuItem>Comedy</DropdownMenuItem>
        <DropdownMenuItem>Drama</DropdownMenuItem>
        <DropdownMenuItem>Fantasy</DropdownMenuItem>
        <DropdownMenuItem>Adventure</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreMenuFunction;
