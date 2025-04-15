"use client";

import React from "react";
import Image from "next/image";
import { ani, ben, fli, girl } from "@/assets";

const tripData = [
  {
    name: "Jame Dan",
    email: "john@gmail.com",
    flight: "Lagos",
    members: "R",
    price: "N56k",
    avatar: girl,
    id:"12A4E67",
  },
 
  {
    name: "Martin Loiness",
    email: "martin_loi@gmail.com",
    flight: "Abuja",
    members: "0",
    price: "N56k",
    avatar: ani,
    id: "12A4E34",
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    flight: "Portharcout",
    members: "R",
    price: "N56k",
    avatar: ben,
    id: "45QER7T",
  },
  {
    name: "Martin Loiness",
    email: "martin_loi@gmail.com",
    flight: "Kaduna",
    members: "0",
    price: "N56k",
    avatar: fli,
    id: "09GHT23",
  },
];

const LastTrips: React.FC = () => {
  return (
    <div className="bg-white p-5 rounded-2xl w-full mx-auto h-[350px] overflow-y-auto custom-scrollbar">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Latest Bookings</h2>
        <p className="text-sm text-gray-500">Overview of latest booking</p>
      </div>

      <div className="grid grid-cols-7 text-sm font-medium text-gray-500 border-b border-dashed pb-3">
        <span className="">Flight No</span>
        <span className="">Booking Ref.</span>
        <span className="col-span-2">Name</span>
        <span>Destination</span>
        <span className="text-center">Trip</span>
        <span className="text-right">Ticket Price</span>
      </div>

      {tripData.map((trip, idx) => (
        <div
          key={idx}
          className="grid grid-cols-7 items-center py-4 border-b last:border-none border-dashed"
        >
          {/* Member */}
          <p className="text-sm text-gray-700">{trip.id}</p>
          <p className="text-sm text-gray-700">{trip.id}</p>
          <div className="flex items-center gap-3 col-span-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={trip.avatar}
                alt={trip.name}
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-800">{trip.name}</p>
              <p className="text-gray-500">{trip.email}</p>
            </div>
          </div>

          {/* Flight */}
          <p className="text-sm text-gray-700">{trip.flight}</p>

          {/* Total Members */}
          <div className="flex justify-center">
            <span className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
              {trip.members}
            </span>
          </div>

          {/* Price */}
          <p className="text-right font-semibold text-gray-800">{trip.price}</p>
        </div>
      ))}
    </div>
  );
};

export default LastTrips;