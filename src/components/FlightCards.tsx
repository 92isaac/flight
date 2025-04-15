/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import { plane, world } from "@/assets";

const flightData = [
  {
    title: "Boeing 787",
    price: "$548",
    bgColor: "bg-[#D2A43C]",
    textColor: "text-white",
    image: plane,
  },
  {
    title: "Airbus 811",
    price: "$620",
    bgColor: "bg-[#30433E]",
    textColor: "text-white",
    image: plane,
  },
  {
    title: "Total Flights",
    price: "850",
    bgColor: "bg-[#30433E]",
    textColor: "text-white",
    image: world,
    isMap: true,
  },
];

const FlightCards = () => {
  return (
    <div className="w-full flex flex-wrap justify-between gap-5 p-4">
      {flightData.map((item:any, index:number) => (
        <div
          key={index}
          className={`relative flex flex-col justify-between ${item.bgColor} ${item.textColor} rounded-2xl p-5  h-[120px] min-w-[380px] shadow-sm`}
        >
          <div className="z-10">
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-2xl font-bold mt-1">{item.price}</p>
          </div>
          <div className="absolute bottom-0 right-0 w-42 h-28">
            <Image
              src={item.image}
              alt="plane"
              width={300}
              height={300}
              className={`absolute bottom-0 right-0 ${
                item.isMap ? "object-contain" : "rotate-[10deg]"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightCards;