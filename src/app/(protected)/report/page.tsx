"use client";

import FlightSearchBar from "@/components/FlightSearchBar";
import LastTrips from "@/components/LastTripResult";
import ResultsHeader from "@/components/ResultHeader";
import { tripData } from "@/lib/utils";
import React, { useState } from "react";

interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

const Page = () => {
  const [filteredTrips, setFilteredTrips] = useState(tripData);

  const [from, setFrom] = useState<LocationOption | null>(null);
  const [to, setTo] = useState<LocationOption | null>(null);
  const [status, setStatus] = useState<string>("");
  const [ticketNo, setTicketNo] = useState<string>("");
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true); 

    setTimeout(() => {
      let filtered = [...tripData];

      if (from) {
        filtered = filtered.filter(
          (trip) => trip.departureLocation?.code === from.code
        );
      }

      if (to) {
        filtered = filtered.filter(
          (trip) => trip.arrivalLocation?.code === to.code
        );
      }

      if (status) {
        filtered = filtered.filter((trip) => trip.status === status);
      }

      if (ticketNo.trim()) {
        filtered = filtered.filter((trip) =>
          trip.id.toLowerCase().includes(ticketNo.trim().toLowerCase())
        );
      }

      if (dateRange.startDate && dateRange.endDate) {
        filtered = filtered.filter((trip) => {
          const depDate = new Date(trip.departureDate);
          return (
            depDate >= dateRange.startDate! && depDate <= dateRange.endDate!
          );
        });
      }

      setFilteredTrips(filtered);
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="w-full flex flex-col gap-5">
      <FlightSearchBar
        from={from}
        to={to}
        status={status}
        ticketNo={ticketNo}
        dateRange={dateRange}
        setFrom={setFrom}
        setTo={setTo}
        setStatus={setStatus}
        setTicketNo={setTicketNo}
        setDateRange={setDateRange}
        onSearch={handleSearch}
        isLoading={loading}
      />

      <ResultsHeader count={filteredTrips.length} />

      <div className="w-full flex gap-3 justify-between items-center h-[]">
        <div className="w-3/3">
          <LastTrips trips={filteredTrips} loading={loading} />
          {/* <FlightList /> */}
        </div>
        {/* <div className="w-1/3">
          <FlightSidebar />
        </div> */}
      </div>
    </div>
  );
};

export default Page;
