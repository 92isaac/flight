"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { formatCurrency, tripData } from "@/lib/utils";

interface LastTripsProps {
  trips: typeof tripData;
  loading: boolean;
}
const LastTrips: React.FC<LastTripsProps> = ({ trips, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-yellow-600 font-semibold text-lg animate-pulse">
          Loading bookings...
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white p-5 rounded-2xl w-full mx-auto h-[450px] overflow-y-auto custom-scrollbar">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Bookings</h2>
        <p className="text-sm text-gray-500">Overview of booking</p>
      </div>

      <div className="grid grid-cols-9 text-sm font-medium text-gray-500 border-b border-dashed pb-3">
        <span className="">Flight No</span>
        <span className="">Booking Ref.</span>
        <span className="col-span-2">Name</span>
        <span>Destination</span>
        <span className="text-center">Trip</span>
        <span className="text-right">Ticket Price</span>
        <span className="text-right">Action</span>
      </div>

      {
              trips.length === 0 ? (
                <p className="text-center text-gray-500 mt-10">No bookings found.</p>
              ) : (
        
      
                trips.map((trip, idx) => (
        <div
          key={idx}
          className="grid grid-cols-9 items-center py-4 border-b last:border-none border-dashed"
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
          <div className="text-right col-span-2">
          <div className="text-md font-semibold text-gray-700">{formatCurrency(trip?.price2 ?? 0, "NGN", "en-NG")}</div>
          <Button className="bg-yellow-600 text-white rounded-full px-4 py-1 text-sm mt-2 hover:bg-yellow-700">
            View More
          </Button>
        </div>
        </div>
      )))}
    </div>
  );
};

export default LastTrips;