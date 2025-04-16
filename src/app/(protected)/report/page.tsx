// import FlightSearch from '@/components/FlightSearch'
// import FlightList from "@/components/FiightList";
import FlightSearchBar from "@/components/FlightSearchBar";
import LastTrips from "@/components/LastTripResult";
// import FlightSidebar from "@/components/FlightSideBar";
import ResultsHeader from "@/components/ResultHeader";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <FlightSearchBar />

      <ResultsHeader />

      <div className="w-full flex gap-3 justify-between items-center h-[]">
        <div className="w-3/3">
        <LastTrips />
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
