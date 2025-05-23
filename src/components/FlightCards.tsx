/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import { plane, world } from "@/assets";
import { formatCurrency } from "@/lib/utils";

const flightData = [
  {
    title: "Departure",
    price: "548",
    revenue: "8480000",
    bgColor: "bg-[#D2A43C]",
    textColor: "text-white",
    image: plane,
  },
  {
    title: "Pending",
    price: "202",
    revenue: "3480000",
    bgColor: "bg-[#1E9EB3]",
    textColor: "text-white",
    image: plane,
  },
  {
    title: "Expired",
    price: "50",
    revenue: "948000",
    bgColor: "bg-[#46C2B0]",
    textColor: "text-white",
    image: plane,
  },
  {
    title: "Refund",
    price: "50",
    revenue: "948000",
    bgColor: "bg-[#D2A43C]",
    textColor: "text-white",
    image: plane,
  },
  {
    title: "Total Tickets",
    price: "850",
    revenue: "53480000",
    bgColor: "bg-[#30433E]",
    textColor: "text-white",
    image: world,
    isMap: true,
  },
];

const FlightCards = () => {
  return (
    <div className="w-full flex flex-wrap justify-between gap- py-2">
      {flightData.map((item:any, index:number) => (
        <div
          key={index}
          className={`relative flex flex-col justify-between ${item.bgColor} ${item.textColor} rounded-2xl p-3  h-[120px] min-w-[235px] shadow-sm`}
        >
          <div className="z-10">
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-2xl font-bold mt-1">{item.price}</p>
          </div>
            <p className="text-xs font-bold mt-1">{formatCurrency(item.revenue, "NGN", "en-NG")}</p>
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