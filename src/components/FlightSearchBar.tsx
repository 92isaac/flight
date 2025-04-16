"use client";

import React, { useState } from "react";
import { MapPin, CalendarDays, User, Plane } from "lucide-react";
import DateRangePicker from "./DateRangePicker";
import { IoSwapHorizontal } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const FlightSearchBar: React.FC = () => {
  const [selected, setSelected] = useState<"ONE WAY" | "ROUND TRIP">("ONE WAY");

  const options: Array<"ONE WAY" | "ROUND TRIP"> = [
    "ONE WAY",
    "ROUND TRIP",
    // "MULTI CITY",
  ];

  const [from, setFrom] = useState("MM1 (LAG)");
  const [to, setTo] = useState("KAN (Kano)");

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };
  return (
    <div className="bg-[#eaf3f1] px-6 py-4 rounded-3xl w-full mx-auto">
      <div className="flex flex-wrap w-full justify-between items-center gap-4">
        <div className="grid grid-cols-2 gap-5 w-full ">
       

          <div className="flex items-center bg-[#e1edeb] rounded-full justify-between">
            <div className="flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium text-[#365553]">
              <MapPin size={16} />
              <span>{from}</span>
            </div>

            <button
              onClick={handleSwap}
              className="flex items-center justify-center bg-[#365553] rounded-full p-2 transition hover:rotate-180 duration-300"
            >
              <IoSwapHorizontal size={20} className="text-[#e1edeb]" />
            </button>

            <div className="flex items-center gap-2 bg-[#e1edeb] px-4 py-3 rounded-full text-sm font-medium text-[#365553]">
              <MapPin size={16} />
              <span>{to}</span>
            </div>
          </div>

          <div className="flex items-center gap-5 w-full justify-between">
            <div className="flex flex-1 items-center justify-center gap-4 bg-[#e1edeb] px-4 py-3 rounded-full text-sm font-medium text-[#365553]">
              <CalendarDays size={16} />
              <DateRangePicker />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <div className="flex flex-1 justify-center items-center gap-4 bg-[#e1edeb] px-4 py-3 rounded-full text-sm font-medium text-[#365553]">
                  <User size={16} />
                  <span>2 TRAVELLER</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 z-[10000000] font-rubik font-normal"
                align="end"
                forceMount
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem className="font-semibold">
                    1 TRAVELLER
                  </DropdownMenuItem>
                  {/* <DropdownMenuSeparator /> */}
                  <DropdownMenuItem>3-5 TRAVELLER</DropdownMenuItem>
                  <DropdownMenuItem>MORE THAN 5 TRAVELLER</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
        <div className="flex flex-1 bg-[#e1edeb] py-1 rounded-full overflow-hidden text-sm font-medium text-[#365553]">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={`px-6 py-2 h-full transition-all flex-1 ${
                selected === option
                  ? "bg-[#365553] text-white"
                  : "bg-transparent text-[#365553]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex flex-1 flex-wrap justify-between items-center gap-4">
          <div className="flex flex-1 items-center justify-center gap-2 bg-[#e1edeb] px-4 py-3 rounded-full text-sm font-medium text-[#365553]">
            <Plane size={16} />
            <span>FIRST CLASS</span>
          </div>

          {/* Search Button */}
          <button className="bg-[#c9992d] flex-1 hover:bg-[#b38728] text-white text-sm font-bold px-10 py-3 rounded-full">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchBar;
