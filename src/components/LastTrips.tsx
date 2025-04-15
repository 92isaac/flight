"use client";

import React from "react";
import Image from "next/image";

const tripData = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    flight: "Qatar",
    members: 5,
    price: "$56k",
    avatar: "/john.jpg", // Replace with actual image path or external URL
  },
  {
    name: "Martin Loiness",
    email: "martin_loi@gmail.com",
    flight: "Emirates",
    members: 2,
    price: "$56k",
    avatar: "/martin.jpg", // Replace with actual image path or external URL
  },
];

const LastTrips: React.FC = () => {
  return (
    <div className="bg-white p-5 rounded-2xl w-full mx-auto h-[350px]">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Last Trips</h2>
        <p className="text-sm text-gray-500">Overview of latest month</p>
      </div>

      <div className="grid grid-cols-4 text-sm font-medium text-gray-500 border-b border-dashed pb-3">
        <span>Members</span>
        <span>Flight</span>
        <span className="text-center">Total Members</span>
        <span className="text-right">Ticket Price</span>
      </div>

      {tripData.map((trip, idx) => (
        <div
          key={idx}
          className="grid grid-cols-4 items-center py-4 border-b last:border-none border-dashed"
        >
          {/* Member */}
          <div className="flex items-center gap-3">
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