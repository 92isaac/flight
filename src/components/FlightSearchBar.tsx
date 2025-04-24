"use client";

import React, { useState } from "react";
import { Plane } from "lucide-react";
import DateRangePicker from "./DateRangePicker";
import { IoSwapHorizontal } from "react-icons/io5";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
import { locationOptions, statusOptions } from "@/lib/utils";
import Select from "react-select";

const FlightSearchBar: React.FC = () => {
  // const [selected, setSelected] = useState<"ONE WAY" | "ROUND TRIP">("ONE WAY");

  // const options: Array<"ONE WAY" | "ROUND TRIP"> = [
  //   "ONE WAY",
  //   "ROUND TRIP",
  //   // "MULTI CITY",
  // ];

  const [status, setStatus] = useState("");

  const [from, setFrom] = useState<LocationOption | null>(null);
  const [to, setTo] = useState<LocationOption | null>(null);

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };
  return (
    <div className="bg-[#eaf3f1] px-6 py-4 rounded-3xl w-full mx-auto">
      <div className="flex flex-wrap w-full justify-between items-center gap-4">
        <div className="grid grid-cols-2 gap-5 w-full ">
          {/* <div className="flex items-center bg-[#e1edeb] rounded-full justify-between">
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
          </div> */}

          <div className="flex items-center bg-[#e1edeb] rounded-full justify-between gap-2">
            <div className="w-full max-w-[40%] px-2">
              <Select
                options={locationOptions}
                value={from}
                onChange={(selected) => selected && setFrom(selected)}
                // getOptionLabel={(option) => option.label}
                // getOptionValue={(option) => option.code}
                // className="text-sm"
                // isSearchable
                // classNames={{
                //   control: () => "bg-transparent border-none shadow-none",
                //   singleValue: () => "text-[#365553]",
                //   menu: () => "z-[999]",
                // }}
                getOptionLabel={(option) => `${option.label} - ${option.city}`}
                getOptionValue={(option) => option.code}
                placeholder="Select departure"
                classNamePrefix="flight"
                isSearchable
                className="text-sm bg-[#e1edeb] ring-0 border-none"
                classNames={{
                  control: () =>
                    "bg-transparent border-none bg-[#e1edeb] ring-0 shadow-none",
                  singleValue: () => "text-[#365553]",
                  input: () => "text-[#365553]",
                  menu: () => "z-[999]",
                }}
                filterOption={(option, inputValue) =>
                  option.label
                    .toLowerCase()
                    .includes(inputValue.toLowerCase()) ||
                  option.data.city
                    .toLowerCase()
                    .includes(inputValue.toLowerCase()) ||
                  option.data.code
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
                }
              />
            </div>

            <button
              onClick={handleSwap}
              className="flex items-center justify-center bg-[#365553] rounded-full p-2 transition hover:rotate-180 duration-300"
            >
              <IoSwapHorizontal size={20} className="text-[#e1edeb]" />
            </button>

            <div className="w-full max-w-[40%] px-2">
              <Select
                options={locationOptions}
                value={to}
                placeholder="Select arrival"
                onChange={(selected) => selected && setTo(selected)}
                getOptionLabel={(option) => `${option.label} - ${option.city}`}
                getOptionValue={(option) => option.code}
                classNamePrefix="flight"
                isSearchable
                className="text-sm bg-[#e1edeb] ring-0 border-none"
                classNames={{
                  control: () =>
                    "bg-transparent border-none bg-[#e1edeb] ring-0 shadow-none",
                  singleValue: () => "text-[#365553]",
                  input: () => "text-[#365553]",
                  menu: () => "z-[999]",
                }}
                filterOption={(option, inputValue) =>
                  option.label
                    .toLowerCase()
                    .includes(inputValue.toLowerCase()) ||
                  option.data.city
                    .toLowerCase()
                    .includes(inputValue.toLowerCase()) ||
                  option.data.code
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
                }
              />
            </div>
          </div>

          <div className="flex items-center gap-5 w-full justify-between">
            <div className="flex flex-1 w-full items-center justify-center gap-2 bg-[#e1edeb] px-4 py-1 rounded-full text-sm font-medium text-[#365553]">
              <Plane size={16} />
              <input
                type="text"
                name=""
                id=""
                className="h-full w-full py-2 px-2 border-0 outline-0 ring-0"
                placeholder="Ticket No."
              />
            </div>

            <div className="w-full flex-1 rounded-3xl px-2">
              <Select
                options={statusOptions}
                value={statusOptions.find((opt) => opt.value === status)}
                onChange={(selected) => {
                  if (selected) {
                    setStatus(selected.value);
                  }
                }}
                placeholder="Status"
                classNamePrefix="flight-status"
                isSearchable
                className="text-sm  ring-0 border-none"
                classNames={{
                  control: () =>
                    "bg-transparent py-1 border-none rounded-full bg-[#e1edeb] ring-0 shadow-none",
                  singleValue: () => "text-[#365553]",
                  input: () => "text-[#365553]",
                  menu: () => "z-[999]",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
        {/* <div className="flex flex-1 bg-[#e1edeb] py-1 rounded-full overflow-hidden text-sm font-medium text-[#365553]">
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
        </div> */}

        <div className="w-full max-w-[40%] hidden rounded-3xl px-2">
          <Select
            options={statusOptions}
            value={statusOptions.find((opt) => opt.value === status)}
            onChange={(selected) => {
              if (selected) {
                setStatus(selected.value);
              }
            }}
            placeholder="Status"
            classNamePrefix="flight-status"
            isSearchable
            className="text-sm  ring-0 border-none"
            classNames={{
              control: () =>
                "bg-transparent border-none rounded-full bg-[#e1edeb] ring-0 shadow-none",
              singleValue: () => "text-[#365553]",
              input: () => "text-[#365553]",
              menu: () => "z-[999]",
            }}
          />
        </div>

        <div className="flex flex-1 flex-wrap mx-auto w-2/3 justify-center items-center gap-4">
          <div className="flex flex- items-center justify-center gap-4 bg-[#e1edeb] px-4 py-3 rounded-full text-sm font-medium text-[#365553]">
            {/* <CalendarDays size={16} /> */}
            <DateRangePicker />
          </div>

          {/* Search Button */}
          <button className="bg-[#c9992d] flex- w-36 hover:bg-[#b38728] text-white text-sm font-bold px-10 py-3 rounded-full">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchBar;
