import FlightCards from "@/components/FlightCards";
import FlightsScheduleChart from "@/components/FlightSchedule2";
import FlightShareChart from "@/components/FlightShare";
// import FlightsScheduleChart from "@/components/FlightsScheduleChart";
import LastTrips from "@/components/LastTrips";
import StatisticsChart from "@/components/StaticticsChart";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <FlightCards />
      <div className="w-full flex gap-5 justify-between items-center h-[]">
        <div className="w-2/3">
          <LastTrips />
        </div>
        <div className="w-1/3">
          <StatisticsChart />
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
      <div className="w-1/3">
        <FlightShareChart />
      </div>
      <div className="w-2/3"> 
        <FlightsScheduleChart />
       </div>

      </div>
    </div>
  );
};

export default Page;
