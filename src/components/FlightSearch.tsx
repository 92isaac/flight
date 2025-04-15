

import React from 'react';
import {
  MapPin,
  Repeat,
  CalendarDays,
  User,
  // User2,
  Briefcase,
} from 'lucide-react';

const FlightSearch: React.FC = () => {
  return (
    <div className="bg-[#e7f0ef] flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-3xl p-6 w-full max-w-6xl space-y-4">
        {/* Top Inputs */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* From */}
          <div className="flex items-center bg-[#e7f0ef] rounded-full px-4 py-2 text-sm text-gray-800">
            <MapPin className="w-4 h-4 mr-2" />
            NEY YORK (JFK)
          </div>

          {/* Switch */}
          <div className="flex items-center justify-center bg-[#e7f0ef] rounded-full p-2">
            <Repeat className="w-4 h-4 text-gray-700" />
          </div>

          {/* To */}
          <div className="flex items-center bg-[#e7f0ef] rounded-full px-4 py-2 text-sm text-gray-800">
            <MapPin className="w-4 h-4 mr-2" />
            MUMBAI (BOM)
          </div>

          {/* Date */}
          <div className="flex items-center bg-[#e7f0ef] rounded-full px-4 py-2 text-sm text-gray-800">
            <CalendarDays className="w-4 h-4 mr-2" />
            29 JULY 2019
          </div>

          {/* Travellers */}
          <div className="flex items-center bg-[#e7f0ef] rounded-full px-4 py-2 text-sm text-gray-800">
            <User className="w-4 h-4 mr-2" />
            2 TRAVELLER
          </div>
        </div>

        {/* Trip Options */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Trip Types */}
          <div className="flex bg-[#e7f0ef] rounded-full p-1">
            <button className="px-4 py-2 rounded-full bg-[#3d5c58] text-white text-xs font-semibold shadow-inner">
              ONE WAY
            </button>
            <button className="px-4 py-2 rounded-full text-xs font-semibold text-[#3d5c58]">
              ROUND TRIP
            </button>
            <button className="px-4 py-2 rounded-full text-xs font-semibold text-[#3d5c58]">
              MULTI CITY
            </button>
          </div>

          {/* Class */}
          <div className="flex items-center bg-[#e7f0ef] rounded-full px-4 py-2 text-sm text-gray-800">
            <Briefcase className="w-4 h-4 mr-2" />
            FIRST CLASS
          </div>

          {/* Search */}
          <button className="bg-[#c89f41] hover:bg-[#b78d30] text-white font-semibold rounded-full px-6 py-2 text-sm">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;
