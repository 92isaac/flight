import React from 'react';
import { MapPin, CalendarDays, User, Plane } from 'lucide-react';
import DateRangePicker from './DateRangePicker';

const FlightSearchBar: React.FC = () => {
  return (
    <div className="bg-[#eaf3f1] p-6 rounded-3xl max-w-6xl mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Locations */}
        <div className="flex items-center gap-2 bg-[#e1edeb] px-4 py-3 rounded-full text-sm font-medium text-[#365553]">
          <MapPin size={16} />
          <span>NEY YORK (JFK)</span>
        </div>
        <div className="flex items-center justify-center bg-[#e1edeb] rounded-full p-3">
          {/* <SwapHorizontal size={20} className="text-[#365553]" /> */}
        </div>
        <div className="flex items-center gap-2 bg-[#e1edeb] px-4 py-3 rounded-full text-sm font-medium text-[#365553]">
          <MapPin size={16} />
          <span>MUMBAI (BOM)</span>
        </div>

        {/* Date Picker */}
        <div className="flex items-center gap-2 bg-[#e1edeb] px-4 py-3 rounded-full text-sm font-medium text-[#365553]">
          <CalendarDays size={16} />
          <DateRangePicker />
        </div>

        {/* Traveller */}
        <div className="flex items-center gap-2 bg-[#e1edeb] px-4 py-3 rounded-full text-sm font-medium text-[#365553]">
          <User size={16} />
          <span>2 TRAVELLER</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
        {/* Trip Type */}
        <div className="flex bg-[#e1edeb] rounded-full overflow-hidden text-sm font-medium text-[#365553]">
          <button className="px-6 py-2 bg-[#365553] text-white rounded-full">ONE WAY</button>
          <button className="px-6 py-2">ROUND TRIP</button>
          <button className="px-6 py-2">MULTI CITY</button>
        </div>

        {/* Class */}
        <div className="flex items-center gap-2 bg-[#e1edeb] px-4 py-3 rounded-full text-sm font-medium text-[#365553]">
          <Plane size={16} />
          <span>FIRST CLASS</span>
        </div>

        {/* Search Button */}
        <button className="bg-[#c9992d] hover:bg-[#b38728] text-white text-sm font-bold px-10 py-3 rounded-full">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default FlightSearchBar;